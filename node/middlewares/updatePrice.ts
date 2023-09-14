import { json } from 'co-body'

import type { RequestPayload } from '../types'

export async function updatePrice(ctx: Context, next: () => Promise<void>) {
  const {
    vtex: {
      route: { params },
    },
    clients: { pricing },
  } = ctx

  const { refId } = params
  const { skuId, customHeaders } = ctx.state

  const payload: RequestPayload = await json(ctx.req)

  try {
    // Update the SKU inventory
    await pricing.createOrUpdateBasePriceOrFixedPrices(
      skuId,
      payload,
      customHeaders
    )

    ctx.status = 200
    ctx.body = {
      name: 'SUCCESS',
      message: `Price for SKU with RefId ${refId} has been updated.`,
    }
  } catch (e) {
    const { status, statusText: errorName, data: errorMessage } = e.response

    ctx.status = status
    ctx.body = {
      name: errorName.split(' ').join('_').toUpperCase(),
      message: errorMessage,
    }
  }

  await next()
}
