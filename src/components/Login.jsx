import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
<div>
<input type="text" placeholder='username'/>
<br /> 
<input type="password" placeholder='password'/>
<br />
<button>login</button>
<Typography variant='h4'>hello</Typography>
<TextField variant='outline' label='username'></TextField> 
    </div>
  )
}

export default Login