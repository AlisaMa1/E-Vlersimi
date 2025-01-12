import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

export default function UpdateNota2() {
    const [Nota2, setNota2] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7249/api/Nota2/UpdateNota2')
            .then(response => {
                setNota2(response.data);
             
            });
    }, [refreshKey]);

    const [test1, settest1] = useState('');
    const [test2, settest2] = useState('');
    const [aktiviteti, setaktiviteti] = useState('');
    const [notaP2, setNotaP2] = useState('');
    

    const handleEdit = (e) => {
        e.preventDefault();
        const Nota2 = { test1, test2, aktiviteti, notaP2 };
        Nota2.map((UpdateNota2) => {
            if (notaP2 == UpdateNota2.notaP2) {
               axios.put('https://localhost:7249/api/Nota2/UpdateNota2', Nota2)

                    .then(() => {
                        console.log(Nota2);
                    })
                    .then(() => {
                        window.confirm('Nota2 u perditesua me sukses!');
                        
                    });
            }
        });
    };
    

    return (
        <form onSubmit={handleEdit} >
                  <TextField
            required
            notaP2="filled-required"
                label="notaP2"
                variant="standard"
                value={notaP2}
                onChange={(e) => setNotaP2(e.target.value)}
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
                onChange={(e) => setNota2(e.target.value)}
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