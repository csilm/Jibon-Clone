import React from "react";
import Sidebar from "./Sidebar.jsx";
import "../../Scss/DashboardScss/Dashboard.scss";
import { Link, Outlet } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-nav sticky-top">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="custom-link">
            <h3 className="brand-name">JIBON</h3>
          </Link>
          <Sidebar />
        </div>
      </div>

      <div className="dashboard-content">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
