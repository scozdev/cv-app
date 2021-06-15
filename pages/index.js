import Head from 'next/head'

import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import styled from 'styled-components'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Header from '../components/Header'
import Main from '../components/Main'
import { GithubIcon } from '../components/svgs'

function Home() {
  const { t } = useTranslation('common')

  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    documentTitle: 'my-new-cv',
    content: () => componentRef.current,
    // fonts: [
    //   {
    //     family: 'Inconsolata',
    //     source: './font/Inconsolata-VariableFont_wdth,wght.ttf',
    //   },
    // ],
  })
  return (
    <>
      <Head>
        <title>{t('h1')}</title>
        <meta name='description' content='Free Cv Builder App'></meta>
      </Head>
      <GithubIcon />
      <Header handlePrint={handlePrint} />
      <MainWrapper>
        <div ref={componentRef}>
          <Main />
        </div>
      </MainWrapper>
    </>
  )
}

const MainWrapper = styled.div`
  margin-top: 5rem;
  > div {
    box-shadow: var(--shadow);
    width: 119.0551181102rem;
    margin-left: auto;
    margin-right: auto;
  }
`

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
export default Home
