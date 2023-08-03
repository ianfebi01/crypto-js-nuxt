import { readBody } from 'h3'
import CryptoJS from 'crypto-js'

export default defineEventHandler(async (event) => {
  const { message } = await readBody(event)

  const { aesSecret } = useRuntimeConfig()

  const encryptedData = await CryptoJS.AES.encrypt(
    message,
    aesSecret
  ).toString()

  return encryptedData
})
