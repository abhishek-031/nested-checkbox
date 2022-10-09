import React from "react";
import {
  getChildrenCheckboxes,
  getNewDataStateOnChange,
  updateExpandedState,
} from "../utils";
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
  verticalMargin,
}) {
  return (
    <div
      className={
        checkboxesToRender[0]?.parentId !== null
          ? styles.checkboxesContainer
          : null
      }
      style={{
        paddingLeft:
          checkboxesToRender[0]?.parentId !== null ? checkboxSize : 0,
      }}
    >
      {checkboxesToRender.map((checkboxData) => {
        const childrenCheckboxes = getChildrenCheckboxes(
          dataState,
          checkboxData.name
        );
        return (
          <div key={checkboxData.name} className={styles.parentCheckbox}>
            <div className={styles.checkboxAndExpandContainer}>
              {childrenCheckboxes.length > 0 ? (
                <span
                  className={styles.expand}
                  style={{
                    height: checkboxSize,
                    width: checkboxSize,
                    left: -checkboxSize,
                    borderColor: checkboxBorderColor,
                    marginBottom: verticalMargin,
                  }}
                  onClick={() =>
                    onChange(updateExpandedState(dataState, checkboxData.name))
                  }
                >
                  {checkboxData.expanded === false ? "+" : "-"}
                </span>
              ) : (
                <span
                  className={styles.expandBlank}
                  style={{
                    height: checkboxSize,
                    width: checkboxSize,
                    left: -checkboxSize,
                    marginBottom: verticalMargin,
                  }}
                />
              )}
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
                childrenLength={childrenCheckboxes.length}
                checkboxSize={checkboxSize}
                fontStyles={fontStyles}
                checkedStateColor={checkedStateColor}
                intermediateStateColor={intermediateStateColor}
                checkboxBorderColor={checkboxBorderColor}
                label={checkboxData.label}
                state={checkboxData.state}
                verticalMargin={verticalMargin}
              />
            </div>
            {checkboxData.expanded === false ? null : (
              <Checkboxes
                dataState={dataState}
                checkboxesToRender={childrenCheckboxes}
                onChange={onChange}
                checkboxSize={checkboxSize}
                fontStyles={fontStyles}
                checkedStateColor={checkedStateColor}
                intermediateStateColor={intermediateStateColor}
                checkboxBorderColor={checkboxBorderColor}
                verticalMargin={verticalMargin}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
