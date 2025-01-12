import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

export default function UpdateNota1() {
    const [Nota1, setNota1] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7429/api/Nota1/UpdateNota1')
            .then(response => {
                setNota1(response.data);
             
            });
    }, [refreshKey]);

    const [test1, settest1] = useState('');
    const [test2, settest2] = useState('');
    const [aktiviteti, setaktiviteti] = useState('');
    const [notaP1, setNotaP1] = useState('');
    

    const handleEdit = (e) => {
        e.preventDefault();
        const Nota1 = { test1, test2, aktiviteti, notaP1 };
        Nota1.map((UpdateNota1) => {
            if (notaP1 == UpdateNota1.notaP1) {
               axios.put('https://localhost:7429/api/Nota1/UpdateNota1', Nota1)

                    .then(() => {
                        console.log(Nota1);
                    })
                    .then(() => {
                        window.confirm('Nota1 u perditesua me sukses!');
                        
                    });
            }
        });
    };
    

    return (
        <form onSubmit={handleEdit} >
                  <TextField
            required
            notaP1="filled-required"
                label="notaP1"
                variant="standard"
                value={notaP1}
                onChange={(e) => setNotaP1(e.target.value)}
            />
                      <TextField
            required
            test1="filled-required"
                label="test1"
                variant="standard"
                value={test1}
                onChange={(e) => settest1(e.target.value)}
            />
                       <TextField
            required
            test2="filled-required"
                label="test2"
                variant="standard"
                value={test2}
                onChange={(e) => setNota1(e.target.value)}
            />
                       <TextField
            required
            aktiviteti="filled-required"
                label="aktiviteti"
                variant="standard"
                value={aktiviteti}
                onChange={(e) => setaktiviteti(e.target.value)}
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