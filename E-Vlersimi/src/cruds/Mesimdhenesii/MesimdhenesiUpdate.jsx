import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import Mesimdhenesii from './Mesimdhenesi';

export default function UpdateMesimdhenesii() {
    const [mesimdhenesii, setMesimdhensi] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7249/api/Mesimdhenesii/GetMesimdhenesii')
            .then(response => {
                setMesimdhensi(response.data);
             
            });
    }, [refreshKey]);

    const [idMesimdhensi,setIdMesimdhensi] = useState('');
     const [lenda, setLenda] = useState('');
     const [mbiemriM, setMbiemriM] = useState('');
     const [emriM, setEmriM] = useState('');
     const [nrTel, setNrTel] = useState('');
    

    const handleEdit = (e) => {
        e.preventDefault();
        const Mesimdhenesii = { idMesimdhensi, lenda, mbiemriM, emriM, nrTel};
        mesimdhenesii.map((UpdateMesimdhenesii) => {
            if (idMesimdhensi == UpdateMesimdhenesii.idMesimdhensi) {
               axios.put('https://localhost:7249/api/Mesimdhenesii/UpdateMesimdhenesii', Mesimdhenesii)

                    .then(() => {
                        console.log(Mesimdhenesii);
                    })
                    .then(() => {
                        window.confirm('Mesimdhenesii u perditesua me sukses!');
                        
                    });
            }
        }); 
    };
    

    return (
        <form onSubmit={handleEdit} >
                  <TextField
            required
            idKlasa="filled-required"
                label="idMesimdhensi"
                variant="standard"
                value={idMesimdhensi}
                onChange={(e) => setIdMesimdhensi(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px',
                    marginBottom: '20px'
                }}
            />



                      <TextField
            required
            iD_Ditari="filled-required"
                label="lenda"
                variant="standard"
                value={lenda}
                onChange={(e) => setLenda(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px',
                    marginBottom: '20px'
                }}
            />
                       <TextField
            required
            lenda="filled-required"
                label="mbiemriN"
                variant="standard"
                value={mbiemriM}
                onChange={(e) => setMbiemriM(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px'
                    
                }}
            />
                       <TextField
            required
            mesimdhenesiId="filled-required"
                label="emriM"
                variant="standard"
                value={emriM}
                onChange={(e) => setEmriM(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px'
                    
                }}
            />
                       <TextField
            required
            nxenesiId="filled-required"
                label="nrTel"
                variant="standard"
                value={nrTel}
                onChange={(e) => setNrTel(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px'
                    
                }}
            />
                    
                    <br /><br /><br />
                           
                           <button type="submit" className="button">
              Ruaj ndryshimet
           </button>
           <br /> <br />
           <br /> <br />
           <br />    <br /> <br />
        </form>
    );
}