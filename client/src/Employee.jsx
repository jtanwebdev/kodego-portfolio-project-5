import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Employee() {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3030")
      .then((res) => setEmployee(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3030/delete/" + id)
      .then((res) => window.location.reload())
      .catch((err) => console.log(err));
  };
  return (
    <div className="container mt-5">
      <Link to="/create" className="btn btn-success">
        {" "}
        Add Employee{" "}
      </Link>
      {employee.length !== 0 ? (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Department</th>
              <th scope="col">Start Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.department}</td>
                <td>{employee.date}</td>
                <td>
                  <Link
                    to={"/update/${employee.id}"}
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(employee.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>No Records</h2>
      )}
    </div>
  );
}

export default Employee;
