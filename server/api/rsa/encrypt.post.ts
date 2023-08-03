import { constants, publicEncrypt } from 'crypto'
import { readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const { message, publicKey } = await readBody(event)

  // const { rsaPublic } = useRuntimeConfig()

  return await encryptMesssage(message, publicKey)
})

const encryptMesssage = (message: string, publicKey: string) => {
  const keyBuffer = Buffer.from(publicKey, 'base64')
  const encriptedData = publicEncrypt(
    {
      key: keyBuffer,
      padding: constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256',
    },
    Buffer.from(message)
  )
  return encriptedData.toString('base64')
}
