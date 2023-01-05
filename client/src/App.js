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
		<div className='w-full p-4 text-center text-white bg-gray-600'>
			<h1 className='text-3xl'>After all, its our memories!!</h1>
			{/* <img className='mx-10 align-middle h-80 w-80' src = {memories} alt='memories'/> */}
			<div class="flex spac-x-2 justify-center">
			<div>
				<button type="button" class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add a Post</button>
			</div>
			</div>

		</div>
		<div className='flex flex-wrap justify-between'>
			<Posts currentId = {currentId} setCurrentId = {setCurrentId}/>
		</div>
			<div className='w-full align-center'>
			<Form currentId = {currentId} setCurrentId = {setCurrentId}/>
			</div>
		</div>
	);
}

export default  App;