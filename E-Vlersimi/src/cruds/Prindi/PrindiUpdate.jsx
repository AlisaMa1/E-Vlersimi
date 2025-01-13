import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';

export default function UpdatePrindi() {
    const [idPrindi, setIdPrindi] = useState('');
    const [nxenesi, setNxenesi] = useState('');
    const [mbiemriP, setMbiemriP] = useState('');
    const [emriP, setEmriP] = useState('');
    const [nrTel, setNrTel] = useState('');
    const [refreshKey, setRefreshKey] = useState('0');

    // Get data from database
    useEffect(() => {
        axios.get('https://localhost:7249/api/Prindii/UpdatePrindii')
            .then(response => {
                const prindiData = response.data;
                setIdPrindi(prindiData.idPrindi);
                setNxenesi(prindiData.nxenesi);
                setMbiemriP(prindiData.mbiemriP);
                setEmriP(prindiData.emriP);
                setNrTel(prindiData.nrTel);
            })
            .catch(error => {
                console.error('Error fetching Prindi data:', error);
            });
    }, [refreshKey]);

    const handleEdit = (e) => {
        e.preventDefault();
        const updatedPrindi = { idPrindi, nxenesi, mbiemriP, emriP, nrTel };
        axios.put('https://localhost:7138/api/Prindii/UpdatePrindii', updatedPrindi)
            .then(() => {
                console.log(updatedPrindi);
                window.confirm('Prindi u perditesua me sukses!');
            })
            .catch(error => {
                console.error('Error updating Prindi:', error);
            });
    };

    return (
        <form onSubmit={handleEdit}>
            <TextField
                required
                id="idPrindi"
                label="idPrindi"
                variant="standard"
                value={idPrindi}
                onChange={(e) => setIdPrindi(e.target.value)}
            />
            <TextField
                required
                id="nxenesi"
                label="nxenesi"
                variant="standard"
                value={nxenesi}
                onChange={(e) => setNxenesi(e.target.value)}
            />
            <TextField
                required
                id="mbiemriP"
                label="mbiemriP"
                variant="standard"
                value={mbiemriP}
                onChange={(e) => setMbiemriP(e.target.value)}
            />
            <TextField
                required
                id="emriP"
                label="emriP"
                variant="standard"
                value={emriP}
                onChange={(e) => setEmriP(e.target.value)}
            />
            <TextField
                required
                id="nrTel"
                label="nrTel"
                variant="standard"
                value={nrTel}
                onChange={(e) => setNrTel(e.target.value)}
            />
            <br /><br /><br />
            <button type="submit" className="btn btn-outline-secondary">
                Ruaj ndryshimet
            </button>
        </form>
    );
}