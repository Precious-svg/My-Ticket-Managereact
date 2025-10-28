import React from 'react'

const Card = ({children, bgColor="bg-blue-500", textColor="text-white", size="px-2 text-base", shadow="shadow-md", className=""}) => {
  return (
    <div className={`${bgColor} ${textColor} ${size}  ${shadow} ${className}`}>
        {children}
    </div>
  )
}

export default Card