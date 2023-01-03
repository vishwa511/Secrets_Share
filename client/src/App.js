import React, {useEffect, useState} from 'react'
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts'

// import memories from './images/memories.jpg'

const App = () =>{
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();

	useEffect(() =>{
		dispatch(getPosts());
	}, [dispatch]);

	return(
		<div>
			<h1 className='w-full p-4 text-3xl text-center bg-red-300'>After all its our memories!!</h1>
			{/* <img className='mx-10 align-middle h-80 w-80' src = {memories} alt='memories'/> */}
		<div className='flex justify-between'>
			<Posts currentId = {currentId} setCurrentId = {setCurrentId}/>
			<Form currentId = {currentId} setCurrentId = {setCurrentId}/>
		</div>
		</div>
	);
}

export default  App;