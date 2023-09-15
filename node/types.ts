export interface FixedPrice {
  tradePolicyId: string
  value: number
  minQuantity: number
  dateRange: {
    from: string
    to: string
  }
  listPrice?: number
}

export interface RequestPayloadPrice {
  markup?: number
  listPrice?: number
  costPrice?: number
  basePrice?: number
  fixedPrices?: FixedPrice[]
}

export interface RequestPayloadLogistics {
  unlimitedQuantity: boolean
  dateUtcOnBalanceSystem: string,
  quantity: number,
}