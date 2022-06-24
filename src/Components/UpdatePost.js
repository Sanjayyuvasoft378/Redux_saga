import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UpdatePost } from "../redux/action/LoginAction";
export default function UpdatePosts() {                              
  const { register, handleSubmit } = useForm();
  const navigater = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();
  console.log("useparams ",id);
  const onSubmit = (data) => {
    console.log("data not available",id,data);
    dispatch(UpdatePost(id,data));
    console.log("data not availableeeee",id,data);
    navigater(`/dashboard`)
  };

  return (
    <div>
      <h1>Create Your Post Here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Title</label>&nbsp;&nbsp;&nbsp;
        <input {...register("title", { required: "enter a title" })} />
        <br />
        <br />
        <label htmlFor="">Description</label>&nbsp;
        <input
          {...register("description", { required: "please enter description" })}
        />
        <br />
        <br />
        <button style={{backgroundColor:"green",padding:"7px"}} type='submit'>UpdatePost</button>&nbsp;&nbsp;&nbsp;
        <button style={{backgroundColor:"yellow",padding:"7px"}} onClick={() => navigater(-1)}>show post</button>
      </form>
      
    </div>
  );
}
