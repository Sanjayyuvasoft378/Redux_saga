import React from "react";
import { useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
export default function ViewBySingleId() {
  const posts = useSelector((state) => state.user.dashboard);
  console.log("gdsdghdfj", posts);
const navigate = useNavigate();
  return (
    <>
    <div className="App">
      <Table striped bordered hover className="table">
        <thead>
        <tr>
          <th>PostId</th>
          <th>User_Id</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
        </thead>
            <tbody>
            <tr>
              <td><p>{posts.post?.id}</p></td>
              <td><p>{posts.post?.user_id}</p></td>
              <td><p>{posts.post?.title}</p></td>
              <td><p>{posts.post?.description}</p></td>
            </tr>
            </tbody>
            <button style={{backgroundColor:"green",padding:"7px"} } onClick={() => navigate(-1)}>Back</button> 
      </Table>
    </div>
    </>
  );
}

