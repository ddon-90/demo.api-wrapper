import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'
import { RequestPayloadLogistics } from '../types'

export default class Logistics extends JanusClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(
      context,
      {
        ...(options ?? {}),
        headers: {
          ...(options?.headers ?? {}),
          'X-Vtex-Use-Https': 'true',
        },
      }
    )
  }

  public async updateInventoryBySkuAndWarehouse(
    skuId: string,
    warehouseId: string,
    payload: RequestPayloadLogistics,
    headers: CustomHeaders
  ): Promise<any> {
    return this.http.put(`api/logistics/pvt/inventory/skus/${skuId}/warehouses/${warehouseId}`, payload, {
      headers,
      metric: 'update-inventory-by-sku-and-warehouse',
    })
  }
}