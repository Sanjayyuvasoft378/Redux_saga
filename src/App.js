import "./App.css";
import Login from "./Components/login";
import DataGet from "./Components/Dashboard";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>hello saga</h1>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/dataget' element={<DataGet />} />
      </Routes>
      
      
      
    </div>
  );
}

export default App;
