import TextField from '@mui/material/TextField';

import { React,  useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function DitariAdd(){ 




    const [refreshKey, setRefreshKey] = useState('0');

    const navigate = useNavigate();

     //Set data to database
     const [idKlasa,setIdKlasa] = useState('');
     const [iD_Ditari, setID_Ditari] = useState('');
     const [lenda, setLenda] = useState('');
     const [mesimdhenesiId, setMesimdhenesiId] = useState('');
     const [nxenesiId, setNxenesiId] = useState('');
     const [notaP1, setNotaP1] = useState('');
     const [notaP2, setNotaP2 ] = useState('');
     const [notaP3, setNotaP3] = useState('');
     const [notaP, setNotaP  ]= useState('');
     const [prezenca, setPrezenca] = useState('');
     const [orari, setOrari] = useState('');


     
 
     const handleAdd = (e) => {
         e.preventDefault();
         const ditari = { idKlasa, iD_Ditari, lenda, mesimdhenesiId, nxenesiId,prezenca, orari};
 
         axios.post('https://localhost:7249/api/Ditari/ShtoDitari', ditari)
             .then(() => {
                window.alert('Ditari u shtua me sukses!');
                navigate('../Ditari');
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
                   Shto Ditar
                   </h4>
            <br />
            <br />
                        <TextField
                           
                            id="margin-dense"
                            label="idKlasa"
                            value={idKlasa}
                            onChange={(e) => setIdKlasa(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                                marginBottom: '20px'
                            }}
                        /> 
                        <TextField
                            id="margin-dense"
                            label="iD_Ditari"
                            value={iD_Ditari}
                            onChange={(e) => setID_Ditari(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
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
                            label="mesimdhenesiId"
                            value={mesimdhenesiId}
                            onChange={(e) => setMesimdhenesiId(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                        /> 
                         <TextField
                            id="filled"
                            label="nxenesiId"
                            value={nxenesiId}
                            onChange={(e) => setNxenesiId(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                        /> 
                       
                        
                         <TextField
                            id="filled"
                            label="prezenca "
                            value={prezenca}
                            onChange={(e) => setPrezenca(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',

                            }}
                        />
                         <TextField
                            id="filled"
                            label="orari "
                            value={orari}
                            onChange={(e) => setOrari(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',

                            }}
                        /> 
                       <br /> <br />


                        <button type="submit" className="button">
                           Add Ditari
                        </button>
                        <br /> <br />
                        <br /> <br />
            </form>
  
)}