import TextField from '@mui/material/TextField';

import { React,  useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function VleresimiPerfundimtarAdd(){ 




    const [refreshKey, setRefreshKey] = useState('0');

    const navigate = useNavigate();

     //Set data to database
   
     const [nota1, setnota1] = useState('');
     const [nota2, setnota2 ] = useState('');
     const [nota3, setnota3] = useState('');
     const [notaP, setNotaP]= useState('');
     

     
 
     const handleAdd = (e) => {
         e.preventDefault();
         const VleresimiPerfundimtar = { nota1, nota2, nota3, notaP};
 
         axios.post('https://localhost:7249/api/VleresimiPerfundimtar/ShtoNota3', VleresimiPerfundimtar)
             .then(() => {
                window.alert('VleresimiPerfundimtar u shtua me sukses!');
                navigate('../VleresimiPerfundimtar');
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
                   Shto VleresimiPerfundimtar
                   </h4>
            <br />
            <br />
                        <TextField
                           
                            id="margin-dense"
                            label="notaP"
                            value={notaP}
                            onChange={(e) => setNotaP(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                                marginBottom: '20px'
                            }}
                        /> 
                        <TextField
                            id="margin-dense"
                            label="nota1"
                            value={nota1}
                            onChange={(e) => setnota1(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                           
                        /> 
                        <TextField
                            id="margin-dense"
                            label="nota2"
                            value={nota2}
                            onChange={(e) => setnota2(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                        /> 
                        <TextField
                            id="margin-dense"
                            label="nota3"
                            value={nota3}
                            onChange={(e) => setnota3(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                        /> 
                       
                         
                       <br /> <br />


                        <button type="submit" className="button">
                           Add VleresimiPerfundimtar
                        </button>
            </form>
  
)}