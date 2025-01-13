import React,{Component, useState, useEffect } from 'react';
import axios from 'axios';
import handleEdit from './NxenesiUpdate';
import { Link } from 'react-router-dom';
import userAdd from '../crud-img/add-user.svg'
 


export default function Nxenesii() {

    const[nxenesii, SetNxenesii] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get( 'https://localhost:7249/api/Nxenesii/GetNxenesat' )
            .then(response => {
                SetNxenesii(response.data);
            })
    }, [refreshKey])




 //Delete data in database    
 function DeleteNxenesii(idNxenesi) {
    const confirmBox = window.confirm(  "A jeni i sigurte qe deshironi  me fshi Nxenesin" + idNxenesi )
    if (confirmBox === true) {
        axios.delete('https://localhost:7249/api/Nxenesii/FshijeNxenesin/?idNxenesi=' + idNxenesi)
            .then(() => {
                setRefreshKey(refreshKey => refreshKey + 1)
            })
    }
    else {
        console.log("Process of deleting 'Nxenesi' canceled !!");
    }
}
return(
    <div>
        
                         
                           <div className='link'>
                <Link  to="../NxenesiAdd">
                    <img src ={userAdd} alt="user-add" className='icons' />
                    <p> Shto Nxenes</p>
                </Link>
                </div>
      
                <div >
                <table className="table">
                    <thead>
                        <tr>
                            <th>idNxenesi</th>
                            <th>Klasa</th>
                            <th>Emri</th>
                            <th>Mbiemri</th>
                            <th>Lenda</th>
                            <th>NotaP1</th>
                            <th>NotaP2</th>
                            <th>NotaP3</th>
                            <th>Nota-Perfundimtare</th>
                            <th>Opsionet</th>
                           
                           


                        </tr>
                    </thead>
                    <tbody>
                        {nxenesii.map(Nxenesii=>(
                           <tr key={Nxenesii.idNxenesi}>
                               {console.log(Nxenesii)}
                               <td>{Nxenesii.idNxenesi}</td>
                               <td>{Nxenesii.klasa}</td>
                               <td>{Nxenesii.emriN}</td>
                               <td>{Nxenesii.mbiemriN}</td>
                               <td>{Nxenesii.lenda}</td>
                               <td>{Nxenesii.notaP1}</td>
                               <td>{Nxenesii.notaP2}</td>
                               <td>{Nxenesii.notaP3}</td>
                               <td>{Nxenesii.notaP}</td>
                              
                       
        
                               <td>
                               <Link to="../NxenesiUpdate" >
                                    <button type="button" className='btn1'  onClick={handleEdit} >
                                        Update
                                    </button>
                                </Link>
                               <br></br>
                               <br></br>


                               
                                    <button  type="button" onClick={() => DeleteNxenesii(Nxenesii.idNxenesi)}
                                    className="btn2" >
                                        Delete
                                    </button>
                                </td>
                           </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>

    )
    
}