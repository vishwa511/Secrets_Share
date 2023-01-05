import React, {useState, useEffect} from "react";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";


function Form({currentId, setCurrentId}){
	console.log(`this is consling current id at form ${currentId}`)
	const [postData, setPostData] = useState({
		creator: '', title: '', message: '', tags: '', selectedFile: ''})

	const post = useSelector((state) => currentId ? state.posts.find((p)=> p._id === currentId):null);	

	const dispatch = useDispatch();

	useEffect(()=>{
		if(post) setPostData(post);
	}, [post]);

	const clearForm= ()=>{
		setCurrentId(null);
		setPostData({
			creator: '',
			title: '',
			message: '',
			tags: '',
			selectedFile: ''
		  })
	}

	const handleSubmit =(e)=>{
		if(currentId){
			clearForm();
			dispatch(updatePost(currentId, postData));
		}
		else{
			
			dispatch(createPost(postData));
			clearForm();
		}
		
		e.preventDefault();
	}
 
	return( 
		<div className="m-10">
			<h3 className="mt-0 mb-2 text-3xl font-medium leading-tight text-black">{currentId?'Editing':'Creating'} a post ?</h3>
			<form className="w-full max-w-lg">
  <div className="flex flex-wrap mb-6 -mx-3">
    <div className="w-full px-3">
      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"htmlFor="grid-password">
        Creator Name
      </label>
      <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" name="creator" value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})} type="text" placeholder="John Doe"/>
    </div>
  </div>
  <div className="flex flex-wrap mb-6 -mx-3">
    <div className="w-full px-3">
      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-password">
        Title
      </label>
      <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" name="title" value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} type="text" placeholder="Heavy driver"/> 
    </div>
  </div>
  <div className="flex flex-wrap mb-6 -mx-3">
    <div className="w-full px-3">
      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-password">
        Tags
      </label>
      <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" name="creator" value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})} type="text" placeholder="fun,masti,enjoy"/>
    </div>
  </div>
  <div className="flex flex-wrap mb-6 -mx-3">
    <div className="w-full px-3">
      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-password">
        Message
      </label>
      <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" name="message" value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})} type="text" placeholder="He is good boy"/>
    </div>
  </div>
  <div className="">
  <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" htmlFor="grid-password">
        Add Image
      </label>
	<FileBase
		type = "file"
		multiple ={false}
		onDone ={({base64}) => setPostData({...postData, selectedFile: base64})}
	/>
  </div>
  <div className="flex justify-between">
  <div className="flex justify-center my-3 space-x-2">
  <button
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
  onClick={handleSubmit}>Submit</button>
</div>
  <div className="flex justify-center my-3 space-x-2">
  <button
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
  onClick={clearForm}>Clear</button>
</div>
  </div>
</form>
</div>
	)
}

export default Form