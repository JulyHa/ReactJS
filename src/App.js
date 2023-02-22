import './App.css';
import Demo from "./Demo";
import FComponent from "./FComponent";
import Home from "./pages/Home";
import {Outlet, Routes, Route} from "react-router-dom"
import Admin from "./pages/Admin";
import ListStudent from "./pages/students/ListStudent";
import CreateStudent from "./pages/students/CreateStudent";
import EditStudent from "./pages/students/EditStudent";

function App() {
  return (
   <>
      {/*Bài 1: <FComponent></FComponent>*/}
      {/*Bài 2: <Demo></Demo>*/}
      {/*Bài 3: */}
      <Routes>
          <Route path={'/'} element={<Home/>}>
              <Route path={'/'} element={<ListStudent/>}/>
              <Route path={'/create-student'} element={<CreateStudent/>}/>
              <Route path={'/edit-student/:id'} element={<EditStudent/>}/>
          </Route>
            <Route path={'/home'} element={<Home/>}/>
            <Route path={'/admin'} element={<Admin/>}/>
      </Routes>
   </>
  );
}

export default App;
