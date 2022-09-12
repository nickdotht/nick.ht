import { Flex, Heading, Icon, Link, Text } from "@chakra-ui/react"
import Image from "next/image"
import { FC } from "react"
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export const HomeIntro: FC = () => {
  return (
    <Flex
      flex="1"
      mt="243px"
    >
      <Flex
        m="auto"
      >
        {/* Text block */}
        <Flex
          direction="column"
          mr="218px"
        >
          <Heading color="primary" fontSize="52px" fontWeight="700" lineHeight="64px">
            Joe-Bernick (Nick)<br />Rameau
          </Heading>

          <Text color="#fff" fontWeight="400" fontSize="24px" lineHeight="36px" mt="16px">
            Based in Haiti, I am a pragmatic, self-taught, and passionate<br />
            software engineer. I currently specialize in modern web and mobile<br />
            technologies, as well as project management.
          </Text>

          <Flex mt="40px">
            <Link href="https://www.linkedin.com/in/nickdotht/" mr="26px" target="_blank">
              <Icon as={FiLinkedin} color="#fff" _hover={{ color: '#0C63BC' }} boxSize="20px" />
            </Link>
            <Link href="https://github.com/nickdotht" mr="26px" target="_blank">
              <Icon as={FiGithub} color="#fff" _hover={{ color: '#000' }} boxSize="20px" />
            </Link>
            <Link href="https://www.twitter.com/nickdotht" target="_blank">
              <Icon as={FiTwitter} color="#fff" _hover={{ color: '#1C9CEA' }} boxSize="20px" />
            </Link>
          </Flex>
        </Flex>

        {/* Image block */}
        <Image src="/images/hero-image.png" width="314px" height="314px" alt="Nick Rameau" />
      </Flex>
    </Flex>
  )
}