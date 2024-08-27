import React, { useState } from 'react'
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Employee_Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
      })
      const [error, setError] =useState();
    
      const navigate = useNavigate();
      axios.defaults.withCredentials = true;  
     
      const handleSubmit = (event) => {
        event.preventDefault();
        axios
          .post("http://localhost:3000/employee/employee_login", values)
          .then((result) => {
            if(result.data.loginStatus){
              localStorage.setItem("valid", true);
              navigate("/employee_detail/"+result.data.id);
            }else{
              setError(result.data.Error)
            }
          
          })
          .catch((err) => console.log(err));
      };

      const handleChange=(e)=>{
        setValues({...values, [e.target.name]: e.target.value })
      }
    
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
    <div className="p-3 rounded w-25 border loginForm">
      <div className="text-danger">
        {error && error}
      </div>
      <h2 className='text-center'>Employee Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Enter Email"
            className="form-control rounded-0"
            onChange={handleChange} 
          
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            className="form-control rounded-0"
          />
        </div>
        <button className="btn btn-success w-100 rounded-0 mb-2">
          Log in
        </button>
        <div className="mb-1">
          <input type="checkbox" name="tick" id="tick" className="me-2" />
          <label htmlFor="password">
            You have agreed to terms and conditions
          </label>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Employee_Login
