import exp from 'constants'
import { createContext, ReactNode, useContext, useState } from 'react'


interface CryptoContextState {
    crypto: string,
    setCrypto(name: string): void,
}

const CryptoContext = createContext<CryptoContextState>({} as CryptoContextState)

export function useCryptoContext(): CryptoContextState {
    return useContext(CryptoContext)
}

export const CryptoContextProvider = ({ children }: {children: ReactNode}) => {
    const [crypto, setCrypto] = useState<string>("BTC")

    return (
        <CryptoContext.Provider value={{ crypto, setCrypto}}>{children}</CryptoContext.Provider>
    )
}
