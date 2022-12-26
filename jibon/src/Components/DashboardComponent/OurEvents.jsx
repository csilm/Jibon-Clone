import React from "react";
import eventData from "../../testData/eventData";
import OurEventsList from "./OurEventsList";
import "../../Scss/DashboardScss/Events.scss";

const OurEvents = () => {
  return (
    <div className="events">
      <div>
        <h3 className="text-center custom-sub-title cmb-30">
          Our all social events
        </h3>
        <div className="d-flex align-items-center cmb-25">
          <h4 className="section-header my-0">Filtered by </h4>
          <div className="cml-15">
            <select
              class="form-select form-group"
              aria-label=".form-select-lg example"
            >
              <option hidden selected value="All-category">
                All Category
              </option>
              <option value="On-going">On-going</option>
              <option value="Up-coming">Up-coming</option>
              <option value="Previous">Previous</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row g-4">
        {eventData.map((event) => (
          <OurEventsList event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
};

export default OurEvents;
