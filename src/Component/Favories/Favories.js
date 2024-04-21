import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FavNote from "./FavNote";
import { Listdiv } from "../Content";

function Favories({ElementCount}) {
  const Todos = useSelector((state) => state.Notes.value);
  const [Favlist,setFavlist]=useState([])
  useEffect(()=>{
    setFavlist(Todos.filter(k=>k.fav===true))
    ElementCount(Favlist.length)
  },[Todos])

  return (
    <Listdiv>
      <div className="ListComp">
         {Favlist.length > 0 ? (
          Favlist.map((item, index) => (
           <FavNote key={item} {...item}></FavNote>
          ))
        ) : (
          <h3>This place is empty.</h3>
        )} 
      </div>
    </Listdiv>
  );
}

export default Favories;
