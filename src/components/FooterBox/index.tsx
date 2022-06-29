import Link from 'next/link'
import { ReactNode } from 'react'
import tailt from 'tailt'

// "PropsType" is the interface for "FooterBox"
interface PropsType {title: string, children: ReactNode}

// "FooterBox" is a component for Footer
export const FooterBox = ({title, children}: PropsType) => {
    return (
        <FooterDiv>
            <FooterTitle>{title}</FooterTitle>
            <FooterUL>
                {children}
            </FooterUL>
        </FooterDiv>
    )
}

// "FooterDiv" is the main div for "FooterBox"
const FooterDiv = tailt.div`
    flex flex-col text-left
    gap-y-2
`

// "FooterTitle" is the title for "FooterBox"
const FooterTitle = tailt.h3`
    font-semibold text-xl
`

// "FooterUL" is the unordered list for "FooterBox"
const FooterUL = tailt.ul`
    flex flex-col
    gap-y-[0.125rem]
`

// "FooterItem" is the item for "FooterBox"
export const FooterItem = ({children, href}: {children: string, href: string}) => (
    <li className='font-medium text-lg opacity-80'>
        <Link href={href}>{children}</Link>
    </li>
)
