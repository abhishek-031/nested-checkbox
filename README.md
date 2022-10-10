# Nested Checkbox Component for React

A customizable nested checkbox component for react, the component is very easy to use and provides functionality like this:

![This is a alt text.](/example/images/image.png "This is a sample image.")

## How to use:
* The component uses data in the form of a flat array of objects, where each object has the following data
```
{
    name: string;
    label: string;
    parentId: string;
}
``` 
    * name has to be a unique key to identify different elements in the array
    * label is the string shown with the checkbox and 
    * parentId is the name of the parent checkbox
* The component exposes a custom hook ```useCheckboxState``` which takes the flat data array, and returns the state that will be used by the component, usage:
```
const [dataWithState, updateData] = useCheckboxState(data)
```
this adds two additional fields to the data, which are used by the component:
```
state: 0 | 1 | 2,
expanded: boolean
```
state denotes the current state of the checkbox, that are Checked, Unchecked and intermediate. Expanded denotes the state of the nested checkboxes if they are expanded or collapsed.
* The component also exposes an object ```CheckboxStates``` , which has three properties, 
```
CHECKED,
UNCHECKED,
INTERMEDIATE
```
this can be used to compare state of the checkbox like this
```
checkbox.state === CheckboxStates.CHECKED //the checkbox is checked if true
```
* To use the component, you need to import ```NestedCheckbox``` and ```useCheckboxState``` from the component, and use the component like this:
```
// get the state
const [state, setState] = useCheckboxState(data);
.
..
..
.
<NestedCheckbox
    dataWithState={state}
    onChange={setState}
/>
```
and you have the component working
* Besides this, the component features some customizations as well,
    * ```checkboxSize```, the prop can be used to change the size of the checkbox
    * ```fontStyles```, the props can be used to change the font style of the label, it can be used like this
    ```
    fontSize={{
        color: "#923563",
        fontSize: 20,
      }}
    ```
    * ```checkedStateColor```, prop can be used to change the color of checked state of the checkbox
    * ```intermediateStateColor```, the prop can be used to change the color of the intermediate state of the checkbox
    * ```checkboxBorderColor```, the prop can be used to change the color of the checkbox's border, this matches the border color of the expand and collapse buttons
    * ```verticalMargin```, prop can be used to change the vertical margin adjacent checkboxes have
    * all these props can be used directly on the NestedCheckbox component like this,
    ```
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
    ```
    
    ## How to run the example:
    * To run, clone this repository
    * run ```yarn``` or ```npm install``` in the terminal
    * run ```yarn start``` or ```npm start``` in the terminal
    * the app will start running, the NestedCheckbox component is used in the ```src/App.js``` file, and the main component code is in ```src/components/NestedCheckbox``` and the used styles are located in ```src/styles/filename.module.css```
