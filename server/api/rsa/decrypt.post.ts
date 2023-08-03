import { constants, privateDecrypt } from 'crypto'
import { readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const { message, privateKey } = await readBody(event)
  // const { rsaPrivate } = useRuntimeConfig()
  return await decryptMessage(message, privateKey)
})
const decryptMessage = async (message: string, privateKey: string) => {
  const decryptedData = await privateDecrypt(
    {
      key: Buffer.from(privateKey, 'base64'),
      padding: constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256',
    },
    Buffer.from(message, 'base64')
  )

  return decryptedData.toString()
}
