import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Turf_Details from "./components/Turf Details/Turf_Details";
import Login from "./components/Login/Login";
import Navbar from "./components/Home/Header/Navbar/Navbar";
import Book1 from "./components/Book1/Book1";
import Book2 from "./components/Book2/Book2";
import Book3 from "./components/Book3/Book3";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turf_details" element={<Turf_Details />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/book"element={</>}></Route> */}
        <Route path="/book1" element={<Book1/>}/>
        <Route path="/book2" element={<Book2/>}/>
        <Route path="/book3" element={<Book3/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
