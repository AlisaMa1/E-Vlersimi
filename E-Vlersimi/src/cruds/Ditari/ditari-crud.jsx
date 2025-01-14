import React from 'react'
import {Route ,NavLink, Routes } from 'react-router-dom'
import Ditari from './Ditari';
import DitariUpdate from './DitariUpdate';
import DitariAdd from './DitariUpdate';
import '../crud-style.css'
import DitariIcon from '../crud-img/ditari-icon.svg'
export default function DitaruCrud (){
  return (
    <div>
          <NavLink  to="./Ditari">
          <img src ={DitariIcon} alt="crud-img" className='icons' />
                  <p>Ditari</p>
          </NavLink>

      <Routes>
         
            <Route path='/Ditari' element={<Ditari />}/>
            <Route path='/DitariUpdate' element={<DitariUpdate />}/>
            <Route path='/DitariAdd' element={<DitariAdd />}/>
      </Routes>

    </div>
  )
}