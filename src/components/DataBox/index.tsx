import tailt from 'tailt'
import { useCryptoContext } from '../../contexts/CryptoProvider'

// "DataBox" component that display some data
export function DataBox() {
    const { crypto, setCrypto } = useCryptoContext()
    return (
        <Div>{crypto}</Div>
    )
}

// "Div" for "DataBox" component
const Div = tailt.div`
    flex flex-col text-center justify-center
    h-20 w-60
    p-3 rounded-xl
    bg-zinc-900 text-white
    dark:bg-white dark:text-zinc-900
    duration-200 select-none
    font-semibold text-xl
`