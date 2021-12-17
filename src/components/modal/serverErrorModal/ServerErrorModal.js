import React from "react";
import { Button } from "../..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import cssStyles from "./serverErrorModal.module.css";

export default function ServerErrorModal(props) {
  return (
    <div className={cssStyles.container}>
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        className={cssStyles.icon}
      />
      <span className={cssStyles.message}>
        {props.configs.response.data.message}
      </span>
      <Button.Contained onClick={() => props.closeModal()}>Ok</Button.Contained>
    </div>
  );
}
