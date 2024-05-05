import React, { useEffect } from "react";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import EnCarRus from "../enCarRus/EnCarRus";

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
			<EnCarRus />
		</div>
	);
}

export default Home;
