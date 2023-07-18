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
	const len = posts.length;
	console.log(`lenght is ${len}`);

	return(
		<div className="flex flex-wrap justify-center w-full">
			<div className="w-full">
				{len!==0?
				<div className="flex items-center justify-center space-x-2">
					<h1 className="font-mono text-3xl">Here are the posts..Enjoy your memories :)</h1>
				</div>
				:
				<div className="flex items-center justify-center h-screen space-x-2 animate-bounce">
					<div className="w-8 h-8 bg-blue-400 rounded-full"></div>
					<div className="w-8 h-8 bg-green-400 rounded-full"></div>
					<div className="w-8 h-8 bg-white rounded-full"></div>
				</div>
				}
			</div>
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

