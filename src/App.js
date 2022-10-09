import { NestedCheckbox, useCheckboxState } from "./components/NestedCheckbox";
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

function App() {
  const [dataWithState, setDataWithState] = useCheckboxState(data);
  const [data2WithState, setData2WithState] = useCheckboxState(data);
  return (
    <div className={styles.container}>
      <div>
        <h1>Basic Nested checkbox</h1>
        <NestedCheckbox
          dataWithState={dataWithState}
          onChange={(newState) => setDataWithState(newState)}
        />
      </div>
      <div>
        <h1>Customized Nested checkbox</h1>
        <NestedCheckbox
          dataWithState={data2WithState}
          onChange={(newState) => setData2WithState(newState)}
          checkboxSize={20}
          fontStyles={{
            color: "#923563",
            fontSize: 20,
          }}
          checkedStateColor="brown"
          intermediateStateColor="#018347"
          checkboxBorderColor="orange"
          verticalMargin={30}
        />
      </div>
    </div>
  );
}

export default App;
