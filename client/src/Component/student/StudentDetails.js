import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faTrashCan ,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import "./student.css";


function StudentDetails() {
  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(false);
  

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    try {
      setLoading(true);
      const users = await axios.get("http://localhost:3001/student");
      console.log(users);
      setUser(users.data);
      setLoading(false);
    } catch (error) {
      alert("Error");
    }
  };

  let deleteUser = () => {
    const result = window.confirm("Are you sure do you want to delete ?");
    if (result) {
      alert("Deleted");
    }
  };
  return (
    <>
      {isLoading ? (
        <span>
          <b>Loading......</b>
        </span>
      ) : (
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h1>
              <b>Student Management System</b>
            </h1>
            <div className="row">
              <div className="col-lg-12">
              <input type="search"  placeholder=" Search" className="box" icon={faMagnifyingGlass}/><i><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#bfc5cf",}}  className="searchbar"/></i>
         
          <Link to={"/add_student"} type="button"  className="button">Add</Link>
              </div>
                
              </div>
           
          </div>
        
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
               
                  <tr>
                    <th>ID</th>
                    <th> First Name</th>
                    <th>last Name</th>
                    <th>Location</th>
                    <th>Email</th>
                    <th>DOB</th>
                    <th>Education</th>
                    <th>Action</th>
                    <th>Delete</th>
                  </tr>
              
                <tfoot></tfoot>
                <tbody>
                  {user.map((user) => {
                    return (
                      <tr>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.location}</td>
                        <td>{user.email}</td>
                        <td>{user.dob}</td>
                        <td>{user.education}</td>
                        <td>
                          {" "}
                          <Link
                            to={"/edit_user"}
                            style={{ textDecoration: "none" }}
                          >
                            <FontAwesomeIcon
                              icon={faUserPen}
                              style={{ color: "#266de8" }}
                              className="icon"
                            />
                            Edit
                          </Link>
                        </td>
                        <td>
                          <Link
                            onClick={() => deleteUser(user)}
                            style={{ textDecoration: "none", color: "#e52510" }}
                          >
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              style={{ color: "#e52510" }}
                              className="icon"
                            />
                            Delete
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StudentDetails;
