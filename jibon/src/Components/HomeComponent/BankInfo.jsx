import React from "react";
import bankData from "../../testData/bankData.js";

const BankInfo = () => {
  return (
    <div className="section-gap">
      <div className="container">
        <div className="text-center cmb-50">
          <h3 className="custom-sub-title cmb-10">our bank detail</h3>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
        </div>

        <div className="row g-4">
          {bankData.map((item) => {
            const { accountNo, bankName, branchCode, iban, swift } = item;
            return (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <div className="cart">
                  <div className="cart-body">
                    <h4 className="cart-title fw-bold text-success cmb-15">
                      {bankName}
                    </h4>

                    <p className="cmy-5">
                      <span className="fw-bold text-capitalize">
                        account-no:{" "}
                      </span>
                      {accountNo}
                    </p>
                    <p className="cmy-5">
                      <span className="fw-bold text-capitalize">
                        branch-code:{" "}
                      </span>
                      {branchCode}
                    </p>
                    <p className="cmy-5">
                      <span className="fw-bold text-uppercase">iban: </span>
                      {iban}
                    </p>
                    <p className="cmy-5">
                      <span className="fw-bold text-capitalize">swift: </span>
                      {swift}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BankInfo;
