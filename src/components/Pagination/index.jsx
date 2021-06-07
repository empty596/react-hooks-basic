import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object,
  onClickPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  pagination: {},
  onClickPageChange: null,
};

function Pagination(props) {
  const { pagination, onClickPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPage = Math.ceil(_totalRows / _limit);

  function handleClick(newPage) {
    if (!onClickPageChange) return;
    onClickPageChange(newPage);
  }
  return (
    <div>
      <button disabled={_page <= 1} onClick={() => handleClick(_page - 1)}>
        Prev
      </button>
      <button disabled={_page >= totalPage} onClick={() => handleClick(_page + 1)}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
