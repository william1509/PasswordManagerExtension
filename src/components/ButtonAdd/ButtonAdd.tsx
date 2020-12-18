import * as React from "react";
import { MessageType } from "../../types";
import "./ButtonAdd.css";

export const ButtonAdd = () => {
  const [snowing, setSnowing] = React.useState(true);

  React.useEffect(() => {
    chrome.runtime.sendMessage({ type: "REQ_SNOW_STATUS" });

    chrome.runtime.onMessage.addListener((message: MessageType) => {
      switch (message.type) {
        case "SNOW_STATUS":
          setSnowing(message.snowing);
          break;
        default:
          break;
      }
    });
  }, []);

  const onClick = () => {
    chrome.runtime.sendMessage({ type: "TOGGLE_SNOW", snowing: !snowing });
  };

  return (
    <div className="containerAdd">
      <button className="buttonAdd" onClick={onClick}>
        Add
      </button>
    </div>
    
  );
};