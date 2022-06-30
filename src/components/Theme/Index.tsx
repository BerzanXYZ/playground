import { useState } from 'react'
import tailt from 'tailt'
import useMode from 'usemode'

// "Theme" component that handles theming stuff
export const Theme = () => {
    const [isOpen, setOpen] = useState<boolean>(false)
    const mode = useMode()

    return (
        <Dropdown>
            <Button onClick={() => setOpen(!isOpen)}>Theme</Button>
            {isOpen &&
            <>
            <Cover onClick={() => setOpen(!isOpen)}/>
            <Menu>
                <Item onClick={() => { mode.setSystem(); setOpen(!isOpen)} }>System</Item>
                <Item onClick={() => { mode.setDark(); setOpen(!isOpen)} }>Dark</Item>
                <Item onClick={() => { mode.setLight(); setOpen(!isOpen)} }>Light</Item>
            </Menu>
            </>}
        </Dropdown>
    )
}

// "Dropdown" for "Theme" component
const Dropdown = tailt.div`
    flex flex-col items-end select-none
`

// "Button" for "Theme" component
const Button = tailt.button`
    h-9 px-4
    rounded-lg
    hover:scale-95
    bg-zinc-600 hover:bg-zinc-500
    dark:bg-zinc-300 dark:hover:bg-zinc-400
    duration-200
`

// "Menu" for "Theme" component
const Menu = tailt.div`
    absolute top-16 z-30
    flex flex-col
    w-36 p-3 gap-y-1 rounded-lg
    bg-zinc-900
    dark:bg-white
`

// "Item" for "Menu" component
const Item = tailt.button`
    font-medium text-base
    h-8 rounded-lg
    hover:bg-zinc-700
    dark:hover:bg-zinc-200
    duration-200
`

// "Cover" for covering whole page except "Droddown"
const Cover = tailt.div`
    fixed top-0 left-0 z-20 w-full h-full
`
