import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEmployees = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    department: "",
    date: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3030/update/" + id, values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("http://localhost:3030/getrecord/" + id)
      .then((res) =>
        setValues({
          ...values,
          firstName: res.data[0].firstName,
          lastName: res.data[0].lastName,
          department: res.data[0].department,
          date: res.data[0].date,
        })
      )
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex align-items-center flex-column mt-3">
      <h1>Update Employee Information</h1>
      <form className="w-50" onSubmit={handleSubmit}>
        <div class="mb-3 mt-3">
          <label for="first name" class="form-label">
            First Name:
          </label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="Enter First Name"
            name="firstName"
            value={values.firstName}
            onChange={(e) =>
              setValues({ ...values, firstName: e.target.value })
            }
          />
        </div>
        <div class="mb-3">
          <label for="last name" class="form-label">
            Last Name:
          </label>
          <input
            type="text"
            class="form-control"
            value={values.lastName}
            id="lastName"
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
            value={values.department}
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
            id="date"
            name="date"
            value={values.date}
            onChange={(e) => setValues({ ...values, date: e.target.value })}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployees;
