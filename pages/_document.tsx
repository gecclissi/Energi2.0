// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { theme } from './_app'

export default function Document() {
  return (
    <Html lang='pt-br'>
      <Head><title>
          G-sense
        </title>
        <meta
          property="og:title"
          content={`G-sense`}
          key="title"
        /></Head>
        
      <body>
        {/* 👇 Here's the script */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}