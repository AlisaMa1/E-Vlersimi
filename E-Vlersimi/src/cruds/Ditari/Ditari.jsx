import React,{useState, useEffect } from 'react';
import axios from 'axios';
import handleEdit from './DitariUpdate';
import { Link } from 'react-router-dom';
import DitariIcon from '../crud-img/ditari-icon.svg'

export default function Ditari() {
    const [fullData, setFullData] = useState([]);
    const [ditari, setDitari] = useState([]);
    const [nxenesi, setNxenesi] = useState({}); // Add this line
    const [refreshKey, setRefreshKey] = useState('0');
    const [selectedIdKlasa, setSelectedIdKlasa] = useState(null);

    //get data from databases
    useEffect(() => {
        // Fetch nxenesi data
        axios.get(`https://localhost:7249/api/Nxenesii/GetNxenesat?idKlasa=${selectedIdKlasa}`) // Replace with your actual API endpoint
            .then(response => {
                const nxenesiData = {};
                response.data.forEach(item => {
                    nxenesiData[item.idNxenesi] = { emriN: item.emriN, mbiemriN: item.mbiemriN }; // Replace 'id', 'name', and 'lastName' with your actual data structure
                });
                setNxenesi(nxenesiData);
            });

        // Fetch ditari data
        axios.get('https://localhost:7249/api/Ditari/GetDitaret')
            .then(response => {
                setFullData(response.data);
                const filteredData = response.data.filter(item => item.idKlasa == selectedIdKlasa);
                setDitari(filteredData);
            });
    }, [refreshKey, selectedIdKlasa])

    //Delete data in database    
    function DeleteDitari(idKlasa) {
        const confirmBox = window.confirm(  "A jeni i sigurte qe deshironi  me fshi Ditarin e klases " + idKlasa )
        if (confirmBox === true) {
            axios.delete('https://localhost:7249/api/Ditari/FshijeDitarin/?idKlasa=' + idKlasa)
                .then(() => {
                    setRefreshKey(refreshKey => refreshKey + 1)
                })
        }
        else {
            console.log("Process of deleting 'Ditari' canceled !!");
        }
    }

    return(
        <div>
            <div className='link'>
                <Link  to="../DitariAdd">
                    <img src ={DitariIcon} alt="crud-img" className='icons' />
                    <p> Shto Ditar</p>
                </Link>
            </div>
   
            <br />
            <br />
   
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>
                            Klasa
                            <select onChange={e => setSelectedIdKlasa(e.target.value)}>
                                {fullData.map(item => (
                                    <option key={item.idKlasa} value={item.idKlasa}>{item.idKlasa}</option>
                                ))}
                            </select>
                        </th>
                        <th>Id Nxenesi</th>
                        <th>Lenda</th>
                        <th>Mesimdhenesi</th>
                        <th>Nxenesi</th>
                        <th>notaP1</th>
                        <th>notaP2</th>
                        <th>notaP3</th>
                        <th>notaP</th>
                        <th>Prezenca</th>
                        <th>Orari</th>
                        <th>Opsionet</th>
                    </tr>
                </thead>
                <tbody>
                    {ditari.map(Ditari => (
                        <tr key={Ditari.idKlasa}>
                            <td>{Ditari.idKlasa}</td>
                            <td>{Ditari.idNxenesi}</td>
                            <td>{Ditari.lenda}</td>
                            <td>{Ditari.mesimdhenesiId}</td>
                            <td>{nxenesi[Ditari.nxenesiId] ? `${nxenesi[Ditari.nxenesiId].emriN} ${nxenesi[Ditari.nxenesiId].mbiemriN}` : 'N/A'}</td>
                            <td>{Ditari.notaP1}</td>
                            <td>{Ditari.notaP2}</td>
                            <td>{Ditari.notaP3}</td>
                            <td>{Ditari.notaP}</td>
                            <td>{Ditari.prezenca}</td>
                            <td>{Ditari.orari}</td>
                          
                            <td>
                               <Link to="../DitariUpdate" >
                                    <button type="button" className='btn1'  onClick={handleEdit} >
                                        Update
                                    </button>
                                </Link>
                               <br></br>
                               <br></br>


                               
                                    <button  type="button" onClick={() => DeleteDitari(Ditari.idNxenesi)}
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