import { IOClients } from '@vtex/api'

import VtexId from './vtexId'
import Catalog from './catalog'
import Pricing from './pricing'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {

  public get vtexId() {
    return this.getOrSet('vtexId', VtexId)
  }

  public get catalog() {
    return this.getOrSet('catalog', Catalog)
  }

  public get pricing() {
    return this.getOrSet('pricing', Pricing)
  }
}
