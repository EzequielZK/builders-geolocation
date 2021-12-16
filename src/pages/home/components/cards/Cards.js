import React from "react";
import { CircularProgress } from "../../../../components";
import cssStyles from "./cards.module.css";
export default function Cards({ is_loading, children }) {
  return (
    <div className={cssStyles.container}>
      {/* {is_loading ? (
        <div className={cssStyles.progressContainer}>
          <CircularProgress />
        </div>
      ) : ( */}
        {children}
      {/* )} */}
    </div>
  );
}
