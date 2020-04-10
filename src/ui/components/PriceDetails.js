import React from "react";

export default ({ itemGroup }) => {
  let totalPrice = 0;
  let totalDisplay = 0;
  let totalDiscount = 0;
  let amountPayable = 0;

  for (let i = 0; i < itemGroup.length; i++) {
    let count = itemGroup[i].count;
    let item = itemGroup[i].item;

    totalPrice += item.price.actual * count;
    totalDisplay += item.price.display * count;
  }
  totalDiscount = totalDisplay - totalPrice;
  amountPayable = totalDisplay - totalDiscount;
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
        <div className="col-6">{totalDisplay - totalPrice}</div>
      </div>

      <div className="row">
        <div className="col-6">Total Payable</div>
        <div className="col-6">{amountPayable}</div>
      </div>
    </div>
  );
};
