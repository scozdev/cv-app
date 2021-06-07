import React from 'react'
import styled from 'styled-components'

import { DownIcon } from '../components/svgs'

function Header({ handlePrint }) {
  return (
    <Wrapper>
      <input type='color'></input>
      <button className='print-btn' onClick={handlePrint}>
        <DownIcon />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  height: 80%;
  padding: 2rem;
  box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 5rem;
  left: 1rem;
  border-radius: 1rem;
  transition: transform 0.4s ease-in-out;

  @media (max-width: 50rem) {
    top: 5rem;
    left: 50%;
    width: 60%;
    transform: translate(-50%, -50%);
    height: auto;
  }

  [type='color'] {
    display: none;
  }

  > * {
    border-radius: 1rem;
    width: 5rem;
    height: 5rem;
  }

  .print-btn {
    border: 0;
    background-color: #2ab96b;
    border-radius: 50%;
    font-size: 2.4rem;
    color: rgb(37, 37, 37);
    box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
    cursor: pointer;
  }
`

export default Header
