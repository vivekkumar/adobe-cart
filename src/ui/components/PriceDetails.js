import React from "react";

import { getPriceDetails } from "../../utils/commonHelpers";

export default ({ itemGroup }) => {
  const { totalDiscount, totalDisplay, amountPayable } = getPriceDetails(
    itemGroup
  );

  return (
    <div>
      <h5 className="border-bottom py-2 font-weight-bold text-muted">
        PRICE DETAILS
      </h5>
      <div className="row">
        <div className="col-6">Price ({itemGroup.length} item)</div>
        <div className="col-6">{totalDisplay}</div>
      </div>

      <div className="row">
        <div className="col-6">Discount</div>
        <div className="col-6">{totalDiscount}</div>
      </div>

      <div className="row">
        <div className="col-6">Total Payable</div>
        <div className="col-6">{amountPayable}</div>
      </div>
    </div>
  );
};
