import React from "react";
import styles from "../../../styles/checkbox.module.css";
import { CheckboxStates } from "../utils";

export default function Checkbox({
  label,
  state,
  onToggle,
  checkboxSize,
  fontStyles,
  checkedStateColor,
  intermediateStateColor,
  checkboxBorderColor,
}) {
  return (
    <div className={styles.checkboxContainer} onClick={onToggle}>
      <div className={styles.checkboxInnerContainer}>
        <div
          className={styles.checkbox}
          style={{
            height: checkboxSize,
            width: checkboxSize,
            borderColor: checkboxBorderColor,
          }}
        >
          <span
            className={
              state === CheckboxStates.CHECKED
                ? styles.checked
                : state === CheckboxStates.INTERMEDIATE
                ? styles.intermediate
                : null
            }
            style={{
              background:
                state === CheckboxStates.CHECKED
                  ? checkedStateColor
                  : state === CheckboxStates.INTERMEDIATE
                  ? intermediateStateColor
                  : null,
            }}
          />
        </div>
        <label className={styles.label} style={{ ...fontStyles }}>
          {label}
        </label>
      </div>
    </div>
  );
}
