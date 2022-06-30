import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CryptoContextProvider } from '../contexts/CryptoProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CryptoContextProvider >
      <Component {...pageProps} />
    </CryptoContextProvider>
  )
}

export default MyApp
