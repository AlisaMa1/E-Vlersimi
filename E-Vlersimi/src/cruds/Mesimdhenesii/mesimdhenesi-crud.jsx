import React from 'react'
import {Route ,NavLink, Routes } from 'react-router-dom'
import Mesimdhenesi from './Mesimdhenesi';
import MesimdhenesiUpdate from './MesimdhenesiUpdate';
import MesimdhenesiAdd from './MesimdhenesiUpdate';
import '../crud-style.css'
import userAdd from '../crud-img/add-user.svg'
export default function MesimdhenesiCrud (){
  return (
    <div>
          <NavLink  to="./Mesimdhenesi">
          <img src ={userAdd} alt="crud-img" className='icons' />      
                  <p>Mesimdhenesi</p>
          </NavLink>

      <Routes>
         
            <Route path='/Mesimdhenesi' element={<Mesimdhenesi />}/>
            <Route path='/MesimdhenesiUpdate' element={<MesimdhenesiUpdate />}/>
            <Route path='/MesimdhenesiAdd' element={<MesimdhenesiAdd />}/>
      </Routes>

    </div>
  )
} 