import React from "react";
import { getChildrenCheckboxes } from "../utils";
import Checkboxes from "./Checkboxes";

export default function NestedCheckbox({ dataState, onChange }) {
  return (
    <Checkboxes
      dataState={dataState}
      checkboxesToRender={getChildrenCheckboxes(dataState, null)}
      onChange={onChange}
    />
  );
}
