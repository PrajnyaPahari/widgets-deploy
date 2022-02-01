import react, { useState } from "react";
import Route from "./components/Route";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front end Js Framework",
  },
  {
    title: "Why use React ?",
    content: "Because it is a favourite frameworks among developers",
  },
  {
    title: "Is React Free ?",
    content: "React is an open-source Js framework library",
  },
];
const options = [
  {
    label: "The color Red",
    value: "Red",
  },
  {
    label: "The color green",
    value: "Green",
  },
  {
    label: "The shade of blue",
    value: "blue",
  },
];
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle DropDown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}
    </div>
  );
};
