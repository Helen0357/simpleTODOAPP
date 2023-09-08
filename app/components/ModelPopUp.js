'use client';
// import React from 'react'
// import { AiOutlinePlus } from 'react-icons/ai';

function ModelPopUp({check, children }) {
 
  return (
    <>


<div className={`modal ${check ? "modal-open" : ""}`}>
  <div className="modal-box">


  {children}
  
  </div>
</div>


    </>
  )
}

export default ModelPopUp