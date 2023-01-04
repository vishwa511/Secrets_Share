import React from "react";
import { useSelector } from "react-redux";

import Post from './Post/Post';

function Posts({setCurrentId, currentId}){
	const posts = useSelector((state) => state.posts);
	console.log(posts);
	function cis(id){
		setCurrentId(id);
		console.log(currentId);
	}

	return(
		<div className="flex flex-wrap">
			{posts.map((e)=>{
				return (
				<Post key={e._id} id={e._id} likeCount={e.likeCount} selectedFile={e.selectedFile} title={e.title} message={e.message} createdAt = {e.createdAt} creator = {e.creator} tags = {e.tags} onEdit={cis}/>
			);
		})
			}			
		</div>
	);
};

export default Posts;

