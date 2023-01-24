import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from "../store"
import { Provider } from 'react-redux'
// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../config/theme"

// Icon
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}
