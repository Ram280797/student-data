import React from 'react'
import StudentDetails from '../student/StudentDetails'
import { Link } from 'react-router-dom';
import './Welcome.css';
function Welcome() {
  return (

 <div className='container'>
    <div className='welcome-content'>
<h1 className='heading'>Welcome Back......!</h1>

<Link to={"/student_management"}type="button" className="btn btn-dark mr-2">Click to Go</Link>
<hr/>
<Link to={"/add_student"}type="button" className="btn btn-dark mr-2">Add Student</Link>
</div>
</div>


 
  )
}

export default Welcome