import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './index.css'

const App = ()=> {
  const[p,setP] = useState();
  const[t,setT] = useState();
  const[r,setR] = useState();
  const[s,setS] = useState();
  const calculateInterest = () =>{
    setS(p*t*r/100)
  }
  return (
    <div className='div'>
      <AppBar position="static">
        <Toolbar>
       
    
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Simple Interest Calculator
          </Typography>
        
        </Toolbar>
      </AppBar>
      <br></br>
      <br></br>
      <TextField onChange={(event)=> setP(event.target.value)}
          id="outlined-number"
          label="Enter Principal amount"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br></br>
        <br></br>
        <TextField onChange={(event)=> setT(event.target.value)}
          id="outlined-number"
          label="Enter Time"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br></br>
        <br></br>
        <TextField onChange={(event)=> setR(event.target.value)}
          id="outlined-number"
          label="Enter Rate"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br></br>
        <br></br>
        <Button onClick={()=> calculateInterest()} variant="contained">Calculate</Button>
        <br></br>
        <br></br>
      <Typography variant="h6" gutterBottom>
        Simple Interest is : {s}
      </Typography>
    </div>
  );
}

export default App;
