import { createHmac } from 'crypto'
import { readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const { message } = await readBody(event)

  const { hmacSecret } = useRuntimeConfig()
  const hmac = createHmac('sha256', hmacSecret)
  hmac.update(message)

  return hmac.digest('base64')
})
