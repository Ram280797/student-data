import React, { useState } from "react";
import "./AddUser.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { DatePicker } from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import { format } from 'date-fns';



function AddUser() {
  // const [startDate, setStartDate] = useState(new Date());
const date=format(new Date(),"dd/mm/yyyy");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      location:"",
      email: "",
      dob: "",
      education: "",
    },
    // validate: (values) =>{
    //   const errors = {};
    //   let age = new Date().getFullYear() - parseInt(values.dob.split("_")[0]);
    //   if (age < 18) {
    //     errors.dob = "You must be above 18";
    //   }
    //   return errors;
    // },
    onSubmit: async (values) => {
      try {
        const userdata = await axios.post(
          "http://localhost:3001/create",
          values
        );
        alert("Success");
      } catch (error) {
        alert(error);
      }
    },
  });

  return (
    <>
      <Link to={"/student_management"}>
        <FontAwesomeIcon icon={faArrowLeft} color="black" className="icons" />
      </Link>
      <div className="container">
        <p className="title">Add Student Details</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <div className="row">
              <div className="col-lg-12">
                <label className="labels">
                  <span>First Name : </span>
                </label>
                <input
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  type={"text"}
                  placeholder="Enter your first name"
                  className="list-form"
                 
                />
                <label className="labels">
                  <span>Last Name :</span>
                </label>
                <input
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  type={"text"}
                  className="list-form"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="col-lg-12">
                <label className="labels">
                  <span>Email : </span>
                </label>
                <input
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  type={"email"}
                  className="list-form"
                  placeholder="Enter your email "
                />
                <label className="labels">
                  <span>DOB :</span>
                </label>
                {/* <DatePicker
                  showIcon
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                /> */}
                <input
                  name="dob"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dob}
                  type={"date"}
                  id="datepicker"
                  className="list-form"
                  placeholder="dd/mm/yyyy "
                  display="date"
                  format="dd/mm/yyyy"
                />
              </div>

              <div className="col-lg-12">
                <label className="labels">
                  <span>Education :</span>
                </label>
                <input
                  name="education"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.education}
                  type={"text"}
                  className="list-form"
                  placeholder="Enter your education"
                />
                <label className="labels">
                  <span>Location :</span>
                </label>
                <select
                  name="location"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.location}
                  type={"text"}
                  className="list-form"
                  placeholder="Enter your location"
                >
                  <option value="">Select your location</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Salem">Salem</option>
                  <option value="Madurai">Madurai</option>
                  <option value="Coimbature">Coimbature</option>
                  <option value="Trichy">Trichy</option>

                </select>
              </div>
              <div className="col-lg-12">
                <label className="abouts">
                  <span>About :</span>
                </label>
                <input
                  type="text"
                  className="about"
                  id="inputs"
                  rows="4"
                  cols="50"
                  placeholder="Enter your details"
                />
              </div>
              <div className="col-lg-12">
                <div className="list-form2">
                  <input type={"Submit"} className="btn btn-dark" />
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* <button type="button" className="btn btn-dark">Submit</button> */}
      </div>
    </>
  );
}

export default AddUser;
