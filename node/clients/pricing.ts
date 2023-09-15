import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

import type { RequestPayloadPrice } from '../types'

export default class Pricing extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(`http://api.vtex.com/${context.account}/pricing`, context, {
      ...(options ?? {}),
      headers: {
        ...(options?.headers ?? {}),
        'X-Vtex-Use-Https': 'true',
      },
    })
  }

  public async createOrUpdateBasePriceOrFixedPrices(
    skuId: string,
    payload: RequestPayloadPrice,
    headers: CustomHeaders
  ): Promise<any> {
    return this.http.put(`prices/${skuId}`, payload, {
      headers,
      metric: 'create-or-update-base-price-or-fixed-prices',
    })
  }
}
