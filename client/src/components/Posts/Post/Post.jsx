import React from "react";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
import moment from "moment";

function Post(props){
	
	function handleClick(){
		props.onEdit(props.id)
	}

	const dispatch = useDispatch();

	function handleDelete(){
		if(window.confirm(`Do you want to delete Post of ${props.title} posted by ${props.name}`)){
			dispatch(deletePost(props.id))
		}
	}

	return(
	<div className="p-10">  
    <div className="max-w-sm overflow-hidden bg-white rounded shadow-2xl">
	<div className="flex items-center">
          <img className="mr-4 rounded-full w-14 h-14" src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" alt="Avatar of Writer"/>
          <div className="text-md">
            <p className="font-bold leading-none text-gray-900">{props.creator}</p>
            <p className="text-gray-600">{moment(props.createdAt).fromNow()}</p>
          </div>
        </div>
      <img className="w-full" src={props.selectedFile}alt="Mountain"/>
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{props.title}</div>
        <p className="text-base text-gray-700">
          {props.message}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
			{props.tags.map((tag) =><span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"> #{tag}</span>)}       
      </div>
	  <div className="flex justify-between px-6 pt-4 pb-2">
			<button className="">
			<svg onClick={()=>dispatch(likePost(props.id))} className="w-6 h-6 cursor-pointer hover:scale-150 hover:text-red-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
  				<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
			</svg>
			<div>{props.likeCount}</div>
			</button>
			<button className="cursor-pointer hover:scale-150 hover:text-purple-700" onClick={()=>handleDelete()}>
			{/* <button className="cursor-pointer hover:scale-150 hover:text-purple-700" onClick={()=>dispatch(deletePost(props.id))}> */}
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
				</svg>
			</button>
			<button className="cursor-pointer hover:scale-150 hover:text-green-700" onClick={handleClick} > 
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
				</svg>
			</button>

	  </div>
    </div>
  </div>
	)
}
export default Post;