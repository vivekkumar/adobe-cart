import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default ({ cartItemCount }) => {
  return (
    <>
      <input
        type="text"
        className="bg-transparent border border-top-0 border-left-0 border-right-0 border-bottom-1 border-light"
      />
      <FontAwesomeIcon icon={faSearch} size="2x" color="#fff" />
    </>
  );
};
