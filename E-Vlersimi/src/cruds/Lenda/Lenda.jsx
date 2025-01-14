import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import LendaIcon from '../crud-img/lenda-icon.svg'
export default function Lenda() {
    const [lenda, setLenda] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');

    useEffect(() => {
        axios.get('https://localhost:7249/api/Lendum/GetLenda')
            .then(response => {
                setLenda(response.data);
            })
            .catch(error => {
                console.error('Error fetching lenda:', error);
            });
    }, [refreshKey]);

    function handleDeleteLenda(lendaId) {
        const confirmBox = window.confirm("A jeni i sigurtë që dëshironi të largoni Lenden?");
        if (confirmBox === true) {
            axios.delete(`https://localhost:7249/api/Lendum/FshijeLenden/${lendaId}`)
                .then(() => {
                    setRefreshKey(prevKey => prevKey + 1);
                })
                .catch(error => {
                    console.error('Error deleting lenda:', error);
                });
        }
    }

    return (
        <div>
        <div className='link'>
            <Link  to="../LendaAddd">
                <img src ={LendaIcon} alt="crud-img" className='icons' />
                <p> Shto Lenda</p>
            </Link>
        </div>

            <br /><br />

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Lenda</th>
                        <th>Veprimet</th>
                    </tr>
                </thead>
                <tbody>
                    {lenda.map(lendaItem => (
                        <tr key={lendaItem.lenda}>
                            <td>{lendaItem.lenda}</td>
                               
                            <td>
             <button  type="button" onClick={() => handleDeleteLenda(lendaItem.lenda)}
                                    className="btn2" >
                                        Delete
                                    </button>
                                </td>
                           </tr>
                        ))}
                    </tbody>
                </table>
            </div>
       

    )
    
}