import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import "./style.css"; // Import the CSS file

// Define validation schema with Regex for Mask Pattern
const schema = yup.object().shape({
  firstname: yup.string().required("firstname is required"),
  lastname: yup.string().required("lastname is required"),
  department: yup.string().required("department is required"),
  role: yup.string().required("role is required"),
  Doj: yup.string().required("Date Of joining is required"),
  mgId: yup.string().required("department is required"),
});

const SearchParameterEntry = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      console.log('this is data', data)
      const bodydata = {
        "fName":data.firstname,
        "Lname":data.lastname,
        "role":data.role,
        "DOj":data.Doj,
        "mgId":data.mgId,
        "seniority":99.09,
        "Department":data.department
      }
      await axios.post("http://localhost:3030/api/v1/test/fillData", bodydata);
      alert("Search parameter saved successfully!");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data.");
    }
  };

  return (
    <div className="container">
      <h2>Search Parameters Entry</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>FirstName</label>
          <input {...register("firstname")} placeholder="firstname" />
          <p className="error">{errors.firstname?.message}</p>
        </div>
        <div className="form-group">
          <label>LastName</label>
          <input {...register("lastname")} placeholder="lastname" />
          <p className="error">{errors.lastname?.message}</p>
        </div>
        <div className="form-group">
          <label>Department</label>
          <select {...register("department")}>
            <option value="" disabled>Select a department</option>
            <option value="Accounts">Accounts</option>
            <option value="Development">Development</option>
            <option value="Admin">Admin</option>
            {/* Add more options as necessary */}
          </select>
          <p className="error">{errors.department?.message}</p>
        </div>
        <div className="form-group">
          <label>Role</label>
          <input {...register("role")} placeholder="Role" />
          <p className="error">{errors.role?.message}</p>
        </div>
        <div className="form-group">
          <label>Date Of Joining</label>
          <input {...register("Doj")} placeholder="Date Of Joining" />
          <p className="error">{errors.Doj?.message}</p>
        </div>
        <div className="form-group">
          <label>Manager Id</label>
          <input {...register("mgId")} placeholder="Manager Id" />
          <p className="error">{errors.mgId?.message}</p>
        </div>
        <button type="submit">Save Parameter</button>
      </form>
    </div>
  );
};

export default SearchParameterEntry;
