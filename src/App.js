// rafce is use to get the boilerplate of react js

import React from 'react'
// import {Switch,Route,Link} from 'react-router-dom';
import { Routes,Route,Link } from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';
import  Navbarr1  from './components/navbarr';
import  Homepage  from './components/Homepage';
import  Cryptocurrencies  from './components/Cryptocurrencies';
import  Cryptodetails  from './components/Cryptodetails';
import  Exchanges  from './components/Exchanges';
import  News  from './components/News';
import { useState } from 'react';
import "./app.css"

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbarr1></Navbarr1>
      </div>

      <div className='main'>
      <Layout> 
      <div className='routes'> 
        <Routes>

          {/* Routes is use for routing between the multiple page */}
          {/* inside the main the data is change therefore we add the routes  */}
          {/* inside the routes we should add route with that component(that component only should add which you want to switch between them i.e home and setting ka bhich switch chiye toh tab route ke saath home and switch component add karo) */}

          <Route  path='' element={ <Homepage/>}>
            {/* during loading first it route the component with path="/" */}
          </Route>

          <Route  path='/exchange' element={<Exchanges/>}>
          </Route>
          
          <Route  path='/cryptocurrencies' element={<Cryptocurrencies/>}>
          </Route>

          <Route  path='/crypto/:uuid' element={<Cryptodetails/>}>
          </Route>

          <Route  path='/news' element={<News/>}>
          </Route>
          
        </Routes>
        {/* inside the routes we add those components or html page,in between which you want to switch*/}
    </div>
    </Layout>
      </div>
      {/* <div className='footer'></div> */}
    </div>
  )
}

export default App