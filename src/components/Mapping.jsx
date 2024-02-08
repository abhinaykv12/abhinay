import React, { useState } from 'react'

const Mapping = () => {
    <var[names,setnames] =useState(["rauf","ansif","abhi"])
  return (
    <div style={{paddingTop:"80px"}}>
    <ol>
        {names,map(value,index)=>{
        return(
            <li key={index}<{value}</li>
        }
    </ol>
    </div>
  )
}

export default Mapping