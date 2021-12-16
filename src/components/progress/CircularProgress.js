import React from "react";
import cssStyle from "./circularProgress.module.css";

function CircularProgress({ color, size }) {
  const colors = {
    green: cssStyle.green,
    white: cssStyle.white,
    dark: cssStyle.dark,
  };

  const sizes = {
    small: cssStyle.small,
    medium: cssStyle.medium,
  };

  const selectedColor = colors[color];
  const selectedSize = sizes[size];

  return (
    <progress
      className={`${cssStyle.circularProgress} ${selectedColor} ${selectedSize}`}
    />
  );
}

export default CircularProgress;
