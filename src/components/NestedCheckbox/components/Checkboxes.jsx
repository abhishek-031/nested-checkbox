import React from "react";
import { getChildrenCheckboxes, isChecked, getNewDataStateOnChange } from "../utils";
import styles from "../../../styles/checkbox.module.css";

export default function Checkboxes({
  dataState,
  checkboxesToRender,
  onChange,
}) {
  return (
    <div className={styles.checkboxesContainer}>
      {checkboxesToRender.map((checkboxData) => (
        <div key={checkboxData.name}>
          <input
            id={checkboxData.name}
            type="checkbox"
            onChange={() =>
              onChange(
                getNewDataStateOnChange(
                  dataState,
                  checkboxData.name,
                  checkboxData.state,
                  checkboxData.parentId
                )
              )
            }
            checked={isChecked(checkboxData.state)}
          />
          <label htmlFor={checkboxData.name}>{checkboxData.label}</label>
          <Checkboxes
            dataState={dataState}
            checkboxesToRender={getChildrenCheckboxes(dataState, checkboxData.name)}
            onChange={onChange}
          />
        </div>
      ))}
    </div>
  );
}
