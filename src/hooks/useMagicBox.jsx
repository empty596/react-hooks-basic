import React, { useEffect, useRef, useState } from "react";

useMagicBox.propTypes = {};

function randomColor(currentColor) {
  const COLOR_LIST = ["red", "green", "yellow"];

  const currentIndex = COLOR_LIST.indexOf(currentColor);
  let newIndex = currentIndex;
  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 3);
  }

  return COLOR_LIST[newIndex];
}

function useMagicBox() {
  const [color, setColor] = useState("transparent");
  const currentColor = useRef("transparent");

  useEffect(() => {
    const colorMagic = setInterval(() => {
      const newColor = randomColor(currentColor.current);
      currentColor.current = newColor;

      setColor(newColor);
    }, 1000);

    return () => {
      if (colorMagic) {
        clearInterval(colorMagic);
      }
    };
  }, []);

  return color;
}

export default useMagicBox;
