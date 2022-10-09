import React from "react";
import { getChildrenCheckboxes } from "../utils";
import Checkboxes from "./Checkboxes";

export default function NestedCheckbox({
  dataWithState,
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
      dataWithState={dataWithState}
      checkboxesToRender={getChildrenCheckboxes(dataWithState, null)}
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
