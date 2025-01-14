import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

export default function UpdateDitari() {
    const [ditari, setDitari] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7249/api/Ditari/GetDitaret')
            .then(response => {
                setDitari(response.data);
             
            });
    }, [refreshKey]);

    const [idKlasa, setIdKlasa] = useState('');
    const [iD_Ditari, setID_Ditari] = useState('');
    const [lenda, setLenda] = useState('');
    const [mesimdhenesiId, setMesimdhenesiId] = useState('');
    const [nxenesiId, setNxenesiId] = useState('');
    const [prezenca, setPrezenca] = useState('');
    const [orari, setOrari] = useState('');

    const handleEdit = (e) => {
        e.preventDefault();
        const Ditari = { idKlasa, iD_Ditari, lenda, mesimdhenesiId, nxenesiId, prezenca, orari };
        ditari.map((UpdateDitari) => {
            if (idKlasa == UpdateDitari.idKlasa) {
               axios.put('https://localhost:7249/api/Ditari/UpdateDitari', Ditari)

                    .then(() => {
                        console.log(Ditari);
                    })
                    .then(() => {
                        window.confirm('Ditari u perditesua me sukses!');
                        
                    });
            }
        });
    };
    

    return (
        <form onSubmit={handleEdit} >
                  <TextField
            required
            idKlasa="filled-required"
                label="idKlasa"
                variant="standard"
                value={idKlasa}
                onChange={(e) => setIdKlasa(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px',
                    marginBottom: '20px'
                }}
            />
                      <TextField
            required
            iD_Ditari="filled-required"
                label="iD_Ditari"
                variant="standard"
                value={iD_Ditari}
                onChange={(e) => setID_Ditari(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px',
                    marginBottom: '20px'
                }}
            />
                       <TextField
            required
            lenda="filled-required"
                label="lenda"
                variant="standard"
                value={lenda}
                onChange={(e) => setLenda(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px'
                }}
            />
                       <TextField
            required
            mesimdhenesiId="filled-required"
                label="mesimdhenesiId"
                variant="standard"
                value={mesimdhenesiId}
                onChange={(e) => setMesimdhenesiId(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px'
                }}
            />
                       <TextField
            required
            nxenesiId="filled-required"
                label="nxenesiId"
                variant="standard"
                value={nxenesiId}
                onChange={(e) => setNxenesiId(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px'
                }}
            />
                       <TextField
            required
            prezenca="filled-required"
                label="prezenca"
                variant="standard"
                value={prezenca}
                onChange={(e) => setPrezenca(e.target.value)} 
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px'
                }}
            />
                        <TextField
            required
            orari="filled-required"
                label="orari"
                variant="standard"
                value={orari}
                onChange={(e) => setOrari(e.target.value)} 
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
                        <br /> 
        </form>
    );
}