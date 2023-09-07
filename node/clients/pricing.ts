import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'
import { RequestPayload } from '../types'

export default class Pricing extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(
      `http://api.vtex.com/${context.account}/pricing`,
      context,
      {
        ...(options ?? {}),
        headers: {
          ...(options?.headers ?? {}),
          'VtexIdClientAutCookie': context.adminUserAuthToken || '',
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'X-Vtex-Use-Https': 'true',
        },
      }
    )
  }

  public async createOrUpdateBasePriceOrFixedPrices(skuId: string, payload: RequestPayload): Promise<any> {
    return this.http.put(`prices/${skuId}`, payload, {
      metric: 'create-or-update-base-price-or-fixed-prices',
    })
  }
}
