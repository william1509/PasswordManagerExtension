import * as React from "react";
import "./ButtonRemove.css";

export const ButtonRemove = () => {


  const onClick = () => {
    chrome.runtime.sendMessage({  });
  };

  return (
    <div className="ContainerRemove">
      <button className="ButtonRemove" onClick={onClick}>
        Remove
      </button>
    </div>
    
  );
};