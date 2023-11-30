import { CoinGeckoClient } from 'coingecko-api-v3'
export const coingeckoClient = new CoinGeckoClient({
    timeout: 20000,
    autoRetry: true
})