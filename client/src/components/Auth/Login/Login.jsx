import React from "react";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';


function Login(props){

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const googleSuccess = async(res) =>{
	const result = res;
	const token  = res?.jti;
		
		console.log(result);
		console.log(token);
		
		try {
			dispatch({type: 'AUTH', data: {result, token}})
			navigate('/');
		} catch (error) {
			console.log(error);
		}				
	}

	return(
		<div>

<section className="">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <Link className="flex items-center mb-6 text-2xl font-semibold text-white" to="/">
          <img className="w-20 h-10 mr-2" src="https://logos-world.net/wp-content/uploads/2020/05/Stranger-Things-Logo.png" alt="logo"/>
          Secrets!!  
      </Link>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>

				  <GoogleOAuthProvider clientId="938565639590-rl20oaugdsipvf4vl5avnecughhf6bm9.apps.googleusercontent.com">
				  <GoogleLogin
						onSuccess={credentialResponse => {
							// console.log(credentialResponse);
							const details = jwt_decode(credentialResponse.credential);

							googleSuccess(details);
							
						}}
						onError={() => {
							console.log('Login Failed');
						}}
						/>
					</GoogleOAuthProvider>

					{/* <button type="button" class="w-full justify-center text-white bg-[#e22d2dd3] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
					<svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
					Sign in with Google
					</button> */}

                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don't have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick ={props.onChanging}>Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>

		</div>
	)
}

export default Login;