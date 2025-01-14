import React,{Component, useState, useEffect } from 'react';
import axios from 'axios';
import handleEdit from './MesimdhenesiUpdate';
import { Link } from 'react-router-dom';
import userAdd from '../crud-img/add-user.svg'



export default function Mesimdhenesii() {

    const[mesimdhenesii, setMesimdhenesii] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get( 'https://localhost:7249/api/Mesimdhenesii/GetMesimdhenesii' )
            .then(response => {
                setMesimdhenesii(response.data);
            })
    }, [refreshKey])




 //Delete data in database    
 function DeleteMesimdhenesii(idMesimdhensi) {
    const confirmBox = window.confirm(  "A jeni i sigurte qe deshironi  me fshi Mesimdhenesin" + idMesimdhensi )
    if (confirmBox === true) {
        axios.delete('https://localhost:7249/api/Mesimdhenesii/FshijeMesimdhenesin/?idMesimdhensi=' + idMesimdhensi)
            .then(() => {
                setRefreshKey(refreshKey => refreshKey + 1)
            })
    }
    else {
        console.log("Process of deleting 'Mesimdhenesi' canceled !!");
    }
}
return(
    <div>
        <br /><br />
                            
        <div className='link'>
                <Link  to="../MesimdhenesiAdd">
                    <img src ={userAdd} alt="user-add" className='icons' />
                    <p> Shto Mesimdhenes</p>
                </Link>

                </div>
                           
   
        <br />
        <br />
   
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Mesimdhenesi-Id</th>
                            <th>Lenda</th>
                            <th>Emri</th>
                            <th>Mbiemri</th>
                            <th>NR-Telefonit</th>
                            <th>Opsionet</th>
                           
                           


                        </tr>
                    </thead>
                    <tbody>
                        {mesimdhenesii.map(Mesimdhenesii=>(
                           <tr key={Mesimdhenesii.idMesimdhensi}>
                               {console.log(Mesimdhenesii)}
                               <td>{Mesimdhenesii.idMesimdhensi}</td>
                               <td>{Mesimdhenesii.lenda}</td>
                               <td>{Mesimdhenesii.mbiemriM}</td>
                               <td>{Mesimdhenesii.emriM}</td>
                               <td>{Mesimdhenesii.nrTel}</td>
                              
                       
                        
                               <td>
                               <Link to="../MesimdhenesiUpdate">
                                  <button type="button"  onClick={handleEdit}  
                                   className="btn1">
                            Update
                                    
                                    
                                   </button >  </Link>

                                   <br></br>
                               <br></br>
                                   < button type="button" onClick={() => DeleteMesimdhenesii(Mesimdhenesii.idMesimdhensi)}
                                   className="btn2">
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