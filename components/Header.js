import React, { memo, useRef } from 'react'
import styled from 'styled-components'

import { DownIcon, PaletteIcon, TextDocumentIcon, FontSizeIcon } from './svgs'

const colors = ['#3D8FE8', '#EF9636', '#4FC4A5', '#000', '#ccc']
const fonts = ['Poppins', 'sans-serif', 'Nunito', 'Merriweather', 'Inconsolata']
const fontSizes = [1, 2, 3, 4, 5]

function Header({ handlePrint }) {
  const colorRef = useRef()

  const handleColor = e => {
    const currentColor = e.target.style.backgroundColor
    colorRef.current.style.backgroundColor = currentColor

    var r = document.querySelector(':root')
    r.style.setProperty('--color-primary', currentColor)
    r.style.setProperty('--text-2', currentColor)

    // ! ERROR PDF LIBRARY : Since the dom isn't reloaded in the change made with the css variable, the pdf doesn't show
    // ? solution
    var titles = document.querySelectorAll('.title--2')
    titles.forEach(t => {
      t.style.color = currentColor
    })
    var svgs = document.querySelectorAll('svg')
    svgs.forEach(svg => {
      svg.style.color = currentColor
    })
    // ! END
  }

  const handleFont = font => {
    // var r = document.querySelector(':root')
    // r.style.setProperty('--font', font)
    // setFontFamily(font)
    // ! ERROR PDF
    const allp = document.querySelectorAll('p')
    allp.forEach(p => {
      p.style.fontFamily = font
    })
    // ! END
  }
  const handleFontSize = font => {
    // ! ERROR PDF
    const allp = document.querySelectorAll('p')
    const allptitle2 = document.querySelectorAll('p.title--2')
    const pheader = document.querySelector('.main__header-name')
    const smalls = [1.25, 1.4, 1.8, 2, 2.25]
    const mids = [1.55, 1.8, 2, 2.25, 2.5]
    const bigs = [5, 6, 7, 8, 9]
    allp.forEach(p => {
      p.style.fontSize = `${smalls[font]}rem`
    })

    allptitle2.forEach(p => {
      p.style.fontSize = `${mids[font]}rem`
    })

    pheader.style.fontSize = `${bigs[font]}rem`
    // ! END
  }
  return (
    <Wrapper>
      <button className='btn' onClick={handlePrint}>
        <DownIcon />
      </button>

      <div className='color-palette'>
        <input type='checkbox' name='color' id='color' />
        <label ref={colorRef} htmlFor='color' className='color btn'>
          <PaletteIcon />
        </label>
        <ul className='sub-menu'>
          {colors.map((color, idx) => (
            <li
              key={idx}
              className='btn'
              style={{ backgroundColor: `${color}` }}
              onClick={handleColor}
            ></li>
          ))}
        </ul>
      </div>

      <div className='font-family-palette'>
        <input type='checkbox' name='font' id='font' />
        <label htmlFor='font' className='color btn'>
          <TextDocumentIcon />
        </label>
        <ul className='sub-menu'>
          {fonts.map((font, idx) => (
            <li
              key={idx}
              style={{ fontFamily: `${font}` }}
              onClick={() => handleFont(font)}
            >
              {font}
            </li>
          ))}
        </ul>
      </div>

      <div className='font-size-palette'>
        <input type='checkbox' name='fontSize' id='fontSize' />
        <label htmlFor='fontSize' className='color btn'>
          <FontSizeIcon />
        </label>
        <ul className='sub-menu'>
          {fontSizes.map((font, idx) => (
            <li key={idx} onClick={() => handleFontSize(idx)}>
              {font}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: var(--color-dark-soft-2);
  box-shadow: var(--shadow);
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem;
  border-radius: 1rem;
  position: fixed;
  top: 50%;
  left: 6rem;
  transform: translate(-50%, -50%);
  transition: transform 0.4s ease-in-out;

  @media (max-width: 50rem) {
    top: 5rem;
    flex-direction: row;
    left: 50%;
    height: auto;
  }

  .btn {
    display: block;
    background-color: var(--color-green-1);
    color: var(--color-dark-soft-1);
    box-shadow: var(--shadow);
    border-radius: 50%;
    box-shadow: var(--shadow-2);
    width: 5rem;
    height: 5rem;
    border: 0;
    font-size: 2.4rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .color-palette,
  .font-size-palette,
  .font-family-palette {
    position: relative;
    font-size: 1.3rem;
    color: var(--color-secondary);

    [type='checkbox'] {
      display: none;
      :checked ~ .sub-menu {
        opacity: 1;
        visibility: initial;
        transform: translate(-50%, -50%);
      }
    }
    .sub-menu {
      background-color: var(--color-dark-soft-2);
      position: absolute;
      width: 37rem;
      left: calc(100% + 22rem);
      top: 50%;

      padding: 1rem;
      border-radius: 1rem;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity, transform 0.3s ease;
      opacity: 0;
      visibility: hidden;
      transform: translate(-150%, -50%);

      @media (max-width: 50rem) {
        left: 50%;
        top: calc(100% + 17rem);
        flex-direction: column;
        width: auto;
      }
    }

    .sub-menu li {
      border-radius: 50%;
      margin: 0 1rem;
      transform-origin: top left;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 50rem) {
        margin: 1rem 0;
      }
      :hover {
        opacity: 0.9;
      }
    }
  }
  input[type='color'] {
    -webkit-appearance: none;
    border: none;
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--color-green-1);
  }
  input[type='color']::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  input[type='color']::-webkit-color-swatch {
    border: none;
  }
`

export default memo(Header)
