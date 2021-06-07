import * as React from 'react'

function SvgCamera(props) {
  return (
    <svg
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
      {...props}
    >
      <path d='M9.5 19a6.5 6.5 0 1013 0 6.5 6.5 0 00-13 0zM30 8h-7c-.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4H2c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875 8.875 3.973 8.875 8.875-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z' />
    </svg>
  )
}

export default SvgCamera
