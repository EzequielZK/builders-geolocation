import React from "react";
import { Logo } from "../images/Images";
import cssStyles from "./topBar.module.css";

export default function TopBar() {
  return (
    <div className={cssStyles.container}>
      <img src={Logo} />
    </div>
  );
}
