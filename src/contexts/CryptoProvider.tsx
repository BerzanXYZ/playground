import exp from 'constants'
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'


interface CryptoContextState {
    crypto: string,
    price: string,
    setCrypto(crypto: string): void,
}

const CryptoContext = createContext<CryptoContextState>({} as CryptoContextState)

export function useCryptoContext(): CryptoContextState {
    return useContext(CryptoContext)
}

export const CryptoContextProvider = ({ children }: {children: ReactNode}) => {
    const [crypto, setCrypto] = useState<string>("BTC")
    const [price, setPrice] = useState<string>("0.00")
    const [cryptoName, setCryptoName] = useState<string>("BTC")

    useEffect(() => {
        async function fetchPrice() {
            const url = `https://api.binance.com/api/v3/avgPrice?symbol=${cryptoName}USDT`
            const data = await (await fetch(url)).json() as {price: string}
            const p = parseInt(data.price).toLocaleString()
            setPrice(`$${p}`)
        }
        fetchPrice().then(() => setCrypto(cryptoName))
    }, [cryptoName])
    

    return (
        <CryptoContext.Provider value={{ crypto, price, setCrypto: setCryptoName}}>{children}</CryptoContext.Provider>
    )
}
