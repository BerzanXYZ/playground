import tailt from 'tailt'

// "DataBox" component that display some data
export function DataBox() {
    return (
        <Div>
            Hello
        </Div>
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