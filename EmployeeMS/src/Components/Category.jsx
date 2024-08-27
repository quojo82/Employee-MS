import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { DeleteForever } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';


const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/category")
      .then((result) => {
         if(result.data.Status){
          setCategory(result.data.Result)
         }else{
          alert(result.data.Error)
         }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/auth/delete_category/" + id)
      .then((result) => {
        if (result.data.Status) {
         window.location.reload()
        } else {
          console.log(result.data.Error);
        }
      });
  };


  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Category List</h3>
      </div>
      <Link to="/dashboard/add_category" className="btn btn-success">
     <AddIcon/> Add Category
      </Link>
      <div className='mt-3'>
        <table className="table" style={{width:'70%'}}>
          <thead>
            <tr>
              <th>Name</th>
              
            </tr>
          </thead>

          <tbody>
            {category.map((c) => (
              <tr>
                <td>{c.name}</td>
                <td>
                  
                  <button
                 
                className="btn btn-danger btn-sm"
               
                     onClick={() => handleDelete(c.id)} 
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

export default Category;
