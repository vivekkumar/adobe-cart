import React from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { setSearchQuery } from "../../store/actions/searchActions";

const Search = ({ query, dispatch }) => {
  const handleChange = e => {
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
  state => {
    return { query: state.searchQuery };
  },
  null
)(Search);
