import Head from 'next/head'
import Image from 'next/image'

import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import styled from 'styled-components'

import Header from '../components/Header'

function Home() {
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })
  return (
    <>
      <Header handlePrint={handlePrint} />
      <MainWrapper ref={componentRef}>
        
      </MainWrapper>
    </>
  )
}

const MainWrapper = styled.div`
  margin-top: 5rem;
`
export default Home