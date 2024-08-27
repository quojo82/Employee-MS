import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Add_Category = () => {
  const [category, setCategory] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/add_category", { category })
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/category");
          alert("Category Added")
        } else {
          console.log(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-75">
      <div className="p-3 rounded w-25 border">
        <h5>Add Category</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              name="category"
              placeholder="Enter category"
              className="form-control rounded-0"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <button className="btn btn-success w-100 rounded-0 mb-2">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add_Category;
