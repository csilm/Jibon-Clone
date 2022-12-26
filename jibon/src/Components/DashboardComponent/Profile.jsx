import React from "react";
import { Link } from "react-router-dom";
import "../../Scss/DashboardScss/Profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <div className="row justify-content-between g-4">
        <div className="col-md-4">
          <div className="img-div text-center">
            <img src="https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg" alt="" />
            <div className="cmt-20">
              <h5 className="">Mashrafi Bin Mortaza</h5>
              <h6 className="text-orange">Admin</h6>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="cmb-20">
            <h3 className="fw-bold">Additional Details</h3>
            <hr />
          </div>
          <div>
            <table class="table bg-transparent">
              <tbody>
                <tr>
                  <th scope="row">Present Address</th>
                  <td>Tejgaon, Dhaka</td>
                </tr>
                <tr>
                  <th scope="row">Permanent Address</th>
                  <td>Jamalpur, Mymensing</td>
                </tr>
                <tr>
                  <th scope="row">Email Address</th>
                  <td>mash@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">Contact Number</th>
                  <td>+880 177854211</td>
                </tr>
                <tr>
                  <th scope="row">Last Education Qualification</th>
                  <td>Honers in Math, DU</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="">
            <Link to="edit">
              <button className="custom-btn-lg custom-btn-primary cmt-20">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
