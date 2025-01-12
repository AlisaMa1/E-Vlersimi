import React,{Component, useState, useEffect } from 'react';
import axios from 'axios';
import handleEdit from './Nota1Update';
import { Link } from 'react-router-dom';
import NotaIcon from '../crud-img/nota-icon.svg';




export default function Nota1() {

    const[Nota1, setnota1] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get(  'https://localhost:7249/api/Nota1/GetNota1')
            .then(response => {
                setnota1(response.data);
            })
    }, [refreshKey])




 //Delete data in database    
 function DeleteNota1(notaP1) {
    const confirmBox = window.confirm(  "A jeni i sigurte qe deshironi me fshi Nota1 " + notaP1 )
    if (confirmBox === true) {
        axios.delete( 'https://localhost:7249/api/Nota1/FshijeNota1/' + notaP1)
            .then(() => {
                setRefreshKey(refreshKey => refreshKey + 1)
            })
    }
    else {
        console.log("Process of deleting 'Nota1' canceled !!");
    }
}
return(
    <div>
    <div className='link'>
        <Link  to="../Nota1Add">
            <img src ={NotaIcon} alt="crud-img" className='icons' />
            <p> Shto Nota</p>
        </Link>
    </div>
        <br />
        <br />
   
                <table className="table table-striped">
                    <thead>
                        <tr>

                            <th>Test1</th>
                            <th>Test2</th>
                            <th>Aktiviteti</th>
                            <th>notaP1</th>
                            <th>Opsionet</th>


                        </tr>
                    </thead>
                    <tbody>
                        {Nota1.map(Nota1=>(
                           <tr key={Nota1.notaP1}>
                               <td>{Nota1.test1}</td>
                               <td>{Nota1.test2}</td>
                               <td>{Nota1.aktiviteti}</td>
                               <td>{Nota1.notaP1}</td>
                              
                       
                        
                               <td>
                               <Link to="../Nota1Update" >
                                    <button type="button" className='btn1'  onClick={handleEdit} >
                                        Update
                                    </button>
                                </Link>
                               <br></br>
                               <br></br>


                               
                                    <button  type="button" onClick={() => DeleteNota1(Nota1.notaP1)}
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