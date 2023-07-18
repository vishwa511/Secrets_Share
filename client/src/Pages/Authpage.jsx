import React, {useState, useEffect} from "react";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import { Navigate } from "react-router-dom";

const Authpage =()=>{
	const [isSignup, setIsSignup] = useState(false);
	const [authenticated, setauthenticated] = useState(null);
	const switchMode = () => {
		setIsSignup((prevIsSignup) => !prevIsSignup);
	}
	useEffect(() => {
		const loggedInUser = localStorage.getItem("profile");
		if (loggedInUser) {
		  setauthenticated(loggedInUser);
		}
	  }, []);
	
	  if (authenticated) {
			return <Navigate replace to="/" />;
		} else {
	
	return(
		<div>
			{isSignup ? 
			<Register onChanging = {switchMode}/>
			: 
			<Login onChanging = {switchMode}/> 
			}
		</div>
	)
	}
}
export default Authpage;