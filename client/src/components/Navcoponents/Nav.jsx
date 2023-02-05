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
					value="Login"
				/>			
				<Button 
					value="Register"
				/>			
			</div>

		</div>
		</div>
	)
}
export default Nav;