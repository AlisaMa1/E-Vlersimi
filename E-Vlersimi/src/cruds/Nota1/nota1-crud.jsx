import React from 'react'
import {Route ,NavLink, Routes } from 'react-router-dom'
import Nota1 from './Nota1';
import Nota1Update from './Nota1Update';
import Nota1Add from './Nota1Add';
import '../crud-style.css'
import userAdd from '../crud-img/add-user.svg'
export default function MesimdhenesiCrud (){
  return (
    <div>
          <NavLink  to="./Nota1">
          <img src ={userAdd} alt="crud-img" className='icons' />      
                  <p>Nota1</p>
          </NavLink>

      <Routes>
         
            <Route path='/Nota1' element={<Nota1 />}/>
            <Route path='/Nota1Update' element={<Nota1Update />}/>
            <Route path='/Nota1Add' element={<Nota1Add />}/>
      </Routes>

    </div>
  )
} 