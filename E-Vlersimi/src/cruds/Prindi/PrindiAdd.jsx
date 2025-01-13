import TextField from '@mui/material/TextField';

import { React,  useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function PrindiAdd(){ 




    const [refreshKey, setRefreshKey] = useState('0');

    const navigate = useNavigate();

     //Set data to database
   
     const [idPrindi, setPrindi] = useState('');
     const [nxenesi, setnxenesi ] = useState('');
     const [mbiemriP, setmbiemriP] = useState('');
     const [emriP, setemriP  ]= useState('');
     const [nrTel, setnrTel] = useState('');
     
     const handleAdd = (e) => {
         e.preventDefault();
         const Prindi = { idPrindi, nxenesi, mbiemriP, emriP,nrTel};
 
         axios.post('https://localhost:7249/api/Prindii/ShtoIdPrindi', Prindi)
             .then(() => {
                window.alert('Prindi u shtua me sukses!');
                navigate('../Prindi');
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
                   Shto Prindin
                   </h4>
            <br />
            <br />
                        <TextField
                           
                            id="margin-dense"
                            label="idPrindi"
                            value={idPrindi}
                            onChange={(e) => setPrindi(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                                marginBottom: '20px'
                            }}
                        /> 
                        <TextField
                            id="margin-dense"
                            label="nxenesi"
                            value={nxenesi}
                            onChange={(e) => setnxenesi(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                           
                        /> 
                        <TextField
                            id="margin-dense"
                            label="mbiemriP"
                            value={mbiemriP}
                            onChange={(e) => setmbiemriP(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                        /> 
                        <TextField
                            id="margin-dense"
                            label="emriP"
                            value={emriP}
                            onChange={(e) => setemriP(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                            /> 
                            <TextField
                                id="margin-dense"
                                label="nrTel"
                                value={nrTel}
                                onChange={(e) => setnrTel(e.target.value)}
                                sx={{ 
                                    marginLeft:'20px',
                                    marginRight:'20px',
                                }}
                        /> 
                       
                         
                       <br /> <br />


                        <button type="submit" className="button">
                           Add Prindi
                        </button>
            </form>
  
)}