import React, { useEffect, useState } from "react";
import Favories from "./Favories/Favories";
import Notes from "./Notes/Notes";
import Trash from "./Trash/Trash";
import { useSelector } from "react-redux";
import styled from "styled-components";

var Listdiv = styled.div``;
function Content() {
  
  const SelectedTab = useSelector((state) => state.SelectTab.value);

  const [elementCount, setelementCount] = useState(false);
  const [windowsWidth, setwindowsWidth] = useState(window.innerWidth);
  const [rowCount, setrowCount] = useState(false);
  const [str, setstr] = useState("height:500px");

  var ContentContainer = styled.div`  
  display: flex;
  justify-content: center;
  ${str}`;
   
  useEffect(() => {
    const handleResize = () => {
      setwindowsWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    var columnCount = () => {
      const count = (windowsWidth - 300) / 260;
      if (count >= 5) return 5;
      return count+1;
    };
    const columnscountInt = parseInt(columnCount());
    setrowCount(parseInt(elementCount / columnscountInt) + 1);

    const colfrString = "1fr ".repeat(columnCount());
    Listdiv = styled.div`
      width: 100%;
      margin-top: 40px;
      height: 92%;
      display: inline-grid;
      grid-gap: 3px;
      justify-items: center;
      grid-template-columns: ${colfrString};
    `;
  }, [elementCount, windowsWidth]);


  useEffect(() => {
    if (rowCount > 1) {
      setstr("")
    } else {
      setstr("height:500px")
    }
    console.log(ContentContainer,SelectedTab)
  }, [SelectedTab, rowCount]);


  return (
    
  <ContentContainer id="ContentContainer">
    {SelectedTab === 0 && (<div id="Content">{" "}<Favories ElementCount={(i) => {setelementCount(i); }}/></div>)}
    {SelectedTab === 1 && (<div id="Content">{" "}<Notes ElementCount={(i) => {setelementCount(i); }}/></div>)}
    {SelectedTab === 2 && (<div id="Content">{" "}<Trash ElementCount={(i) => {setelementCount(i); }}/></div>)}
  </ContentContainer>
  
)
}

export default Content;
export { Listdiv };
