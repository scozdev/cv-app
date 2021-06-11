import React, { memo } from "react"

const Text = ({ title, ...props }) => {
  return (
    <p
      className={title && 'title--2'}
      {...props}
      contentEditable
      suppressContentEditableWarning
      spellCheck='false'
    ></p>
  )
}

export default memo(Text)
