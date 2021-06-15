import { appWithTranslation } from 'next-i18next'

import '../styles/globalStyle.css'
import { AppProvider } from '../context'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default appWithTranslation(MyApp)
