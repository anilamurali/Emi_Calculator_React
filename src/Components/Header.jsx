import React, { useState } from 'react'
import '../App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';

function Header() {
    const theme = createTheme({
        palette: {
          primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#42a5f5',
            contrastText: '#fff',
          },
          secondary: {
            light: '#00838f',
            main: '#01579b',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },
      });
     

  return (
    <div className='header'><AppBar position="static" style={{background:theme.palette.secondary.main, height:'60px'}}> 
    <Toolbar  variant="dense">
      <img height={60}  style={{borderRadius:'50%'}} src="https://www.johnhancock.com/content/dam/onejohnhancock/articles/3-budgeting-rules-to-help-you-save-money/BudgetingRules_50_15_5_30.gif" alt="" />
      <Typography  style={{marginLeft:'20px',marginRight:'20px'}} variant="h6" color="inherit" component="div">
       <h1>Bank<span style={{color:'#ff6f00'}}>Bazar</span></h1>
      </Typography>
      <Typography  style={{marginLeft:'20px',marginRight:'20px'}}  variant="h6" color="inherit" component="div">
        <h4>Cards</h4>
      </Typography>
      <Typography  style={{marginLeft:'20px',marginRight:'20px'}}  variant="h6" color="inherit" component="div">
       <h4>Loans</h4>
      </Typography>
      <Typography  style={{marginLeft:'20px',marginRight:'20px'}}  variant="h6" color="inherit" component="div">
       <h4>Investment</h4>
      </Typography>
    </Toolbar>
  </AppBar></div>
  )
}

export default Header