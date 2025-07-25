import React from 'react'
import { Routes, Route } from 'react-router-dom'  
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import CaptainSignup from './pages/CaptainSignup'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />         
        <Route path="/login" element={<UserLogin />} /> 

        <Route path="/signup" element={<UserSignup />} />
        <Route path="/" element={<UserLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/home'
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          } />
           <Route path='/user/logout'
          element={<UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
          } />
        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>
        } />
      </Routes>
    </div>
  )
}

export default App
