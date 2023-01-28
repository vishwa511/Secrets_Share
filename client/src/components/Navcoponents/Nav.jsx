import React from "react";
import Button from "./Button";

function Nav(){
	return(
		<div>
			<div className='w-full p-4 text-center text-white bg-gray-600'>
			<h1 className='text-3xl'>After all, its our memories!!</h1>
			{/* <img className='mx-10 align-middle h-80 w-80' src = {memories} alt='memories'/> */}
			<div class="flex spac-x-2 justify-center">
				<Button
					title = "Adding secret"
					section = "#/Form"
				/>
			{/* <div>
				<button type="button" class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add a Post</button>
			</div> */}
			
			</div>

		</div>
		</div>
	)
}
export default Nav;