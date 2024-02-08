import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Appbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>
                    First app
                </Typography>
                <Button variant='contained' color='error'>log in</Button>
                <Button variant='contained' color='success'>sign up</Button>
            </Toolbar>
        </AppBar>
            
    </div>
  )
}

export default Appbar