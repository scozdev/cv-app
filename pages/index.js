import Head from 'next/head'

import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import styled from 'styled-components'

import Header from '../components/Header'
import Main from '../components/Main'
import { GithubIcon } from '../components/svgs'

function Home() {
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })
  return (
    <>
    <Head>
      <title>Free Cv Builder</title>
      <meta name="description" content="Free Cv Builder App"></meta>
    </Head>
      <GithubIcon />
      <Header handlePrint={handlePrint} />
      <MainWrapper ref={componentRef}>
        <Main />
      </MainWrapper>
    </>
  )
}

const MainWrapper = styled.div`
  margin-top: 5rem;
`
export default Home
