import React from "react";
import { getChildrenCheckboxes, getNewDataStateOnChange } from "../utils";
import styles from "../../../styles/checkbox.module.css";
import Checkbox from "./Checkbox";

export default function Checkboxes({
  dataState,
  checkboxesToRender,
  onChange,
  checkboxSize,
  fontStyles,
  checkedStateColor,
  intermediateStateColor,
  checkboxBorderColor,
}) {
  return (
    <div
      className={
        checkboxesToRender[0]?.parentId !== null
          ? styles.checkboxesContainer
          : null
      }
    >
      {checkboxesToRender.map((checkboxData) => (
        <div key={checkboxData.name}>
          <Checkbox
            onToggle={() =>
              onChange(
                getNewDataStateOnChange(
                  dataState,
                  checkboxData.name,
                  checkboxData.state,
                  checkboxData.parentId
                )
              )
            }
            checkboxSize={checkboxSize}
            fontStyles={fontStyles}
            checkedStateColor={checkedStateColor}
            intermediateStateColor={intermediateStateColor}
            checkboxBorderColor={checkboxBorderColor}
            label={checkboxData.label}
            state={checkboxData.state}
          />
          <Checkboxes
            dataState={dataState}
            checkboxesToRender={getChildrenCheckboxes(
              dataState,
              checkboxData.name
            )}
            onChange={onChange}
            checkboxSize={checkboxSize}
            fontStyles={fontStyles}
            checkedStateColor={checkedStateColor}
            intermediateStateColor={intermediateStateColor}
            checkboxBorderColor={checkboxBorderColor}
          />
        </div>
      ))}
    </div>
  );
}
