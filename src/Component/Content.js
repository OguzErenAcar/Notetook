import React from "react";
import Favories from "./Favories/Favories";
import Notes from "./Notes/Notes";
import Trash from "./Trash/Trash";
import { useSelector } from "react-redux";

const Navitems = [
  {
    element: <Favories />,
  },
  {
    element: <Notes />,
  },
  {
    element: <Trash />,
  },
];

function Content() {
  const SelectedTab = useSelector((state) => state.SelectTab.value);
  return (
    <div id="ContentContainer">
    <div id="Content" className="bg-neutral-100">
      {Navitems.map((item, index) => index === SelectedTab && item.element)}
    </div>
    </div>
  );
}

export default Content;
