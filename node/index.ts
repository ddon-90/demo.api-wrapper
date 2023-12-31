import type { ClientsConfig, ServiceContext, RecorderState } from '@vtex/api'
import { 
  LRUCache,
   method, Service } from '@vtex/api'

import { Clients } from './clients'
import { auth } from './middlewares/auth'
import { getSkuId } from './middlewares/getSkuId'
import { updatePrice } from './middlewares/updatePrice'
import { updateInventory } from './middlewares/updateInventory'
import { keepAlive } from './middlewares/keepAlive'


const TIMEOUT_MS = 30000

// Create a LRU memory cache.
// The @vtex/api HttpClient respects Cache-Control headers and uses the provided cache.
const memoryCache = new LRUCache<string, any>({ max: 10000 })

metrics.trackCache('catalog', memoryCache)

// This is the configuration for clients available in `ctx.clients`.
const clients: ClientsConfig<Clients> = {
  // We pass our custom implementation of the clients bag.
  implementation: Clients,
  options: {
    // All IO Clients will be initialized with these options, unless otherwise specified.
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
      },
    },
    // This key will be merged with the default options and add this cache to our client.
    catalog: {
      memoryCache,
    },
  },
}

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients> in every handler and resolver
  type Context = ServiceContext<Clients, State>

  interface State extends RecorderState {
    skuId: string
    customHeaders: CustomHeaders
  }
}

// Export a service that defines route handlers and client options.
export default new Service({
  clients,
  routes: {
    updatePrice: method({
      PUT: [auth, getSkuId, updatePrice],
    }),
    updateInventory: method({
      PUT: [auth, getSkuId, updateInventory],
    }),
    keepAlive: method({
      GET: [keepAlive],
      POST: [keepAlive]
    }),
  },
})
