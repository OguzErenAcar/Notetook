import React from "react";
import { useNavigate } from "react-router-dom";
import { useIntro } from "../Context/IntroContext";
import Header from "../Component/Header";

function Intro() {
  const { setStartBool } = useIntro();

  const navigate = useNavigate();

  const NoteTook = () => {
    setStartBool(true);
    navigate("/");
  };

  const DrawOutlineButton = ({ children, ...rest }) => {
    return (
      <>
    
      <button
        id="DrawOutlineButton"
        onClick={() => {
          NoteTook();
        }}
        {...rest}
        className="group relative px-4 py-2 font-medium duration-[400ms]"
      >
        <h1>{children}</h1>

        {/* TOP */}
        <span className="absolute left-0 top-0 h-[10px] w-0  transition-all duration-100 group-hover:w-full" />

        {/* RIGHT */}
        <span className="absolute right-0 top-0 h-0 w-[10px] transition-all delay-100 duration-100 group-hover:h-full" />

        {/* BOTTOM */}
        <span className="absolute bottom-0 right-0 h-[10px] w-0 transition-all delay-200 duration-100 group-hover:w-full" />

        {/* LEFT */}
        <span className="absolute bottom-0 left-0 h-0 w-[10px] transition-all delay-300 duration-100 group-hover:h-full" />
      </button>
      </>
    );
  };

  return (
  <div   id="Intro">
    <div class="background"></div>
    <div id="Logodiv">
      <h2>NoteTook</h2>
    </div>
    <DrawOutlineButton>Start</DrawOutlineButton>
  </div>
);
  // (
  //  <button onClick={()=>{NoteTook()}}>Take Note</button>
  // )
}

export default Intro;
