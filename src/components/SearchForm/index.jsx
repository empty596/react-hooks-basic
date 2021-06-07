import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

SearchForm.defaultProps = {
  onSubmit: null,
};

function SearchForm({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const typingParam = useRef("");
  //change Input
  function handleSearchFormChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    if(typingParam.current) {
        clearTimeout(typingParam.current)
    }

    typingParam.current = setTimeout(() => {
      if (!onSubmit) return;
      onSubmit(value);
    }, 300);
  }
  return (
    <form>
      <input type='text' value={searchTerm} onChange={handleSearchFormChange} />
    </form>
  );
}

export default SearchForm;
