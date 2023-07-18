import { AUTH } from '../constants/actionTypes';
import * as  api from '../api';


export const signin = (formData) => async(dispatch) =>{
	try{
		const { data } = await api.signIn(formData);
		console.log(data);
		dispatch({type: AUTH, data });
		// history.push('/');
		window.alert("successfully signed in");
		window.location.reload(true);
		console.log("yeha ka print pehle hona chaie")
	}
	catch(error){		
		console.log("lode ka error");
		window.alert("Please try again")
		console.log(error);
	}
}

export const signup = (formData) => async(dispatch) =>{
	try{
		//signup the user
		//navigate to homepage
		const { data } = await api.signUp(formData);
		console.log(data);
		dispatch({type: AUTH, data });
		window.alert("successfully registered");
		window.location.reload(true);
	}
	catch(error){
		console.log("bkc ka error a arha h");
		window.alert("Please try again")
		console.log(error);
	}
}
