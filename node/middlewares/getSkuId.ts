export async function getSkuId(ctx: Context, next: () => Promise<void>) {
  const {
    vtex: {
      route: { params },
    },
    clients: { catalog },
  } = ctx

  const { refId } = params

  try {
    const skuId = await catalog.getSkuIdByReferenceId(
      String(refId),
      ctx.state.customHeaders
    )

    // Save skuId in the state
    ctx.state.skuId = skuId
  } catch (e) {
    ctx.status = 404
    ctx.body = {
      name: 'NOT_FOUND',
      message: `No SKU with RefId ${refId} has been found or you do not have the necessary permissions for the Catalog module.`,
    }
  }

  await next()
}
