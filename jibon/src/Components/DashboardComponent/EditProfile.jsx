import React from "react";

const EditProfile = () => {
  return (
    <div className="py-5">
      <h2 className="text-center text-success mb-5">Editing mode enabled</h2>
      <form action="">
        <div className="row">
          <div className="col-md-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Abu Bakar"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Present address
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Dhaka, Bangladesh"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Permanent address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Gulisthan, Dhaka"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                disabled
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Contact Number
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="+880 1*********"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Last Education Qualification
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="SSC / HSC / Honers"
              />
            </div>
          </div>
          <div className="text-center my-5">
            <button className="btn btn-success">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
