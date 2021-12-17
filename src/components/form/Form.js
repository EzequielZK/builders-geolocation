import React from "react";
import { Button } from "..";
import { reduxForm, Field } from "redux-form";
import TopBarInput from "./inputs/topBarInput";
import cssStyles from "./form.module.css";

function Form(props) {
  const { handleSubmit } = props;

  return (
    <div className={cssStyles.container}>
      <span className={cssStyles.label}>Search for coordinates:</span>
      <form id="form" onSubmit={handleSubmit}>
        <Field
          className={cssStyles.fields}
          name="latitude"
          component={TopBarInput}
          parse={(value) => value?.replace(/[^0-9-.]/g, "")}
          placeholder="Latitude"
          required
          type="text"
        />
        <Field
          className={cssStyles.fields}
          name="longitude"
          component={TopBarInput}
          parse={(value) => value?.replace(/[^0-9-.]/g, "")}
          placeholder="Longitude"
          required
          type="text"
        />
        <Button.Contained type="submit" is_loading={props.is_loading}>
          Submit
        </Button.Contained>
      </form>
    </div>
  );
}

export default reduxForm({ form: "placeSearch" })(Form);
