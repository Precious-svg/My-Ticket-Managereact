import React from 'react'

const Input = ({type="text", value, name, onChange, placeholder="", className="", ...props}) => {
  return (
    <input 
    type={type}
     value={value} 
     name={name}
     onChange={onChange} 
     placeholder={placeholder}
     className={`py-2 px-3 border-3 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md ${className}`}
     {...props}
    />
  )
}

export default Input