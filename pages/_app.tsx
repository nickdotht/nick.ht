import "@fontsource/courier-prime/400.css"
import "@fontsource/bai-jamjuree/700.css"
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: '"Bai Jamjuree", sans-serif',
    body: '"Courier Prime", monospace',
  },

  colors: {
    primary: '#007acc'
  },

  styles: {
    global: {
      body: {
        bg: "#181818",
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
