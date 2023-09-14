export async function auth(ctx: Context, next: () => Promise<void>) {
  const { header } = ctx

  ctx.state.customHeaders = {
    'X-VTEX-API-AppKey': header['x-vtex-api-appkey'] ?? '',
    'X-VTEX-API-AppToken': header['x-vtex-api-apptoken'] ?? '',
  }

  await next()
}
