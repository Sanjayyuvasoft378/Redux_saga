import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetLogin } from '../redux/action/LoginAction';

export default function Login() {
    console.log("LoginComponent");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit,formState: { errors } } = useForm();

    const onSubmit = data => {
        dispatch(GetLogin(data))
        console.log("data check kro",data);
        navigate('/dashboard')
    }

  return (
   <div>
    <form onSubmit={handleSubmit(onSubmit)}>
    <label><b>email</b></label><br /><br />
    <input type="email" {...register("email",{ required:true } )} placeholder="Enter Username"  />

    <br />
    <label><b>Password</b></label><br /><br />
    <input type="password" {...register("password",{ required:true } )} placeholder="Enter Password"/>
    <br />
    <input type="submit"/>
    {/* <button>Login</button> */}
    

  
</form>
</div>
    
  )
}
