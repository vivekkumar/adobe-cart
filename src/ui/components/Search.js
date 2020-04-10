import React, { useState } from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { setSearchQuery } from "../../store/actions/searchActions";

const Search = ({ dispatch }) => {
  const [query, setQuery] = useState("xcxzc");

  const handleChange = e => {
    setQuery(e.target.value);
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <>
      <input
        type="text"
        className="bg-transparent border border-top-0 border-left-0 border-right-0 border-bottom-1 border-light"
        value={query}
        onChange={handleChange}
      />
      <FontAwesomeIcon icon={faSearch} size="2x" color="#fff" />
    </>
  );
};

export default connect(
  null,
  null
)(Search);
