import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {}
    var [count,setCount]=useState(0)
    const incBtn =()=>{
        console.log("Inc clicked")
        setCount(count+1)
    }
    const decBtn =()=>{
        console.log("")
  return (
    <div style={{paddingTop:"80px"}}>
        <Typography>counter value:</Typography>
        <Button variant="contained" color="success" onClick={incBtn}>+</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="contained" color="error" onClick={decBtn}>-</Button>

    </div>
  )
}

export default Counter;