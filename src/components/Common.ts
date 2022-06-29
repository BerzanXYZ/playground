import tailt from 'tailt'

export const Page = tailt.div`
    flex flex-col
    min-h-screen
    bg-white text-zinc-900
`

export const Header = tailt.header`
    sticky top-0 z-10
    flex items-center justify-between
    h-14
    px-4 md:px-8
    bg-zinc-900 text-white
`

export const Main = tailt.main`
    flex flex-col items-center
    flex-1
`

export const Footer = tailt.footer`
    flex items-center justify-between
    h-40
    bg-zinc-900 text-white
`