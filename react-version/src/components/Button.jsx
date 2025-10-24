import React from 'react'

const Button = ({children, color="bg-blue-500", textColor="text-white", size="w-44 h-11 text-base",  className=""}) => {
  return (
    <button className={`${color} ${textColor} ${size} shadow-md rounded-md font-medium ${className}`}>
        {children}
    </button>
  )
}

export default Button