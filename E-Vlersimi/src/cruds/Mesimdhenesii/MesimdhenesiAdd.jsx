import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Mesimdhenesii from './Mesimdhenesi';


export default function NxenesiiAdd(){ 




    const [refreshKey, setRefreshKey] = useState('0');

    const navigate = useNavigate();

     //Set data to database
     const [idMesimdhensi,setIdMesimdhensi] = useState('');
     const [lenda, setLenda] = useState('');
     const [mbiemriM, setMbiemriM] = useState('');
     const [emriM, setEmriM] = useState('');
     const [nrTel, setNrTel] = useState('');
    
     


     
 
     const handleAdd = (e) => {
         e.preventDefault();
         const mesimdhenesii = { idMesimdhensi, lenda, mbiemriM, emriM, nrTel};
 
         axios.post('https://localhost:7249/api/Mesimdhenesii/ShtoMesimdhenesii', mesimdhenesii)
             .then(() => {
                window.alert('Mesimdhenesii u shtua me sukses!');
                navigate('../Mesimdhenesi');
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
                   Shto Mesimdhenes
                   </h4>
            <br />
            <br />
                        <TextField
                           
                            id="margin-dense"
                            label="idMesimdhensi"
                            value={idMesimdhensi}
                            onChange={(e) => setIdMesimdhensi(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                                marginBottom: '20px'
                            }}
                        /> 
                       
                        <TextField
                            id="margin-dense"
                            label="lenda "
                            value={lenda}
                            onChange={(e) => setLenda(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                        /> 
                        <TextField
                            id="margin-dense"
                            label="mbiemriM"
                            value={mbiemriM}
                            onChange={(e) => setMbiemriM(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                        /> 
                         <TextField
                            id="filled"
                            label="emriM"
                            value={emriM}
                            onChange={(e) => setEmriM(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                        /> 
                       
                        
                         <TextField
                            id="filled"
                            label="nrTel "
                            value={nrTel}
                            onChange={(e) => setNrTel(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',

                            }}
                        
                        /> 
                       <br /> <br />


                        <button type="submit" className="button">
                           Add Mesimdhenes
                        </button>
                        <br /> <br />
                        <br /> <br />
            </form>
  
)}