import React from "react";
import PropTypes from "prop-types";
import useMagicBox from "../../hooks/useMagicBox";
import "./MagicBox.scss";

MagicBox.propTypes = {};

function MagicBox() {
  const color = useMagicBox();
  return <div className='magic-box' style={{ backgroundColor: color }}></div>;
}

export default MagicBox;
