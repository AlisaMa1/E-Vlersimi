import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function LendaAdd() {
    const [lenda, setLenda] = useState('');
    const navigate = useNavigate();

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                'https://localhost:7249/api/Lendum/ShtoLenda',
                { lenda: lenda },
                { headers: { 'Content-Type': 'application/json' } }
            );
            window.alert('Lenda u shtua me sukses!');
            navigate('../Lenda');
        } catch (error) {
            console.error('Error adding lenda:', error);
            window.alert('Gabim gjate shtimit te lendeve!');
        }
    };

    return (
        <form onSubmit={handleAdd}>
            <h4 className="text-h4">Shto Lenda</h4>
            <TextField
                id="lenda"
                label="Lenda"
                value={lenda}
                onChange={(e) => setLenda(e.target.value)}
                sx={{
                    margin: '20px',
                }}
            />
            <Button type="submit" variant="contained" sx={{ marginTop: '20px' }}>
                Shto Lenda
            </Button>
        </form>
    );
}