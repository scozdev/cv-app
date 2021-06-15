import * as React from 'react'

function SvgTextDocument(props) {
  return (
    <svg
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 20 20'
      {...props}
    >
      <path d='M16 1H4a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zm-1 16H5V3h10v14zM13 5H7v2h6V5zm0 8H7v2h6v-2zm0-4H7v2h6V9z' />
    </svg>
  )
}

export default SvgTextDocument
