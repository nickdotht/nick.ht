import "@fontsource/montserrat/variable.css"
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    body: "MontserratVariable, sans-serif",
    heading: "MontserratVariable, sans-serif",
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
