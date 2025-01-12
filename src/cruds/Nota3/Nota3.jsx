import React,{Component, useState, useEffect } from 'react';
import axios from 'axios';
import handleEdit from './Nota3Update';
import { Link } from 'react-router-dom';
import NotaIcon from '../crud-img/nota-icon.svg';




export default function Nota3() {

    const[Nota3, setNota3] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get( 'https://localhost:7249/api/Nota3/GetNotaP3' )
            .then(response => {
                setNota3(response.data);
            })
    }, [refreshKey])




 //Delete data in database    
 function DeleteNota3(NotaP3) {
    const confirmBox = window.confirm(  "A jeni i sigurte qe deshironi me fshi Nota3 " + NotaP3 )
    if (confirmBox === true) {
        axios.delete('https://localhost:7249/api/Nota3/FshijeNota3/3' + NotaP3)
            .then(() => {
                setRefreshKey(refreshKey => refreshKey + 1)
            })
    }
    else {
        console.log("Process of deleting 'Nota3' canceled !!");
    }
}
return(
    <div>
    <div className='link'>
        <Link  to="../Nota3Add">
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
                            <th>notaP3</th>
                            <th>Opsionet</th>


                        </tr>
                    </thead>
                    <tbody>
                        {Nota3.map(Nota3=>(
                           <tr key={Nota3.NotaP3}>
                               <td>{Nota3.test1}</td>
                               <td>{Nota3.test2}</td>
                               <td>{Nota3.aktiviteti}</td>
                               <td>{Nota3.notaP3}</td>
                              
                            
                       
                        
                               <td>
                               <Link to="../Nota3Update" >
                                    <button type="button" className='btn1'  onClick={handleEdit} >
                                        Update
                                    </button>
                                </Link>
                               <br></br>
                               <br></br>


                               
                                    <button  type="button" onClick={() => DeleteNota3(Nota3.notaP3)}
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