import { IOClients } from '@vtex/api'

import Catalog from './catalog'
import Pricing from './pricing'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get catalog() {
    return this.getOrSet('catalog', Catalog)
  }

  public get pricing() {
    return this.getOrSet('pricing', Pricing)
  }
}
