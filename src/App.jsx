import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Genre from './Parts/genre'
import Home from './parts/Home'
import React from 'react'
const App=()=> {

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/genre" element={<Genre/>}/>
        {/* <Route path="/movies" element={<Movies/>}/>
        <Route path='/browse' element={<Browse/>}/> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App