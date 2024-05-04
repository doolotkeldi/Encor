import React from 'react'
import { Outlet } from 'react-router-dom'

function Auth() {
  return (
    <div style={{ height:"100vh",width:"100%"}}>
    {/* background:"linear-gradient(56deg, red, green, blue)", */}
    <Outlet/>
    
      
    </div>
  )
}


export default Auth

