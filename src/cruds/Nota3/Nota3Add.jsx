import TextField from '@mui/material/TextField';

import { React,  useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Nota3Add(){ 




    const [refreshKey, setRefreshKey] = useState('0');

    const navigate = useNavigate();

     //Set data to database
   
     const [test1, settest1] = useState('');
     const [test2, settest2 ] = useState('');
     const [aktiviteti, setaktiviteti] = useState('');
     const [notaP3, setNotaP3  ]= useState('');
     

     
 
     const handleAdd = (e) => {
         e.preventDefault();
         const Nota3 = { test1, test2, aktiviteti, notaP3};
 
         axios.post('https://localhost:7249/api/Nota3/ShtoNota3', Nota3)
             .then(() => {
                window.alert('Nota3 u shtua me sukses!');
                navigate('../Nota3');
             })
             .then(() => {
             setRefreshKey(refreshKey => refreshKey + 1)
         })
     }

     return(
      
        <form onSubmit={handleAdd}>
            <br />
            <br />
                   <h4 className="text-h4">
                   Shto Nota3
                   </h4>
            <br />
            <br />
                        <TextField
                           
                            id="margin-dense"
                            label="notaP3"
                            value={notaP3}
                            onChange={(e) => setNotaP3(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                                marginBottom: '20px'
                            }}
                        /> 
                        <TextField
                            id="margin-dense"
                            label="test1"
                            value={test1}
                            onChange={(e) => settest1(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                           
                        /> 
                        <TextField
                            id="margin-dense"
                            label="test2"
                            value={test2}
                            onChange={(e) => settest2(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                        /> 
                        <TextField
                            id="margin-dense"
                            label="aktiviteti"
                            value={aktiviteti}
                            onChange={(e) => setaktiviteti(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                        /> 
                       
                         
                       <br /> <br />


                        <button type="submit" className="button">
                           Add Nota3
                        </button>
            </form>
  
)}