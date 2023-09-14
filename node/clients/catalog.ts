import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

export default class Catalog extends JanusClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(context, {
      ...(options ?? {}),
      headers: {
        ...(options?.headers ?? {}),
        'X-Vtex-Use-Https': 'true',
      },
    })
  }

  public async getSkuIdByReferenceId(
    refId: string,
    headers: CustomHeaders
  ): Promise<any> {
    return this.http.get(
      `api/catalog_system/pvt/sku/stockkeepingunitidbyrefid/${refId}`,
      {
        headers,
        metric: 'get-sku-id-by-reference-id',
      }
    )
  }
}
