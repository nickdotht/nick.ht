import { Box, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react"
import Image from "next/image"
import { FC } from "react"
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export const HomeIntro: FC = () => {
  return (
    <Flex
      flex="1"
      mt={['40px', '40px', '40px', '243px', '243px', '243px']}
    >
      <Flex
        m="auto"
        direction={['column', 'column', 'column', 'row', 'row', 'row']}
        px={['16px', '16px', '16px', '40px', '40px', '40px']}
      >
        <Box display={['flex', 'flex', 'flex', 'none', 'none', 'none']} m="24px auto">
          <Image src="/images/hero-image.png" width="200px" height="200px" alt="Nick Rameau" />
        </Box>

        {/* Text block */}
        <Flex
          direction="column"
          mr={['0px', '0px', '0px', '218px', '218px', '218px']}
        >
          <Heading
            color="primary"
            fontSize="52px"
            fontWeight="700"
            lineHeight="64px"
            textAlign={['center', 'center', 'center', 'left', 'left', 'left']}
          >
            Joe-Bernick (Nick)<br />Rameau
          </Heading>

          <Text
            color="#fff"
            fontWeight="400"
            fontSize="24px"
            lineHeight="36px"
            mt="16px"
            textAlign={['center', 'center', 'center', 'left', 'left', 'left']}
          >
            Based in Haiti, I am a pragmatic, self-taught, and passionate<br />
            software engineer. I currently specialize in modern web and mobile<br />
            technologies, as well as project management.
          </Text>

          <Flex marginX={['auto', 'auto', 'auto', 0, 0, 0]} mt="40px" mb={['40px', '40px', '40px', 0, 0, 0]}>
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
        <Box display={['none', 'none', 'none', 'flex', 'flex', 'flex']}>
          <Image src="/images/hero-image.png" width="270px" height="270px" alt="Nick Rameau" />
        </Box>
      </Flex>
    </Flex>
  )
}