import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddPost } from "../redux/action/LoginAction";
export default function AddPosts() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigater = useNavigate();

  const onSubmit = (data) => {
    dispatch(AddPost(data));
    navigater(`/dashboard`)
};
  return (
    <div>
      <h1>Create Your Post Here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Title</label><br />&nbsp;&nbsp;&nbsp;
        <input {...register("title", { required: "enter a title" })} /><br />
        <br />
        <label htmlFor="">Description</label><br />&nbsp;
        <input
          {...register("description", { required: "please enter description" })}
        />
        <br /><br />
        <button style={{backgroundColor:"green",padding:"7px"}} onClick={AddPosts}>AddPost</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>navigater("/dashboard")} style={{backgroundColor:"yellow",padding:"7px"}}>show post</button>
      </form>
    </div>
  );
}
