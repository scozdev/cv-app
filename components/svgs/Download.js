import * as React from 'react'

function SvgDownload(props) {
  return (
    <svg
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 20 20'
      {...props}
    >
      <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
    </svg>
  )
}

export default SvgDownload
