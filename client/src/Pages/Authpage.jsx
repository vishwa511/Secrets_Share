import React, {useState} from "react";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
const Authpage =()=>{

	const [isSignup, setIsSignup] = useState(false);
	const switchMode = () => {
		setIsSignup((prevIsSignup) => !prevIsSignup);
	}

	return(
		<div>
			{isSignup ? 
			<Login onChanging = {switchMode}/> 
			: 
			<Register onChanging = {switchMode}/>
			}
		</div>
	)
}
export default Authpage;