import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NameContext } from '../contexts/NameContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NameContext.Provider value='Zan'>
      <Component {...pageProps} />
    </NameContext.Provider>
  )
}

export default MyApp
