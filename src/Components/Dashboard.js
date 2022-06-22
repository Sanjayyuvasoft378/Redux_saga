import React, { useEffect } from "react";
import { GetData } from "../redux/action/LoginAction";
import { useDispatch, useSelector } from "react-redux";
export default function DataGet() {
  const posts = useSelector((state) => state.dashboard);
  console.log("kuch aa rha hai ki nahi",posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetData());
  }, []);
//   function deletepost(id){
//     dispatch(deletePost(id))
//   }
  return (
    <div>
      <button style={{backgroundColor:"green",padding:"7px"} } >AddPost</button>
        <thead>
        <tr>
          <th>PostId</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
        </thead>
        {posts?.posts?.map((item, index) => {
          return (
            <>
            <tbody>
            <tr key={index}>
              <td><p>{item.id}</p></td>
              <td><p>{item.user_id}</p></td>
              <td><p>{item.title}</p></td>
              <td><p>{item.description}</p></td>
             <td> <button style={{backgroundColor:"green",padding:"7px"}} >View</button>&nbsp;
              <button style={{backgroundColor:"yellow",padding:"7px"}} >Edit</button> &nbsp;
              <button style={{backgroundColor:"red",padding:"7px"}} >delete</button>&nbsp;
              </td>
            </tr>
            </tbody>
            </>
          );
        })}
    </div>
  );
}
