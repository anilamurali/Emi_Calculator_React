import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';


function Main() {
    const theme = createTheme({
        palette: {
          primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#42a5f5',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff5722',
            main: '#01579b',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },
      });
      const [loanamount,setLoanAmount]=useState('');
      const [tenure,setTenure]=useState('');
      const [intrest,setIntrest]=useState('');
      const [emiamount,setEmiAmount]=useState(0);
      const calculate=(e)=>{
        console.log(loanamount,tenure,intrest);
        const monthlyInterst=(intrest/12)/100;
        console.log(monthlyInterst);
        const emi=(loanamount*monthlyInterst*Math.pow(1+monthlyInterst,tenure))/(Math.pow(1+monthlyInterst,tenure)-1)
        console.log(emi.toFixed(2));
        setEmiAmount(emi.toFixed(2))
      
        const intr=(emi*tenure)-loanamount
        const total=intr+loanamount
        
        



      }
      const reset=()=>{
        setLoanAmount('')
        setIntrest('')
        setTenure('')
        setEmiAmount(0)
      }
  return (
    <div className='container'>
        <h1 style={{color:theme.palette.secondary.main}}>
            EMI Claculator

        </h1>
        <div className="input_box">
        <TextField value={loanamount} style={{width:'500px',margin:'20px'}} onChange={(e)=>setLoanAmount(e.target.value)} id="filled-basic" label="Loan Amount" variant="filled" />
        <TextField value={tenure} style={{width:'500px',margin:'20px'}} onChange={(e)=>setTenure(e.target.value)} id="filled-basic" label="Loan Tenure" variant="filled" />
        <TextField value={intrest} style={{width:'500px',margin:'20px'}} onChange={(e)=>setIntrest(e.target.value)} id="filled-basic" label="Interest Rate in %" variant="filled" />
        <div>
        <Button style={{background:theme.palette.secondary.light,width:'200px',margin:'10px'}} onClick={calculate}  variant="contained">Calculate</Button>
        <Button style={{background:theme.palette.secondary.light,width:'200px',margin:'10px'}} onClick={reset} variant="contained">Reset</Button>
        </div>

        </div>
        <div className="putput">
            <h2 style={{color:theme.palette.secondary.main}}>Your Monthly EMI :<span id='emi'>{emiamount}</span></h2>
            
        </div>
        
    </div>
  )
}

export default Main