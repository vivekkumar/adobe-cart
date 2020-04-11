import React from "react";

const Sort = ({ sortOptions, handleSelection, activeValue }) => {
  return (
    <div>
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
  );
};

export default Sort;
