import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../../Scss/DashboardScss/Events.scss";

const OurEventsList = ({ event }) => {
  console.log(event);
  return (
    <div className="all-events col-6">
      <div className="cart rounded-0">
        <h3 className="cart-title text-center cpy-10 fw-bold bg-success text-white">
          {event.status} Event
        </h3>
        <div className="cart-body">
          <h4 className="text-capitalize cmb-15">{event.event_name}</h4>
          <div className="">
            <h5>Location - {event.location}</h5>
            <h5>Time - {event.time}</h5>
          </div>
        </div>
        <div className="row justify-content-center p-3">
          <div className="col-3">
            <button className="custom-btn-sm custom-btn-primary">
              <FontAwesomeIcon icon={faEdit} className="custom-icon-edit" />
            </button>
          </div>
          <div className="col-3">
            <button className="custom-btn-sm custom-btn-danger">
              <FontAwesomeIcon icon={faTrash} className="custom-icon-del" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEventsList;
