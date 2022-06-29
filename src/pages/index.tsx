import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Footer, Header, Main, Page } from '../components/Common'
import { BrandH, H1, P } from '../components/Text'
import { Section1, Section2 } from '../components/Section'
import { Theme } from '../components/Theme/Index'
import { DataBox } from '../components/DataBox'
import { FooterBox, FooterItem } from '../components/FooterBox'

const Home: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Playground</title>
        <meta name="description" content="Playground is the place where I learn new things." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <BrandH>
          <Link href="/"> Playground </Link>
        </BrandH>
        <Theme/>
      </Header>

      <Main>
        <Section1>
          <H1>Playground Place</H1>
          <P>A place to test and improve my skills</P>
        </Section1>
        <Section2>
          <DataBox/>
        </Section2>
      </Main>
      <Footer>
        <FooterBox title='Social Media'>
          <FooterItem href='/'>Twitter</FooterItem>
          <FooterItem href='/'>GitHub</FooterItem>
          <FooterItem href='/'>Discord</FooterItem>
        </FooterBox>
        <FooterBox title='Projects'>
          <FooterItem href='/'>Tailt</FooterItem>
          <FooterItem href='/'>useMode</FooterItem>
          <FooterItem href='/'>Creta</FooterItem>
        </FooterBox>
      </Footer>
    </Page>
  )
}

export default Home
