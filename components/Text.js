import React from 'react'
const Text = ({ title, ...props }) => {
  return (
    <p
      className={title && 'title--2'}
      {...props}
      contentEditable
      suppressContentEditableWarning
      spellCheck='false'
      // placeholder='Your name'
    ></p>
  )
}

export default Text
