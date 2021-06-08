import React, { useEffect } from 'react'
import styled from 'styled-components'

import ProfileImage from './ProfileImage'
import { MailIcon, PhoneIcon } from '../components/svgs'
import Text from './Text'

function Main({ ...props }) {
  useEffect(() => {
    const inputRef = document.querySelector('.main__header-name')
    inputRef.focus()
  }, [])

  return (
    <Wrapper {...props}>
      <div className='main__header'>
        <ProfileImage className='main__header-photo' />
        <div className='main__header-box'>
          <Text className='main__header-name' placeholder='Your name' />
          <Text
            className='main__header-sub-name title--2'
            placeholder='Your Profession or sepeciality'
          />
        </div>
      </div>
      <div className='main__content'>
        <div className='profile'>
          <div className='profile__box'>
            <Text title placeholder='Profile' />
            <Text placeholder='Write here a paragraph about yourself' />
          </div>
          <div className='profile__box'>
            <Text title placeholder='PERSONAL DETAILS' />
            <Text title placeholder='Adress' />
            <Text placeholder='Enter your address' />
          </div>
          <div className='profile__box'>
            <Text title>CONTACT</Text>
            <div className='profile__logo-box'>
              <MailIcon />
              <Text placeholder='Enter you email' />
            </div>
            <div className='profile__logo-box'>
              <PhoneIcon />
              <Text placeholder='Enter your phone number' />
            </div>
          </div>
        </div>
        <div className='work'>
          <div className='profile__box'>
            <Text title placeholder='Work Experience' />
            <Text placeholder='Position' />
            <Text placeholder='In this text field your can describe your duties. Try to focus on accomplishments that serve as concrete examples to the type of problems you can solve to your future employer.' />

            <Text title placeholder='EDUCATION' />
            <Text placeholder='Degree' />
            <Text placeholder='School' />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin-left: auto;
  margin-right: auto;

  padding: 10rem;
  /* min-height: 168.3779527559rem; */
  height: 100rem;
  width: 119.0551181102rem;
  background-color: #fff;

  .main__header {
    display: flex;
    align-items: center;
    font-weight: 700;

    &-photo {
      margin-right: 6rem;
      flex: 0 0 auto;
    }

    &-box {
      flex: 1;
    }

    &-name {
      font-size: 6rem;
      line-height: 1;
      caret-color: red;
      padding: 0.5rem;
      width: 100%;
      display: inline-block;
    }
  }

  .main__content {
    display: flex;
    margin: 2rem 0;

    .profile {
      width: 25rem;
      margin-right: 6rem;
      flex-shrink: 0;

      &__box {
        margin-top: 2.4rem;
      }

      &__logo-box {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .work {
      flex: 1;
    }
  }
`

export default Main
