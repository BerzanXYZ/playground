import tailt from 'tailt'
import { useCryptoContext } from '../../contexts/CryptoProvider'

// "DataBox" component that display some data
export function DataBox() {
    const { crypto, price, setCrypto } = useCryptoContext()

    return (
        <Div>
            <Label>{crypto}: {price}</Label>
            <ButtonBox>
                <Button onClick={() => setCrypto("BTC")}>BTC</Button>
                <Button onClick={() => setCrypto("ETH")}>ETH</Button>
                <Button onClick={() => setCrypto("SOL")}>SOL</Button>
            </ButtonBox>
        </Div>
    )
}

// "Div" for "DataBox" component
const Div = tailt.div`
    flex flex-col text-center justify-center
    p-4 gap-y-4 rounded-xl
    bg-zinc-900 text-white
    dark:bg-white dark:text-zinc-900
    duration-200 select-none
`

// "Label" for "DataBox" component
const Label = tailt.h2`
    font-semibold text-xl
`

// "ButtonBox" for "Button" component
const ButtonBox = tailt.div`
    flex justify-between gap-x-3
`

// "Button" for "DataBox" component
const Button = tailt.button`
    h-10 px-4 rounded-lg
    hover:scale-95 active:scale-100
    bg-zinc-600 text-white
    dark:bg-zinc-300 dark:text-zinc-900 
    hover:bg-zinc-500 active:bg-zinc-400
    dark:hover:bg-zinc-400 dark:active:bg-zinc-500
    duration-200
    font-semibold
`