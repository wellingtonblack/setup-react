import React from 'react'
import Head from 'next/head'

import LogoTeste from '../assets/Logo-footer-desktop.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>HomePage</title>
      </Head>
      <LogoTeste />
      <h1>Hello world</h1>
      <p>A ReactJS + Next.JS structure made by Black</p>
    </Container>
  )
}

export default Home
