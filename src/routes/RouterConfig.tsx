import React from 'react'
import Home from '../pages/Home';
import SetupWallet from '../pages/SetupWallet';
import TryItOut from '../pages/TryItOut';
import GoogleAuth from '../pages/GoogleAuth';
import GoogleAuthSuccess from '../pages/GoogleAuthSuccess'
import GoogleAuthUnSuccess from '../pages/GoogleAuthUnSuccess'
import { 
    Route,
    Routes
 } from 'react-router-dom' 



const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/setup-wallet" element={<SetupWallet/>}/>
      <Route path="/try-it-out" element={<TryItOut/>}/>
      <Route path="/google-auth" element={<GoogleAuth/>}/>
      <Route path="/google-auth-success" element={<GoogleAuthSuccess/>}/>
      <Route path="/google-auth-unsuccess" element={<GoogleAuthUnSuccess/>}/>
    </Routes>
  )
}

export default RouterConfig