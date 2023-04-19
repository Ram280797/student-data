import React from "react";
import "./AddUser.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function AddUser() {
  return (
    <>
      <Link to={"/student_management"}>
        <FontAwesomeIcon icon={faArrowLeft} color="black" className="icons" />
      </Link>
      <div className="container">
        <p className="title">Edit Student Details</p>
       <div className="form-group">
        <div className="row">
          <div className="col-lg-12">
            <label className="labels"><span>First Name : </span></label>
            <input type="text" className="list-form" placeholder="Enter your first name">
            </input>
            <label className="labels"><span>Last Name :</span></label>
            <input type="text" className="list-form"  placeholder="Enter your last name"></input>
          </div>
          <div className="col-lg-12">
            <label className="labels"><span>Email : </span></label>
            <input type="email" className="list-form" placeholder="Enter your email "></input>
            <label className="labels"><span>DOB :</span></label>
            <input type="date" className="list-form" name="dob" 
        
          ></input>
          </div>
       
          <div className="col-lg-12">
            <label className="labels"><span>Education :</span></label>
            <input type="text"  className="list-form" placeholder="Enter your education" ></input>
            <label className="labels"><span>Location :</span></label>
            <input type="text" className="list-form"   placeholder="Enter your location"></input>
         </div>
          <div className="col-lg-12">
          <label className="abouts"><span>About :</span></label>
          <input type="text" className="about" id="inputs" rows="4" cols="50" placeholder="Enter your details">
          </input>
          </div>
          <div className="col-lg-12">
            <div className="list-form2">
            <button type="button" className="btn btn-dark">Update</button>
          </div>
          </div>
        </div>
       </div>
   
      </div>
    </>
  );
}

export default AddUser;
