import React,{Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import handleEdit from './VleresimiPerfundimtarUpdate';
import NotaIcon from '../crud-img/nota-icon.svg';


export default function VleresimiPerfundimtar () {

    const[VleresimiPerfundimtar, setVleresimiPerfundimtar] = useState([]);
    

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    
    useEffect(() => {
        axios.get( 'https://localhost:7249/api/VleresimiPerfundimtar/GetNotaP' )
            .then(response => {
                setVleresimiPerfundimtar(response.data);
            })
    }, [refreshKey])




 //Delete data in database    
 function DeleteVleresimiPerfundimtar(VlersimiPerfundimtar) {
    const confirmBox = window.confirm("A jeni i sigurte qe deshironi me fshi VleresimiPerfundimtarr " + VlersimiPerfundimtar.NotaP);

    if (confirmBox === true) {
        axios.delete('https://localhost:7249/api/VleresimiPerfundimtar/FshijeVleresimiPerfundimtar/3' + VlersimiPerfundimtar.NotaP)
            .then(() => {
                setRefreshKey(refreshKey => refreshKey + 1)
            })
    }
    else {
        console.log("Process of deleting 'VleresimiPerfundimtar' canceled !!");
    }
}
return(
    <div>
    <div className='link'>
        <Link  to="../VleresimiPerfundimtarAdd">
            <img src ={NotaIcon} alt="crud-img" className='icons' />
            <p> Shto Vleresimin Perfundimtar</p>
        </Link>
    </div>
   
        <br />
        <br />
   
                <table className="table table-striped">
                    <thead>
                        <tr>

                            <th>Nota1</th>
                            <th>Nota2</th>
                            <th>Nota3</th>
                            <th>NotaP</th>
                            <th>Opsionet</th>

                        </tr>
                    </thead>
                    <tbody>
                        {VleresimiPerfundimtar.map(VleresimiPerfundimtar=>(
                           <tr key={VleresimiPerfundimtar.notaP}>
                            {console.log(VleresimiPerfundimtar)}
                               <td>{VleresimiPerfundimtar.nota1}</td>
                               <td>{VleresimiPerfundimtar.nota2}</td>
                               <td>{VleresimiPerfundimtar.nota3}</td>
                               <td>{VleresimiPerfundimtar.notaP}</td>
                               
                       
                        
                               <td>
                               <Link to="../VleresimiPerfundimtarUpdate" >
                                    <button type="button" className='btn1'  onClick={handleEdit} >
                                        Update
                                    </button>
                                </Link>
                               <br></br>
                               <br></br>


                               
                                    <button  type="button" onClick={() => DeleteVleresimiPerfundimtar(VleresimiPerfundimtar.notaP)}
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