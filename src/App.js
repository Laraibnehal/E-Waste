import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Await } from "react-router-dom";
import LeaderBoard from './pages/LeaderBoard';
// Internal Imports
import routes from "./routes";
import Axios from 'axios'
import { LoginPage } from './pages';
const App = () => {
  return (
    <div className='bg-black '>
    <Navbar/>
 {/* <LoginPage/> */}
 {/* <LeaderBoard/> */}
    <Routes>
        {routes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
      </Routes>
    </div>
  )
}

export default App