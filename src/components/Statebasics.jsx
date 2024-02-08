import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    // var fnmae = 'abhi'
    var {fnmae,setfnmae}=useState("rauf")
    const changeName = ()=>{
        console.log("Clicked")
        setfnmae("abhinay")
    }
  return (
    <div style={{paddingTop:"80px"}}>
        <Typography variant='h4'>welcome {fnmae}</Typography>
        <Button variant="contained"onClick={changeName}>change</Button>
        <h1>hello</h1>
    </div>
  )
}

export default Statebasics