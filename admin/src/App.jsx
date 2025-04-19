import React, { useContext } from "react";
import Login from "./pages/Login";
import {Route,Routes} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashBoard from "./pages/Admin/DashBoard";
import AllApointments from "./pages/Admin/AllApointments";
import DoctorList from "./pages/Admin/DoctorList";
import AddDoctor from "./pages/Admin/AddDoctor";

const App = () => {
  const { aToken } = useContext(AdminContext);

  return aToken ? (
    <div className="bg-[#f8f9fd]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/admin-dashboard" element={<DashBoard />} />
          <Route path="/all-appoijntments" element={<AllApointments />} />
          <Route path="/doctor-list" element={<AddDoctor/>} />
          <Route path="/add-doctor" element={<DoctorList />} />
        </Routes>
      </div>
    </div>
  ) : (
    <div>
      <Login />
      <ToastContainer />
    </div>
  );
};

export default App;
