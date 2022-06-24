import "./App.css";
import Login from "./Components/login";
import DataGet from "./Components/Dashboard";
import { Routes, Route } from "react-router-dom";
import AddPost from "./Components/AddPost";
import { Link } from "react-router-dom";
import UpdatePosts from "./Components/UpdatePost";
import ViewBySingleId from "./Components/ViewById";
import Logout from "./Components/Logout";
function App() {
  const token = localStorage.getItem('token')
  return (
   <>
    <div>
      {token ?
      <>
      <Link to="/home"><strong>Home</strong></Link>&nbsp;&nbsp;
    <Link to="/dashboard"><strong>Dashboard</strong></Link>&nbsp;&nbsp;
    <Link to="/logout"><strong>Logout</strong></Link>&nbsp;&nbsp;

      </>
      :
      <>
    <Link to="/"><strong>login</strong></Link>&nbsp;&nbsp;
    <Link to="/signup"><strong>Signup</strong></Link>&nbsp;&nbsp;
    <Link to="/about"><strong>About Us</strong></Link>&nbsp;&nbsp;
    {/* <Link to="/signup"><strong>Signup</strong></Link>&nbsp;&nbsp; */}

      </>
      }
    </div>
   
    <div className="App">
      <h1>hello saga</h1>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<DataGet />} />
        <Route path='/addpost' element={<AddPost />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/updatepost/:id' element={<UpdatePosts />} />
        <Route path='/byid/:id' element={<ViewBySingleId />} />
      </Routes>
      
      
      
    </div>
    </>
  );
}

export default App;
