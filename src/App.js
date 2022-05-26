import logo from './logo.svg';
import './App.css';

import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
 <h3 className="m3 d-flex justify-content-center">
   React Js Project
 </h3>
 <Navigation/>
 <Routes>
   <Route exact path='/' element={<Home/>} />
   <Route exact path='/department' element={<Department/>}/>
   <Route exact path='/employee' element={<Employee/>}/>
 </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
