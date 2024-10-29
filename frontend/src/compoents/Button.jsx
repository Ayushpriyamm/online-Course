import React from 'react'

function Button({text,orange}) {
  return (
    <div className={`p-3 rounded-md cursor-pointer hover:shadow-sm ${(orange)?"bg-orange-500 px-6 text-white": ""}`}>
      {text}
    </div>
  )
}

export default Button
