import React, { useEffect } from 'react'
import {signOut,signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase'
// import Footer from '../Footer/Footer'

function Home() {
  // useEffect(()=>{
  //   signInWithEmailAndPassword(auth,(user)=>{
      
  //   })
    
  // },[])

  function clickHandler () {
    signOut(auth)
  }
  return (
    <div>
        {/* <Footer/> */}
      {/* <button onClick={clickHandler}>button</button> */}
    </div>
  )
}

export default Home
