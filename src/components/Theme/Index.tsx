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
    flex flex-col items-end
`

// "Button" for "Theme" component
const Button = tailt.button`
    h-9 px-4
    rounded-lg
    bg-zinc-600 hover:bg-zinc-500 hover:scale-95
    duration-200
`

// "Menu" for "Theme" component
const Menu = tailt.div`
    hidden absolute top-16
    flex flex-col
    w-36 p-3 gap-y-1 rounded-lg
    bg-zinc-900
`

// "Item" for "Menu" component
const Item = tailt.button`
    font-medium text-base
    h-8 rounded-lg
    text-zinc-100 hover:bg-zinc-700
    duration-200
`