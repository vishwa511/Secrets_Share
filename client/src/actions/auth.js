import { AUTH } from '../constants/actionTypes';
import * as  api from '../api';

export const signin = (formData) => async(dispatch) =>{

	try{
		const { data } = await api.signIn(formData);
		console.log(data);
		dispatch({type: AUTH, data });
	}
	catch(error){		
		console.log("lode ka error");
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
		// navigate('/')
	}
	catch(error){
		console.log("bkc ka error a arha h");
		console.log(error);
	}
}
