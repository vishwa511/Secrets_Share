import React, { useState, useEffect} from "react";
import Button from "./Button";
import {Link} from "react-router-dom";
import './nav.css'
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';

function Nav(){

	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

	console.log(user);

	useEffect(() =>{
		const token = user?.token;
		
		//JWT

		setUser(JSON.parse(localStorage.getItem('profile')));
	}, [location]);

	const logout = () =>{
		dispatch({type: 'LOGOUT'});
		navigate('/');
		setUser(null);
		window.location.reload(true);
	}


	return(
		<div>
			
				
<nav className="bordersss border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <Link className="flex"	to="/" exact>
      <img className="w-10" src="https://logos-world.net/wp-content/uploads/2020/05/Stranger-Things-Logo.png" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Secrets!!</span>
  </Link>
  <div class="flex items-center md:order-2">
{console.log(user)}
	{user ? (
		<div className="flex">
			<div>Welcome Back!!
			<div className="flex">
			<img className="w-8 h-8 bg-red-900 rounded-full" src={user.result.picture} alt="user photo" />
			<h1>{user.result.name}</h1>
			</div>
			</div>
			<Button value="Logout"
				clicked = {logout}
			/>
			
		</div>
	) : (
		<div className="flex">
			<Link
				// className="navbar-item"
				// activeClassName="is-active"
				to="/auth"
				exact>
				<Button component = {Link} to="/auth" value="Login"/>
			</Link>
			<Link
				// className="navbar-item"
				// activeClassName="is-active"
				to="/"
				exact>
				<Button component = {Link} to="/" value="Home"/>
			</Link>
		</div>
	)}
      


  </div>
  {/* <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div> */}
  </div>
</nav>


		</div>
	)
}
export default Nav;