import React, { useState } from "react";
import "./ColorBox.scss";
ColorBox.propTypes = {};

const randomColor = () => {
  const colorList = ["red", "blue", "deeppink", "cyan", "black"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return colorList[randomIndex];
};

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initialColor = localStorage.getItem("color" || "deeppink");
    return initialColor;
  });

  function handleChangeColor() {
    const newColor = randomColor();
    setColor(newColor);
    localStorage.setItem("color", newColor);
  }

  return (
    <div className='color-box' style={{ backgroundColor: color }} onClick={handleChangeColor}>
      <h2>Color Box</h2>
    </div>
  );
}

export default ColorBox;
