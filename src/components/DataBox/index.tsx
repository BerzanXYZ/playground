import { useContext } from 'react'
import tailt from 'tailt'
import { NameContext } from '../../contexts/NameContext'

// "DataBox" component that display some data
export function DataBox() {
    const name = useContext(NameContext)
    return (
        <Div>{name}</Div>
    )
}

// "Div" for "DataBox" component
const Div = tailt.div`
    flex flex-col
    h-32 w-56
    p-3 rounded-xl
    bg-zinc-900 text-white
    dark:bg-white dark:text-zinc-900
`