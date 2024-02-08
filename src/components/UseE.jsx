import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseE = () => {
  <var[,setName]=useState()
  const changeHame =()=>{
    setName("Hello")
  }
  const changeGname =()=>{
    setName("gallery")
  }
  const changeCname =()=>{
    setName("contact")
  useEffect(()=>(
    changeGname()
  ),{})
  return (
    <div style={{paddingTop: "80p"}}>
        <Button variant="contained" color="primary"onClick={changeHname}>HOME</Button>&nbsp;&nbsp;
        <Button variant="contained" color="secondary"onClick={changeHname}>gallery</Button>&nbsp;&nbsp;
        <Button variant="contained" color="error"onClick={changeHname}>contact</Button>

    </div>
  )
}

export default UseE