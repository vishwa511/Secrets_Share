import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../model/user.js';

export const signIn = async(req, res) =>{
	const {email, password} = req.body;
	console.log({email, password});
	
	try{
		const existingUser = await User.findOne({ email });
		if(!existingUser) return res.status(404).json({message: "User doesn't exist."})
		const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
		if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials"})
		const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: "1h"})


		console.log("its ok")
		res.status(200).json({result: existingUser, token});
	}
	catch(error){
			console.log(error);
	}
}

export const signUp = async(req, res) =>{

	const {email, password, firstName, lastName, confirmPassword} = req.body;
	// const data = req.body;
	console.log({email, password, firstName, lastName, confirmPassword});
	// console.log(data);

	try{
		console.log("yeha paucha");
		const existingUser = await User.findOne({ email });
		if(existingUser) return res.status(400).json({message: "User already exist."})
		console.log(existingUser) 
		if(password !== confirmPassword) return res.status(400).json({message: "Password doesn't match with confirm pass :("});

		const hashedPassword = await bcrypt.hash(password, 12);

		const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`});

		const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn: "1h"});

		res.status(200).json({result, token});
	}
	catch(error){
		res.status(500).json(error); 
		console.log("teir mkc bkl");
	}

}