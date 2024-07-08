import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Login';
import Dashbord from './dashbord';
import Addproject from './Addproject';
import Projectlist from './Projectlist';
import Projectstart from './Projectstart';
import Projectclose from './Projectclose';
import Projectcancel from './Projectcancel';
ReactDOM.render(<>
<Router>
  <Routes>
    <Route path='/' element={<Login/>}></Route>
      <Route path='/dashbord' element={<Dashbord/>}></Route>
      <Route path='/addproject' element={<Addproject/>}></Route>
      <Route path='/projectlist' element={<Projectlist/>}></Route>
      <Route path='/projectstart/:id' element={<Projectstart/>}></Route>
      <Route path='/projectclose/:id' element={<Projectclose/>}></Route>
      <Route path='/projectcancel/:id' element={<Projectcancel/>}></Route>
  </Routes>
</Router>
</>,document.getElementById('root'));