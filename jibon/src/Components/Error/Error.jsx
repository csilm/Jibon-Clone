import React from "react";

const Error = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="text-center text-capitalize">
        <h2 className="custom-title">400! error</h2>
        <strong className="custom-sub-title">
          sorry invalid path or route ! try again
        </strong>
      </div>
    </div>
  );
};

export default Error;
