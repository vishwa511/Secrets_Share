import React from "react";
import Nav from "../components/Navcoponents/Nav";
import Posts from "../components/Posts/Posts";
import Form from "../components/Form/Form";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";


const Homepage =() =>{

	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();

	useEffect(() =>{
		dispatch(getPosts());
	}, [dispatch]);



	return(
		<div>
			<Posts currentId = {currentId} setCurrentId = {setCurrentId}/>
			<Form currentId = {currentId} setCurrentId = {setCurrentId}/>
		</div>
	);
}
export default Homepage;