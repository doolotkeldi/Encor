import React, { useEffect } from "react";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Carsection from "../Carsection/Carsection";

function Home() {
	// useEffect(()=>{
	//   signInWithEmailAndPassword(auth,(user)=>{

	//   })

	// },[])

	function clickHandler() {
		signOut(auth);
	}
	return (
		<div>
			{/* home */}
			{/* <button onClick={clickHandler}>button</button> */}
			<Carsection />
		</div>
	);
}

export default Home;
