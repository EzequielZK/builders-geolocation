import React from "react";
import cssStyles from "./topBarInput.module.css";

export default function TopBarInput(props) {
  const { input, meta, ...rest } = props;

  return (
    <input
      {...input}
      {...rest}

      className={`${cssStyles.input} ${props.className ? props.className : ""}`}
    />
  );
}
