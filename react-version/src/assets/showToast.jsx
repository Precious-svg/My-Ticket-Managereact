import React from 'react'
import toast from "react-hot-toast";
import CustomToast from '../components/CustomToast';



const showToast = (message, type = "info") => {
  return (
    <>
         {toast.custom((t) => <CustomToast message={message} type={type} />)};
    </>
  )
}

export default showToast