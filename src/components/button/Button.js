import React from "react";
import { CircularProgress } from "..";
import cssStyles from "./button.module.css";

function Button({ children, ...props }) {
  return (
    <button
      {...props}
      disabled={props.is_loading}
      className={`${cssStyles.button} ${props.className}`}
    >
      {props.is_loading ? (
        <CircularProgress size="small" color={props.loading_color} />
      ) : (
        children
      )}
    </button>
  );
}

function Contained({ children, ...props }) {
  return (
    <Button
      {...props}
      className={
        props.is_loading
          ? cssStyles.containedDisabled
          : cssStyles.containedButton
      }
      loading_color="secondary"
    >
      {children}
    </Button>
  );
}

function Outlined({ children, ...props }) {
  return (
    <Button
      {...props}
      className={
        props.is_loading ? cssStyles.outlinedDisabled : cssStyles.outlinedButton
      }
    >
      {children}
    </Button>
  );
}

const buttons = {
  Contained,
  Outlined,
};

export default buttons;
