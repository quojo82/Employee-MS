import { React } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DeleteForever } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import {toast} from 'react-toastify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Employee = () =>
 {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/employee")
      .then((result) => {
        if (result.data.Status) {
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  //const navigate = useNavigate();

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/auth/delete_employee/" + id)
      .then((result) => {
        if (result.data.Status) {
          window.location.reload()
          setTimeout(()=>toast.success("Employee Deleted Successfully"))
         
        
        } else {
          alert(result.data.Error);
          
        }
      });
      
  };



  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
      <ToastContainer position='top-right'/>
        <h3>Employee List</h3>
      </div>
      <Link to="/dashboard/add_employee" className="btn btn-success">
      <AddIcon/>Add Employee
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>
            {employee.map((e) => (
              <tr>
                <td>{e.name}</td>
                <td>
                  <img
                    src={`http://localhost:3000/Images/` + e.image}
                    className="employee_image"
                    alt=""
                  />
                </td>
                <td>{e.email}</td>
                <td>{e.address}</td>
                <td>{e.salary}</td>
                <td>
                  <Link
                    to={`/dashboard/edit_employee/` + e.id}
                    className="btn btn-warning btn-sm me-2"
                  >
                    <EditIcon/>
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(e.id)}
                  >
                   <DeleteForever/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
