import React,{Component, useState, useEffect } from 'react';
import axios from 'axios';
import handleEdit from './Nota2Update';
import { Link } from 'react-router-dom';
import NotaIcon from '../crud-img/nota-icon.svg';




export default function Nota2() {

    const[Nota2, setNota2] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get( 'https://localhost:7249/api/Nota2/GetNotaP2' )
            .then(response => {
                setNota2(response.data);
            })
    }, [refreshKey])




 //Delete data in database    
 function DeleteNota2(NotaP2) {
    const confirmBox = window.confirm(  "A jeni i sigurte qe deshironi me fshi Nota2 " + NotaP2 )
    if (confirmBox === true) {
        axios.delete('https://localhost:7249/api/Nota2/FshijeNota2/3' + NotaP2)
            .then(() => {
                setRefreshKey(refreshKey => refreshKey + 1)
            })
    }
    else {
        console.log("Process of deleting 'Nota2' canceled !!");
    }
}
return(
    <div>
    <div className='link'>
        <Link  to="../Nota2Add">
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
                            <th>notaP2</th>
                            <th>Opsionet</th>


                        </tr>
                    </thead>
                    <tbody>
                        {Nota2.map(Nota2=>(
                           <tr key={Nota2.notaP2}>
                               <td>{Nota2.test1}</td>
                               <td>{Nota2.test2}</td>
                               <td>{Nota2.aktiviteti}</td>
                               <td>{Nota2.notaP2}</td>
                              
                               <td>
                               <Link to="../Nota2Update" >
                                    <button type="button" className='btn1'  onClick={handleEdit} >
                                        Update
                                    </button>
                                </Link>
                               <br></br>
                               <br></br>


                               
                                    <button  type="button" onClick={() => DeleteNota2(Nota2.notaP2)}
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