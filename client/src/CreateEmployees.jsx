import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateEmployees() {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    department: "",
    date: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3030/create", values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex align-items-center flex-column mt-3">
      <h1>Add Employee Information</h1>
      <form className="w-50" onSubmit={handleSubmit}>
        <div class="mb-3 mt-3">
          <label for="first name" class="form-label">
            First Name:
          </label>
          <input
            type="text"
            class="form-control"
            id="first"
            placeholder="Enter First Name"
            name="first"
            onChange={(e) => setValues({ ...values, first: e.target.value })}
          />
        </div>
        <div class="mb-3">
          <label for="last name" class="form-label">
            Last Name:
          </label>
          <input
            type="text"
            class="form-control"
            id="last"
            placeholder="Enter Last Name"
            name="last"
            onChange={(e) => setValues({ ...values, last: e.target.value })}
          />
        </div>
        <div class="mb-3">
          <label for="department" class="form-label">
            Department:
          </label>
          <input
            type="text"
            class="form-control"
            id="department"
            placeholder="Enter Department"
            name="department"
            onChange={(e) =>
              setValues({ ...values, department: e.target.value })
            }
          />
        </div>
        <div class="mb-3">
          <label for="date" class="form-label">
            Start Date:
          </label>
          <input
            type="date"
            class="form-control"
            id="last name"
            name="date"
            onChange={(e) => setValues({ ...values, date: e.target.value })}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateEmployees;
