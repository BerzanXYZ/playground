import { exitCode } from 'process'
import { MouseEvent, useRef } from 'react'
import tailt from 'tailt'
import useMode from 'usemode'

// "Theme" component that handles theming stuff
export const Theme = () => {
    const mode = useMode()
    const menuRef = useRef<HTMLDivElement>(null)
    function toggleMenu() { menuRef.current?.classList.toggle("hidden") }

    return (
        <Dropdown onClick={toggleMenu}>
            <Button >Theme</Button>
            <Menu ref={menuRef}>
                <Item onClick={mode.setSystem}>System</Item>
                <Item onClick={mode.setDark}>Dark</Item>
                <Item onClick={mode.setLight}>Light</Item>
            </Menu>
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
    hidden absolute top-16
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