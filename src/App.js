import { useState } from "react";
import { NestedCheckbox, CheckboxStates } from "./components/NestedCheckbox";
import styles from "./styles/app.module.css";

const data = [
  {
    name: "0-0",
    parentId: null,
    label: "Checkbox label 1",
  },
  {
    name: "0-1",
    parentId: null,
    label: "Checkbox label 2",
  },
  {
    name: "0-2",
    parentId: null,
    label: "Checkbox label 3",
  },
  {
    name: "0-0-0",
    parentId: "0-0",
    label: "Checkbox label 4",
  },
  {
    name: "0-0-0-0",
    parentId: "0-0-0",
    label: "Checkbox label 5",
  },
  {
    name: "0-0-0-1",
    parentId: "0-0-0",
    label: "Checkbox label 6",
  },
  {
    name: "0-0-0-2",
    parentId: "0-0-0",
    label: "Checkbox label 7",
  },
  {
    name: "0-0-1-0",
    parentId: "0-0-1",
    label: "Checkbox label 8",
  },
  {
    name: "0-0-1-1",
    parentId: "0-0-1",
    label: "Checkbox label 9",
  },
  {
    name: "0-0-1-2",
    parentId: "0-0-1",
    label: "Checkbox label 10",
  },
  {
    name: "0-0-2",
    parentId: "0-0",
    label: "Checkbox label 11",
  },
  {
    name: "0-1-0",
    parentId: "0-1",
    label: "Checkbox label 12",
  },
];

const initialState = data.map((dataItem) => ({
  ...dataItem,
  state: CheckboxStates.UNCHECKED,
}));

function App() {
  const [dataState, setDataState] = useState(initialState);
  return (
    <div className={styles.container}>
      <h1>Nested checkbox component example</h1>
      <NestedCheckbox
        dataState={dataState}
        onChange={(newState) => setDataState(newState)}
      />
    </div>
  );
}

export default App;
