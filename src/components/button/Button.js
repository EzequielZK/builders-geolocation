import React from "react";
import { CircularProgress } from "..";
import cssStyles from "./button.module.css";

export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className={props.is_loading ? cssStyles.disabled : cssStyles.button}
      disabled={props.is_loading}
    >
      {props.is_loading ? <CircularProgress /> : children}
    </button>
  );
}
