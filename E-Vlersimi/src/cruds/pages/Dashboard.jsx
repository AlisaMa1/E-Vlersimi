import React from 'react'; 


import DitariCrud from '../cruds/Ditari/ditari-crud';
import Ditari from '../cruds/Ditari/Ditari';
import DitariAdd from '../cruds/Ditari/DitariAdd';
import DitariUpdate from '../cruds/Ditari/DitariUpdate';
import Nxenesi from '../cruds/Nxenesii/Nxenesi';
import NxenesiAdd from '../cruds/Nxenesii/NxenesiAdd';
import NxenesiCrud from '../cruds/Nxenesii/nxenesi-crud';
import NxenesiUpdate from '../cruds/Nxenesii/NxenesiUpdate';
import Mesimdhenesi from '../cruds/Mesimdhenesii/Mesimdhenesi';
import MesimdhenesiAdd from '../cruds/Mesimdhenesii/MesimdhenesiAdd';
import MesimdhenesiUpdate from '../cruds/Mesimdhenesii/MesimdhenesiUpdate';
import MesimdhenesiCrud from '../cruds/Mesimdhenesii/mesimdhenesi-crud';
import DitariIcon from '../cruds/crud-img/ditari-icon.svg'
import MesimdhenesiIcon from '../cruds/crud-img/mesimdhenesi-icon.svg'
import NxenesiIcon from '../cruds/crud-img/nxenesi-icon.svg'
import Homee from '../cruds/crud-img/Homee.svg'
import Nota1 from '../cruds/Nota1/Nota1';
import Nota1Add from '../cruds/Nota1/Nota1Add';
import Nota1Update from '../cruds/Nota1/Nota1Update';
import Nota1Crud from '../cruds/Nota1/nota1-crud';
import NotaIcon from '../cruds/crud-img/nota-icon.svg';
import Nota2 from '../cruds/Nota2/Nota2';
import Nota2Add from '../cruds/Nota2/Nota2Add';
import Nota2Update from '../cruds/Nota2/Nota2Update';
import Nota3 from '../cruds/Nota3/Nota3';
import Nota3Add from '../cruds/Nota3/Nota3Add';
import Nota3Update from '../cruds/Nota3/Nota3Update';
import Lenda from '../cruds/Lenda/Lenda';
import LendaAddd from '../cruds/Lenda/LendaAddd';
import LendaIcon from '../cruds/crud-img/lenda-icon.svg'
import Prindi from '../cruds/Prindi/Prindi';
import PrindiAdd from '../cruds/Prindi/PrindiAdd';
import PrindiUpdate from '../cruds/Prindi/PrindiUpdate';

import PrindiIcon from '../cruds/crud-img/prindi-icon.svg'
import VleresimiPerfundimtar from '../cruds/VleresimiPerfundimtar/VleresimiPerfundimtar';
import VleresimiPerfundimtarAdd from '../cruds/VleresimiPerfundimtar/VleresimiPerfundimtarAdd';
import VleresimiPerfundimtarUpdate from '../cruds/VleresimiPerfundimtar/VleresimiPerfundimtarUpdate';




import '../pages/dashboard-style.css'
import {BrowserRouter, Route, Switch,NavLink, Routes} from 'react-router-dom';





export default function Dashboard() {
  return (
      <div id="dashboard">
     
     
      <div className ="container">
      

      <div className='navlinks'>
      
          <NavLink  to="/">
                <img src ={Homee} alt="crud-img" className='icons' />
                <p>Exit-HomePage</p>
        </NavLink>
        <NavLink  to="./Ditari">
                <img src ={DitariIcon} alt="crud-img" className='icons' />
                <p>Ditari</p>
        </NavLink>
        <NavLink  to="./Mesimdhenesi">
                <img src ={MesimdhenesiIcon} alt="crud-img" className='icons' />
                <p>Mesimdhenesi</p>
        </NavLink>

        <NavLink  to="./Nxenesi">
                <img src ={NxenesiIcon} alt="crud-img" className='icons' />
                <p>Nxenesi</p>
        </NavLink>

        <NavLink  to="./Nota1">
                <img src ={NotaIcon} alt="crud-img" className='icons' />
                <p>Nota1</p>
        </NavLink>

        <NavLink  to="./Nota2">
                <img src ={NotaIcon} alt="crud-img" className='icons' />
                <p>Nota2</p>
        </NavLink>

        <NavLink  to="./Nota3">
                <img src ={NotaIcon} alt="crud-img" className='icons' />
                <p>Nota3</p>
        </NavLink>

        <NavLink  to="./VleresimiPerfundimtar">
                <img src ={NotaIcon} alt="crud-img" className='icons' />
                <p>VlersimiPerfundimtar</p>
        </NavLink>


        <NavLink  to="./Lenda">
                <img src ={LendaIcon} alt="crud-img" className='icons' />
                <p>Lenda</p>
        </NavLink>

        <NavLink  to="./Prindi">
                <img src ={PrindiIcon} alt="crud-img" className='icons' />
                <p>Prindi</p>
        </NavLink>
        
      </div>



      </div>

      


<Routes>
     <Route path='/Ditari/*' element={<Ditari />}/>
     <Route path='/DitariCrud/*' element={<DitariCrud />}/>
     <Route path='/DitariAdd/*' element={<DitariAdd />}/>
     <Route path='/DitariUpdate/*' element={<DitariUpdate />}/>
     <Route path='/NxenesiCrud/*' element={<NxenesiCrud />}/>
     <Route path='/Nxenesi/*' element={<Nxenesi />}/>
     <Route path='/NxenesiAdd/*' element={<NxenesiAdd />}/>
     <Route path='/NxenesiUpdate/*' element={<NxenesiUpdate />}/>
     <Route path='/Mesimdhenesi/*' element={<Mesimdhenesi/>}/>
     <Route path='/MesimdhenesiAdd/*' element={<MesimdhenesiAdd/>}/>
     <Route path='/MesimdhenesiUpdate/*' element={<MesimdhenesiUpdate/>}/>
     <Route path='/Nota1Crud/*' element={<Nota1Crud />}/>
     <Route path='/Nota1/*' element={<Nota1 />}/>
     <Route path='/Nota1Add/*' element={<Nota1Add />}/>
     <Route path='/Nota1Update/*' element={<Nota1Update />}/>
     <Route path='/Nota2/*' element={<Nota2 />}/>
     <Route path='/Nota2Add/*' element={<Nota2Add />}/>
     <Route path='/Nota2Update/*' element={<Nota2Update />}/>
     <Route path='/Nota3/*' element={<Nota3 />}/>
     <Route path='/Nota3Add/*' element={<Nota3Add />}/>
     <Route path='/Nota3Update/*' element={<Nota3Update />}/>
     <Route path='/Lenda/*' element={<Lenda />}/>
     <Route path='/LendaAddd/*' element={<LendaAddd />}/>
     <Route path='/Prindi/*' element={<Prindi />}/>
     <Route path='/PrindiAdd/*' element={<PrindiAdd />}/>
     <Route path='/PrindiUpdate/*' element={<PrindiUpdate />}/>

     <Route path='/VleresimiPerfundimtar/*' element={<VleresimiPerfundimtar />}/>
     <Route path='/VleresimiPerfundimtarAdd/*' element={<VleresimiPerfundimtarAdd />}/>
     <Route path='/VleresimiPerfundimtarUpdate/*' element={<VleresimiPerfundimtarUpdate />}/>


     
 
      </Routes>
  </div>
  )
}