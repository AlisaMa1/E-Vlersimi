import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function NxenesiiAdd(){ 




    const [refreshKey, setRefreshKey] = useState('0');

    const navigate = useNavigate();

     //Set data to database
     const [idNxenesi,setIdNxenesi] = useState('');
     const [klasa, setKlasa] = useState('');
     const [emriN, setEmriN] = useState('');
     const [mbiemriN, setMbiemriN] = useState('');
     const [lenda, setLenda] = useState('');
    
     


     
 
     const handleAdd = (e) => {
         e.preventDefault();
         const nxenesii = { idNxenesi, klasa, emriN, mbiemriN, lenda};
 
         axios.post('https://localhost:7249/api/Nxenesii/ShtoNxenesa', nxenesii)
             .then(() => {
                window.alert('Ditari u shtua me sukses!');
                navigate('../Nxenesi');
             })
             .then(() => {
             setRefreshKey(refreshKey => refreshKey + 1)
         })
     }

     return(
      
        <form onSubmit={handleAdd}>
          
                   <h4 className="text-h4">
                   Shto Nxenes
                   </h4>
            <br />
            <br />
                        <TextField
                           
                            id="margin-dense"
                            label="idNxenesi"
                            value={idNxenesi}
                            onChange={(e) => setIdNxenesi(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                                marginBottom: '20px'
                            }}
                        /> 
                       
                        <TextField
                            id="margin-dense"
                            label="klasa "
                            value={klasa}
                            onChange={(e) => setKlasa(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                        /> 
                        <TextField
                            id="margin-dense"
                            label="emriN"
                            value={emriN}
                            onChange={(e) => setEmriN(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                        /> 
                         <TextField
                            id="filled"
                            label="mbiemriN"
                            value={mbiemriN}
                            onChange={(e) => setMbiemriN(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                        /> 
                       
                        
                         <TextField
                            id="filled"
                            label="lenda "
                            value={lenda}
                            onChange={(e) => setLenda(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',

                            }}
                        
                        /> 
                       <br /> <br />


                        <button type="submit" className="button">
                           Add Nxenes
                        </button>
                        <br /> <br />
                        <br /> <br />
            </form>
  
)}