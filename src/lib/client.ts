import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'nishitin0813',
  apiKey: process.env.APIKEY as string,
})
