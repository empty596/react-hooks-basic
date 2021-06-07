import React, { useState } from "react";

function randomColor() {
  const colorList = ["deeppink", "red", "blue", "green", "black"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return colorList[randomIndex];
}

function ColorList(props) {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("color") || "deeppink";
    console.log("haha");
    return initColor;
  });

  function handleColorClick() {
    const newColor = randomColor();

    localStorage.setItem("color", newColor);
    setColor(newColor);
  }
  return (
    <div onClick={handleColorClick} style={{ backgroundColor: color }}>
      BOX
    </div>
  );
}

export default ColorList;
