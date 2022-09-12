import "@fontsource/open-sans" // sans-serif
import "@fontsource/pt-serif" // serif
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "PT Serif, serif",
  },

  colors: {
    primary: '#F9873C'
  },

  styles: {
    global: {
      body: {
        bg: "#12181B",
      },

      '*:focus': {
        shadow: 'none !important',
      },
    }
  },
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
