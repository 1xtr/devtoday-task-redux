import React, { FC } from 'react'
import type { AppProps } from 'next/app'
import { wrapper } from '../redux/store'
import '../styles/main.css'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default wrapper.withRedux(WrappedApp)
