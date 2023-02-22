import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Link, Outlet} from "react-router-dom"

export default function Home(){
    return(
        <center>
            <Header></Header>
            <Navbar></Navbar>
            <Link to={'/'}>List student</Link> |
            <Link to={'/create-student'}>Create student</Link>
            <hr/>
            <Outlet></Outlet>
            <Footer></Footer>
        </center>
    );
}