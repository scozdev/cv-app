import { useTranslation } from 'next-i18next'
import React, { useContext } from 'react'

export const AppContext = React.createContext()

import { colors, fontSizes, fonts } from './constants'

export const AppProvider = ({ children }) => {
  const { i18n } = useTranslation('common')

  const changeLanguage = () => {
    console.log(i18n.language === 'en')
    if (i18n.language === 'en') {
      i18n.changeLanguage('tr')
    } else {
      i18n.changeLanguage('en')
    }
  }

  const handleColor = e => {
    if (e.target.classList.contains('btn')) {
      const newColor = colors[e.target.dataset.label]

      var r = document.querySelector(':root')
      r.style.setProperty('--color-primary', newColor)

      var titles2 = document.querySelectorAll('.title--2')
      var titles3 = document.querySelectorAll('.title--3')
      ;[...titles2, ...titles3].forEach(t => {
        t.style.color = newColor
      })
      var svgs = document.querySelectorAll('svg')
      svgs.forEach(svg => {
        svg.style.color = newColor
      })
    }
  }

  const handleFont = (e, idx) => {
    const newFont = fonts[idx]
    var r = document.querySelector(':root')
    r.style.setProperty('--font', newFont)
    const allp = document.querySelectorAll('p')
    console.log(allp)
    allp.forEach(p => {
      p.style.fontFamily = newFont
    })
  }

  const handleFontSize = (e, idx) => {
    const allp = document.querySelectorAll('p')
    const allptitle2 = document.querySelectorAll('p.title--2')
    const allptitle3 = document.querySelectorAll('p.title--3')
    const pheader = document.querySelector('.main__header-name')
    const smalls = [1.25, 1.4, 1.8, 2, 2.25]
    const mids = [1.55, 1.8, 2, 2.25, 2.5]
    const bigs = [5, 6, 7, 8, 9]
    allp.forEach(p => {
      p.style.fontSize = `${smalls[idx]}rem`
    })
    ;[...allptitle2, ...allptitle3].forEach(p => {
      p.style.fontSize = `${mids[idx]}rem`
    })

    pheader.style.fontSize = `${bigs[idx]}rem`
  }

  return (
    <AppContext.Provider
      value={{
        language: i18n.language,
        changeLanguage,
        handleColor,
        handleFont,
        handleFontSize,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
