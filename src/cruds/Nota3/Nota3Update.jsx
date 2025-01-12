import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

export default function UpdateNota3() {
    const[Nota3, setNota3] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7249/api/Nota3/UpdateNota3')
            .then(response => {
                setNota3(response.data);
             
            });
    }, [refreshKey]);

     const [test1, settest1] = useState('');
     const [test2, settest2 ] = useState('');
     const [aktiviteti, setaktiviteti] = useState('');
     const [notaP3, setNotaP3  ]= useState('');
     
    

    const handleEdit = (e) => {
        e.preventDefault();
        const Nota3 = { test1, test2, aktiviteti, notaP3 };
        Nota3.map((UpdateNota3) => {
            if (notaP3 == UpdateNota3.notaP3) {
               axios.put('https://localhost:7249/api/Nota3/UpdateNota3', Nota3)

                    .then(() => {
                        console.log(Nota3);
                    })
                    .then(() => {
                        window.confirm('Nota3 u perditesua me sukses!');
                        
                    });
            }
        });
    };
    

    return (
        <form onSubmit={handleEdit} >
                  <TextField
            required
            notaP3="filled-required"
                label="notaP3"
                variant="standard"
                value={notaP3}
                onChange={(e) => setNotaP3(e.target.value)}
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
                onChange={(e) => setNota3(e.target.value)}
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