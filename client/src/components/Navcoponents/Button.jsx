import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Button(props){
	return(
		<div className="p-4">
			{/* <Link to={section}> */}
			<div>
				<button type="button" class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick = {props.clicked}>{props.value}</button>
			</div>
			{/* </Link> */}
		</div>
	)
}
export default Button;