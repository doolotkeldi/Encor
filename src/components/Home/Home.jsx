import React, { useEffect } from 'react'
import {signOut,signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase'
import FirstSection from '../FirstSection/FirstSection'

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
     
      <FirstSection/>
      home
      {/* <button onClick={clickHandler}>button</button> */}
    </div>
  )
}

export default Home
