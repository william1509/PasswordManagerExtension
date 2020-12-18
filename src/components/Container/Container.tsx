import * as React from "react";
import { ButtonAdd } from "../ButtonAdd/ButtonAdd";
import { ButtonRemove } from "../ButtonRemove/ButtonRemove";
import "./Container.css";

export const Container = () => {


  const onClick = () => {
    chrome.runtime.sendMessage({  });
  };

  return (
    <div className="MainContainer">
        <div className="ButtonContainer">
            <ButtonAdd />
            <ButtonRemove />
        </div> 

        <div className="DataGridContainer">
            <h1>Super data grid</h1>
        </div>
    </div>
    
  );
};