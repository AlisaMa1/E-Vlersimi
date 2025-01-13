import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PrindiIcon from '../crud-img/prindi-icon.svg'
import handleEdit from './PrindiUpdate';

export default function Prindi() {
    const [Prindi, setPrindi] = useState([]);
    const [refreshKey, setRefreshKey] = useState('0');

    // Get data from database
    useEffect(() => {
        axios.get('https://localhost:7249/api/Prindii/GetIdPrindi')
            .then(response => {
                setPrindi(response.data);
            })
            .catch(error => {
                console.error('Error fetching Prindi:', error);
            });
    }, [refreshKey]);

    // Delete data from database
    function DeletePrindi(idPrindi) {
        const confirmBox = window.confirm("A jeni i sigurte qe deshironi te largoni Prindin e nxenesit " + idPrindi);
        if (confirmBox === true) {
            axios.delete(`https://localhost:7138/api/Prindii/FshijePrindii/${idPrindi}`)
                .then(() => {
                    setRefreshKey(prevKey => prevKey + 1);
                })
                .catch(error => {
                    console.error('Error deleting Prindi:', error);
                });
        } else {
            console.log("Process of deleting 'Prindi' canceled !!");
        }
    }

    return (
        <div>
        <div className='link'>
            <Link  to="../PrindiAdd">
                <img src ={PrindiIcon} alt="crud-img" className='icons' />
                <p> Shto Prind</p>
            </Link>
        </div>


            <br />
            <br />

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Prindi</th>
                        <th>Nxenesi</th>
                        <th>Mbiemri</th>
                        <th>Emri</th>
                        <th>Nr-Telefonit</th>
                        <th>Veprime</th>
                    </tr>
                </thead>
                <tbody>
                    {Prindi.map(prindi => (
                        <tr key={prindi.idPrindi}>
                            <td>{prindi.idPrindi}</td>

                            <td>{prindi.nxenesi}</td>
                            <td>{prindi.mbiemriP}</td>
                            <td>{prindi.emriP}</td>
                            <td>{prindi.nrTel}</td>
                      

                            <td>
                               <Link to="../PrindiUpdate" >
                                    <button type="button" className='btn1'  onClick={handleEdit} >
                                        Update
                                    </button>
                                </Link>
                               <br></br>
                               <br></br>


                               
                                    <button  type="button" onClick={() => DeletePrindi(Prindi.IdPrindi)}
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