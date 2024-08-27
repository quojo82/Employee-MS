import "./App.css";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Category from "./Components/Category";
import Employee from "./Components/Employee";
import Profile from "./Components/Profile";
import Add_Category from "./Components/Add_Category";
import Add_Employee from "./Components/Add_Employee";
import Edit_Employee from "./Components/Edit_Employee";
import Employee_Login from "./Components/Employee_Login";
import Employee_Detail from "./Components/Employee_Detail";
import "bootstrap/dist/css/bootstrap.min.css";
import Start from "./Components/Start";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
    <ToastContainer position='top-center'/>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/adminlogin" element={<Login />}></Route>
        <Route path="/employee_login" element={<Employee_Login />}></Route>
        <Route
          path="/employee_detail/:id"
          element={<Employee_Detail />}
        ></Route>
        
        
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="" element={<Home />}></Route>
          <Route path="/dashboard/employee" element={<Employee />}></Route>
          <Route path="/dashboard/category" element={<Category />}></Route>
          <Route path="/dashboard/profile" element={<Profile />}></Route>
          <Route
            path="/dashboard/add_category"
            element={<Add_Category />}
          ></Route>

          {/* Dashboard children ends here */}
          <Route
            path="/dashboard/add_employee"
            element={<Add_Employee />}
          ></Route>
          <Route
            path="/dashboard/edit_employee/:id"
            element={<Edit_Employee />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
