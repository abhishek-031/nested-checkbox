const CheckboxStates = {
  UNCHECKED: 0,
  INTERMEDIATE: 1,
  CHECKED: 2,
};

function getChildrenCheckboxes(data, parentId) {
  return data.filter((dataItem) => dataItem.parentId === parentId);
}

function isChecked(checkboxState) {
  return checkboxState === CheckboxStates.CHECKED;
}

function getNewDataStateOnChange(
  currentState,
  checkboxId,
  currentStateOfCheckbox,
  parentId
) {
  const newState = currentState.map((currentStateItem) => {
    if (currentStateItem.name === checkboxId) {
      return {
        ...currentStateItem,
        state:
          currentStateOfCheckbox === CheckboxStates.CHECKED
            ? CheckboxStates.UNCHECKED
            : CheckboxStates.CHECKED,
      };
    } else return { ...currentStateItem };
  });
  updateChildrenOnUpdate(
    newState,
    checkboxId,
    currentStateOfCheckbox === CheckboxStates.CHECKED
      ? CheckboxStates.UNCHECKED
      : CheckboxStates.CHECKED
  );
  updateParentOnUpdate(newState, parentId);
  return newState;
}

function updateChildrenOnUpdate(state, id, changeTo) {
  state.forEach((stateItem) => {
    if (stateItem.parentId === id) {
      stateItem.state = changeTo;
      updateChildrenOnUpdate(state, stateItem.name, changeTo);
    }
  });
}

function updateParentOnUpdate(state, id) {
  if (id === null) return;
  const parentItem = state.find((stateItem) => stateItem.name === id);
  const currentStateOfParent = parentItem.state;
  const areAllChildrenChecked = state.reduce((areAllChecked, stateItem) => {
    if (stateItem.parentId === id) {
      return areAllChecked && stateItem.state === CheckboxStates.CHECKED;
    }
    return areAllChecked && true;
  }, true);
  const newStateOfParent = areAllChildrenChecked
    ? CheckboxStates.CHECKED
    : CheckboxStates.UNCHECKED;
  if (currentStateOfParent !== newStateOfParent) {
    parentItem.state = newStateOfParent;
    updateParentOnUpdate(state, parentItem.parentId);
  }
}

export {
  getChildrenCheckboxes,
  CheckboxStates,
  isChecked,
  getNewDataStateOnChange,
};
