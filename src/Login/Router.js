import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Form from './Form';

const Router = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                {/* <Route path='/' element={<Router/>}></Route> */}
                <Route path='/' element={<Login/>}></Route>
                <Route path='/Form' element={<Form/>}></Route>
                <Route path='/Home' element={<Home/>}></Route>     
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router
