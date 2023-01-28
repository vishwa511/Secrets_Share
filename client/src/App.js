import React, {useEffect, useState} from 'react'
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts'
import Nav from './components/Navcoponents/Nav'

// import memories from './images/memories.jpg'

const App = () =>{
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();

	useEffect(() =>{
		dispatch(getPosts());
	}, [dispatch]);

	return(
		<div>
			<Nav/>
		<div className='flex flex-wrap justify-between'>
			<Posts currentId = {currentId} setCurrentId = {setCurrentId}/>
		</div>
			<div className='w-full align-center'>
			<Form currentId = {currentId} setCurrentId = {setCurrentId}
				// title="Add secret"
				section="/#Add"
			/>
			</div>
		</div>
	);
}

export default  App;