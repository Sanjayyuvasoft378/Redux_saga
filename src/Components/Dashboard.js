import React, { useEffect } from "react";
import { GetData, deletePost, getbyid } from "../redux/action/LoginAction";
import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";

export default function DataGet() {
  const posts = useSelector((state) => state?.user?.dashboard);
  console.log("kuch aa rha hai ki nahi",posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetData());
   },[]);
   const navigater = useNavigate();
  function deletepost(id){
    dispatch(deletePost(id))
  }

  function singlepostbyid(id){
    dispatch(getbyid(id))
    navigater(`/byid/${id}`)

  }
return (
  <div>
    <button style={{backgroundColor:"green",padding:"7px"} } onClick={()=>navigater("/addpost")}>AddPost</button>

    <Table striped bordered hover className="table">
      <thead>
      <tr>
        <th>PostId</th>
        <th>User_Id</th>
        <th>Title</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
      </thead>
      {posts?.posts?.map((item, index) => {
        return (
          <tbody>
          <tr key={index}>
            <td><p>{item.id}</p></td>
            <td><p>{item.user_id}</p></td>
            <td><p>{item.title}</p></td>
            <td><p>{item.description}</p></td>
           <td> <button style={{backgroundColor:"green",padding:"7px"}} onClick={()=>singlepostbyid(item.id)}>View</button>&nbsp;
            <button style={{backgroundColor:"yellow",padding:"7px"}} onClick={()=>navigater(`/updatepost/${item.id}`)}>Edit</button> &nbsp;
            <button style={{backgroundColor:"red",padding:"7px"}} onClick={()=>deletepost(item.id)}>delete</button>&nbsp;
            </td>
          </tr>
          </tbody>
        );
      })}
    </Table>

  </div>
); 
}
