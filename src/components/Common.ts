import tailt from 'tailt'

const Page = tailt.div`
    flex flex-col
    min-h-screen
    bg-white text-zinc-900
`

const Header = tailt.header`
    sticky top-0 z-10
    flex items-center justify-between
    h-16
    bg-white text-zinc-900
`

const Footer = tailt.footer`
    flex items-center justify-between
    h-40
    bg-zinc-200 text-zinc-900
`