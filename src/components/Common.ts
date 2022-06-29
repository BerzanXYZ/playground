import tailt from 'tailt'

export const Page = tailt.div`
    flex flex-col
    min-h-screen
    bg-white text-zinc-900
    dark:bg-zinc-900 dark:text-white
`

export const Header = tailt.header`
    sticky top-0 z-10
    flex items-center justify-between
    h-14
    px-4 md:px-8
    bg-zinc-900 text-white
    dark:bg-white dark:text-zinc-900
`

export const Main = tailt.main`
    flex flex-col items-center
    flex-1 py-10 gap-y-6
`

export const Footer = tailt.footer`
    flex flex-col sm:flex-row sm:justify-center
    px-10 py-14 gap-y-8 gap-x-40
    bg-zinc-900 text-white
    dark:bg-white dark:text-zinc-900
`