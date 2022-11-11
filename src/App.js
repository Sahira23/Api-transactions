import { Routes, Route, Link } from "react-router-dom";
import Get from "./components/Get";
import Post from "./components/Post";
import Update from "./components/Update";
import Delete from "./components/Delete";
import "./App.css"



export default function App() {
  return (
    <div className="main">
      <h1 className="text-center head">Algoritmika API transactions</h1>
      <div className="w-100 d-flex justify-content-center">
        <nav className="nav  w-50 mt-3">
          <ul className="w-100 h-100 d-flex justify-content-around align-items-center px-3 py-2">
            <li>
              <button type="button" className="btn-success btn"><Link to="/" className="link">Get</Link></button>
            </li>
            <li>
            <button type="button" className="btn-info btn"><Link to="/post" className="link">Post</Link></button>
            </li>
            <li>
            <button type="button" className="btn-primary btn"><Link to="/update" className="link">Update</Link></button>
            </li>
            <li>
            <button type="button" className="btn-danger btn"><Link to="/delete" className="link">Delete</Link></button>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Get />} >
        </Route>
        <Route path="/post" element={<Post />} >
        </Route>
        <Route path="/update" element={<Update />} >
        </Route>
        <Route path="/delete" element={<Delete />} >
        </Route>
      </Routes>
    </div>
  )
}