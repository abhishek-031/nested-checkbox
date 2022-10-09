import React from "react";
import { getChildrenCheckboxes } from "../utils";
import Checkboxes from "./Checkboxes";

export default function NestedCheckbox({
  dataState,
  onChange,
  checkboxSize,
  fontStyles,
  checkedStateColor,
  intermediateStateColor,
  checkboxBorderColor,
  verticalMargin,
}) {
  return (
    <Checkboxes
      dataState={dataState}
      checkboxesToRender={getChildrenCheckboxes(dataState, null)}
      onChange={onChange}
      checkboxSize={checkboxSize}
      fontStyles={fontStyles}
      checkedStateColor={checkedStateColor}
      intermediateStateColor={intermediateStateColor}
      checkboxBorderColor={checkboxBorderColor}
      verticalMargin={verticalMargin}
    />
  );
}
