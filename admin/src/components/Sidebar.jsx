import React, { useState, useContext } from "react";

import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

const Sidebar = () => {
    const {aToken} =useContext(AdminContext)
  return (
    <div className="min-h-screen bg-white border-r">
      {aToken && (
        <ul className="text-[#515151] mt-5">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#f2f3ff] border-r-4 border-blue-600" : ""
              } `
            }
            to={"/admin-dashboard"}
          >
            <img className="min-w-5" src={assets.chats_icon} alt="" />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#f2f3ff] border-r-4 border-blue-600" : ""
              } `
            }
            to={"/all-appoijntments"}
          >
            <img className="min-w-5" src={assets.chats_icon} alt="" />
            <p className="hidden md:block">Appointment</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#f2f3ff] border-r-4 border-blue-600" : ""
              } `
            }
            to={"/doctor-list"}
          >
            <img className="min-w-5" src={assets.chats_icon} alt="" />
            <p className="hidden md:block">Add Doctor</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#f2f3ff] border-r-4 border-blue-600" : ""
              } `
            }
            to={"/add-doctor"}
          >
            <img className="min-w-5" src={assets.chats_icon} alt="" />
            <p className="hidden md:block">DoctorList</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};
export default Sidebar;
