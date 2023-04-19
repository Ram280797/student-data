import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Component/welcome/Welcome';
import StudentDetails from './Component/student/StudentDetails';
import AddUser from './Component/adduser/AddUser';
import Edituser from "./Component/adduser/Edituser";
import { useEffect,useState } from 'react';

function App() {
  const [isLoading, setLoading] = useState(false);
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome/>}></Route>
      <Route path="/student_management" element={<StudentDetails/>}></Route>
      <Route path='/add_student'element={<AddUser/>}></Route>
      <Route path='/edit_user' element={<Edituser/>}></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
