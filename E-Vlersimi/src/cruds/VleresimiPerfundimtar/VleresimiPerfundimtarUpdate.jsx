import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

export default function UpdateVleresimiPerfundimtar() {
    const [VleresimiPerfundimtar, setVleresimiPerfundimtar] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get('hhttps://localhost:7249/api/VleresimiPerfundimtar/GetNotaP')
            .then(response => {
                setVleresimiPerfundimtar(response.data);
             
            });
    }, [refreshKey]);

    const [nota1, setnota1] = useState('');
    const [nota2, setnota2] = useState('');
    const [nota3, setnota3] = useState('');
    const [notaP, setNotaP] = useState('');
    

    const handleEdit = (e) => {
        e.preventDefault();
        const VleresimiPerfundimtar = { nota1, nota2, nota3, notaP };
        VleresimiPerfundimtar.map((UpdateVleresimiPerfundimtar) => {
            if (notaP == UpdateVleresimiPerfundimtar.notaP) {
               axios.put('https://localhost:7249/api/VleresimiPerfundimtar/UpdateNota3', VleresimiPerfundimtar)

                    .then(() => {
                        console.log(VleresimiPerfundimtar);
                    })
                    .then(() => {
                        window.confirm('VleresimiPerfundimtar u perditesua me sukses!');
                        
                    });
            }
        });
    };
    

    return (
        <form onSubmit={handleEdit} >
                  <TextField
            required
            notaP="filled-required"
                label="notaP"
                variant="standard"
                value={notaP}
                onChange={(e) => setNotaP(e.target.value)}
            />
                      <TextField
            required
            nota1="filled-required"
                label="nota1"
                variant="standard"
                value={nota1}
                onChange={(e) => setnota1(e.target.value)}
            />
                       <TextField
            required
             nota2="filled-required"
                label="nota2"
                variant="standard"
                value={nota2}
                onChange={(e) => setnota2(e.target.value)}
            />
                       <TextField
            required
            nota3="filled-required"
                label="nota3"
                variant="standard"
                value={nota3}
                onChange={(e) => setnota3(e.target.value)}
            />
                       <TextField
           
          
            
            />
                            <br /><br /><br />
                           
                           <button type="submit" className="btn btn-outline-secondary">
                               Ruaj ndryshimet
                            </button>
        </form>
    );
}