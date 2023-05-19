import React,{useState} from "react";
import "./Artical-item.css";
import ShowDetails from "./ShowDetails";

function ArticalItem(props) {
 

 
  return (
   
    <div className="div" onClick={props.onShow}>
      <img
        className="img"
        src={props.img}
      />
      <h1 className="title">{props.title}</h1>
      <p className="description">
       {props.explain}



      </p>
    </div>
  );
}

export default ArticalItem;
