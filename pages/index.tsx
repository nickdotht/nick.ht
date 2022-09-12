import { Flex, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Menu } from '@components/Menu'
import { HomeIntro } from '@components/HomeIntro'

const Home: NextPage = () => {
  return (
    <Flex
      direction="column"
    >
      <Head>
        <title>Nick Rameau's Den | Home</title>
        <meta name="description" content="Nick Rameau's Den" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <HomeIntro />
    </Flex>
  )
}

export default Home
