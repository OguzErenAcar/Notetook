import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FavNote from "./FavNote";

function Favories() {
  const Todos = useSelector((state) => state.Notes.value);
  const [Favlist,setFavlist]=useState([])
  useEffect(()=>{
    setFavlist(Todos.filter(k=>k.fav===true))
  },[Todos])

  return (
    <div className="Favories">
      <div className="ListComp">
         {Favlist.length > 0 ? (
          Favlist.map((item, index) => (
           <FavNote key={item} {...item}></FavNote>
          ))
        ) : (
          <h3>boş</h3>
        )} 
      </div>
    </div>
  );
}

export default Favories;
