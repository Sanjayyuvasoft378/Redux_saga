import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { GetLogin } from '../redux/action/LoginAction';

export default function Login() {
    console.log("LoginComponent");
    const dispatch = useDispatch();
    const { register, handleSubmit,formState: { errors } } = useForm();

    const onSubmit = data => {
        dispatch(GetLogin(data))
        console.log("data check kro",data);
    }

  return (
   <div>
    <form onSubmit={handleSubmit(onSubmit)}>
    <label><b>email</b></label>
    <input type="email" {...register("email",{ required:true } )} placeholder="Enter Username"  />
    <br />
    <label><b>Password</b></label>
    <input type="password" {...register("password",{ required:true } )} placeholder="Enter Password"/>
    <br />
    <input type="submit"/>
    {/* <button>Login</button> */}
    

  
</form>
</div>
    
  )
}
