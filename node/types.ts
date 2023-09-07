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

export interface RequestPayload {
  markup?: number
  listPrice?: number
  costPrice?: number
  basePrice?: number
  fixedPrices?: FixedPrice[]
}
