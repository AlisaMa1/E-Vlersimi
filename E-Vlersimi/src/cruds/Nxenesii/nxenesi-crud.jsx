import React from 'react'
import {Route ,NavLink, Routes } from 'react-router-dom'
import Nxenesi from './Nxenesi';
import NxenesiUpdate from './NxenesiUpdate';
import NxenesiAdd from './NxenesiUpdate';
import '../crud-style.css'
import userAdd from '../crud-img/add-user.svg'

export default function NxenesiCrud (){
  return (
    <div>
          <NavLink  to="./Nxenesi">
          <img src ={userAdd} alt="crud-img" className='icons' />    
                  <p>Nxenesi</p>
          </NavLink>

      <Routes>
         
            <Route path='/Nxenesi' element={<Nxenesi />}/>
            <Route path='/NxenesiUpdate' element={<NxenesiUpdate />}/>
            <Route path='/NxenesiAdd' element={<NxenesiAdd />}/>
      </Routes>

    </div>
  )
}