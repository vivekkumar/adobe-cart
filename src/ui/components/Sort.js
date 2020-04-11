import React, { useState } from "react";

const Sort = ({
  sortOptions,
  handleSelection,
  onCancel,
  onApply,
  activeValue
}) => {
  const currentOpt = sortOptions.find(o => o.value === activeValue);
  const [currentOption, setCurrentOptiop] = useState(currentOpt);

  const handleChange = e => {
    const currentOpt = sortOptions.find(
      o => o.value === parseInt(e.target.value, 10)
    );
    setCurrentOptiop(currentOpt);
  };

  return (
    <>
      {/* For Midum and large devices */}
      <div className="d-none d-md-block">
        <nav className="nav pt-2">
          <strong className="pt-2">Sort by: </strong>
          {sortOptions &&
            sortOptions.map((sOption, index) => {
              return (
                <a
                  className={`nav-link ${
                    activeValue === sOption.value ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => {
                    handleSelection(sOption);
                    return false;
                  }}
                  href="#"
                >
                  {sOption.text}
                </a>
              );
            })}
        </nav>
      </div>
      {/* For Mobile */}
      <div className="d-md-none">
        <h5 className="border-bottom pb-3 mb-3">Sort Options</h5>
        {sortOptions &&
          sortOptions.map((sOption, index) => {
            return (
              <div key={index} className="p-2">
                <label>
                  <input
                    type="radio"
                    name="sort"
                    value={sOption.value}
                    checked={sOption.value === currentOption.value}
                    onChange={handleChange}
                  ></input>
                  &nbsp;&nbsp;{sOption.text}
                </label>
              </div>
            );
          })}
        <div className="row text-center border">
          <div className="col-6 border-right">
            <button
              type="button"
              className="btn btn-link"
              onClick={() => {
                onCancel();
              }}
            >
              Cancel
            </button>
          </div>
          <div className="col-6">
            <button
              type="button"
              className="btn btn-link"
              onClick={() => onApply(currentOpt)}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sort;
