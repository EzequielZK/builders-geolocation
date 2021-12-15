import React from "react";
import cssStyles from "./cards.module.css";
export default function Cards({ title, children }) {
  return (
    <div className={cssStyles.container}>
      {title ? <h3>{title}</h3> : null}

      {children}
    </div>
  );
}
