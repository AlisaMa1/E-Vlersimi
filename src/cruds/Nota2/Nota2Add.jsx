import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Nota2Add() {
  const [refreshKey, setRefreshKey] = useState('0');
  const navigate = useNavigate();

  // Set data to database
  const [test1, setTest1] = useState('');
  const [test2, setTest2] = useState('');
  const [aktiviteti, setAktiviteti] = useState('');
  const [notaP2, setNotaP2] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    const Nota2 = { test1, test2, aktiviteti, notaP2 };

    axios.post('https://localhost:7249/api/Nota2/ShtoNota2', Nota2)
      .then(() => {
        window.alert('Nota2 u shtua me sukses!');
        navigate('../Nota2');
      })
      .then(() => {
        setRefreshKey(refreshKey => refreshKey + 1);
      });
  }

  return (
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
        label="notaP2"
        value={notaP2}
        onChange={(e) => setNotaP2(e.target.value)}
        sx={{
          marginLeft: '20px',
          marginRight: '20px',
          marginBottom: '20px'
        }}
      />
      <TextField
        id="margin-dense"
        label="test1"
        value={test1}
        onChange={(e) => setTest1(e.target.value)}
        sx={{
          marginLeft: '20px',
          marginRight: '20px',
        }}
      />
      <TextField
        id="margin-dense"
        label="test2"
        value={test2}
        onChange={(e) => setTest2(e.target.value)}
        sx={{
          marginLeft: '20px',
          marginRight: '20px',
        }}
      />
      <TextField
        id="margin-dense"
        label="aktiviteti"
        value={aktiviteti}
        onChange={(e) => setAktiviteti(e.target.value)}
        sx={{
          marginLeft: '20px',
          marginRight: '20px',
        }}
      />

      <br />
      <br />

      <button type="submit" className="button">
        Add Nota2
      </button>
    </form>
  );
}