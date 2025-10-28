import React from 'react'

const CustomToast = ({message, type}) => {
    const colors = {
        success: "bg-emerald-500 text-white",
        error: "bg-red-500 text-white",
        info: "bg-blue-500 text-white",
        warning: "bg-yellow-400 text-black",
    };

  return (
    <div  className={`flex items-center gap-3 px-4 py-3 rounded-3xl shadow-lg bg-slate-50 h-[150px] w-[320px]`}>
        {type === "success" && <span className={`flex justify-center items-center h-8 w-8 rounded-[50%]  ${colors[type]}`}><p className="text-lg font-bold">✅</p></span>}
        {type === "error" && <span  className={`flex justify-center items-center  h-8 w-8 rounded-[50%] text-lg font-bold ${colors[type]}`}>❌</span>}
       {type === "info" && <span  className={` flex justify-center items-center h-8 w-8 rounded-[50%] text-lg font-bold ${colors[type]}`}><p className="text-lg text-center font-bold">ℹ️</p></span>}
       {type === "warning" && <span  className={`flex justify-center items-center  h-8 w-8 rounded-[50%] text-lg font-bold ${colors[type]}`}>⚠️</span>}
       <p className="font-medium text-sm">{message}</p>
    </div>
  )
}

export default CustomToast