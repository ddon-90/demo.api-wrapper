import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'
import { RequestPayload } from '../types'

export default class Logistics extends JanusClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(
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

  public async updateInventoryBySkuAndWarehouse(skuId: string, warehouseId: string, payload: RequestPayload): Promise<any> {
    return this.http.put(`api/logistics/pvt/inventory/skus/${skuId}/warehouses/${warehouseId}`, payload, {
      metric: 'update-inventory-by-sku-and-warehouse',
    })
  }
}