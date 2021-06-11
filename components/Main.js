import React, { memo, useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

import ProfileImage from './ProfileImage'
import { MailIcon, PhoneIcon } from './svgs'
import Text from './Text'

function Main({ ...props }) {
  const [skillCounter, setSkillCounter] = useState(1)
  const [experienceCounter, setExperienceCounter] = useState(1)

  useEffect(() => {
    const refNameInput = document.querySelector('.main__header-name')
    refNameInput.focus()
  }, [])

  const handleAddClick = e => {
    setSkillCounter(skillCounter + 1)
  }
  const handleAddExperience = e => {
    setExperienceCounter(experienceCounter + 1)
  }
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
          <div style={{ position: 'relative' }} className='experience-con'>
            <Text title placeholder='Work Experience' />
            <button className='add-btn' onClick={handleAddExperience}>
              +
            </button>
            {new Array(experienceCounter).fill(1).map((_, idx) => (
              <div key={idx}>
                <Text placeholder='Position' className='title--3' />
                <Text placeholder='In this text field your can describe your duties. Try to focus on accomplishments that serve as concrete examples to the type of problems you can solve to your future employer.' />
              </div>
            ))}
          </div>

          <div>
            <Text title placeholder='EDUCATION' />
            <Text placeholder='Degree' className='title--3' />
            <Text placeholder='School' />
          </div>

          <div className='skill-con'>
            <Text title placeholder='SKILLS' />
            <button className='add-btn' onClick={handleAddClick}>
              +
            </button>
            <div>
              {new Array(skillCounter).fill(1).map((skill, idx) => (
                <div key={idx}>
                  <input type='range' id={idx} />
                  <Text placeholder='Enter Skill' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  padding: 10rem;
  width: 119.0551181102rem;
  background-color: var(--color-secondary);

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
    margin: 6rem 0;

    .profile {
      width: 25rem;
      margin-right: 6rem;
      flex-shrink: 0;

      &__box:not(:first-child) {
        margin-top: 4rem;
      }

      &__logo-box {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .work {
      flex: 1;
      > div:not(:first-child) {
        margin-top: 6rem;
      }
    }

    .skill-con {
      position: relative;

      > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      > div > div {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        p {
          width: auto;
          margin-left: 1rem;
          font-size: 1.4rem;
          line-height: 1.6;
          font-weight: 400;
          padding: 0.5rem;
          white-space: nowrap;
          margin-top: 0.45rem;
          word-break: break-all;
        }
      }
    }
    .skill-con:hover .add-btn {
      opacity: 1;
    }

    .experience-con:hover .add-btn {
      opacity: 1;
    }
    .experience-con .add-btn {
      left: 20rem;
    }
    .add-btn {
      border: 0;
      outline: 0;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      color: var(--color-secondary);
      font-size: 1.8rem;
      background-color: #2ab96b;
      position: absolute;
      left: 10rem;
      top: 0.9rem;
      opacity: 0;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }

    .title--3 {
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 1.25;
    }
  }
`

export default memo(Main)
