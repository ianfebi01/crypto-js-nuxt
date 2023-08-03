import { generateKeyPairSync } from 'crypto'

export default defineEventHandler(async (event) => {
  const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
    },
  })

  const publicKey64 = Buffer.from(publicKey, 'utf-8').toString('base64')
  const privateKey64 = Buffer.from(privateKey, 'utf-8').toString('base64')

  return {
    publickey: publicKey64,
    privateKey: privateKey64,
  }
})
