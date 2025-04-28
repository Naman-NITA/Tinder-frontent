import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';



const Login = () => {
  const [emailId, setEmailId] = useState("nishant@1234gmail.com");
  const [password, setPassword] = useState("Naman@123"); 

  const [error , seterror] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = async() => {


        
     try {

      const res =  await axios.post( BASE_URL + "/login" , {
      emailId,
      password,
     },{withCredentials:true});
      
    //  console.log(res.data);

     dispatch(addUser(res.data));
    return   navigate("/")
      
     } catch (error) {
      seterror(error?.response?.data || "Something went wrong");
       
     }

     

  };

  return (
    <div className='flex justify-center my-10'>
      <div className="card card-border bg-base-300 w-96 p-4">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <label className='form-control w-full max-w-xs py-4'>
              <div className='label'>
                <span className='label-text py-2'>Email Id:</span>
              </div>
              <input
                type='text'
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                className='input input-bordered w-full max-w-xs p-2'
              />
            </label>

            <label className='form-control w-full max-w-xs py-4'>
              <div className='label'>
                <span className='label-text py-2'>Password:</span>
              </div>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='input input-bordered w-full max-w-xs p-2'
              />

            </label>
          </div>
           <p className='text-red-500'>{error}</p>
          <div className="card-actions justify-center py-2 m-2">
            <button className="btn btn-primary" onClick={  handleLogin}>

              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
