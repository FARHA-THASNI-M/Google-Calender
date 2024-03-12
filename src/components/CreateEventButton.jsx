import React, { useContext } from "react";
import plusImg from "../assets/plus.svg";
import GlobalContext from "../contexts/GlobalContext";
export default function CreateEventButton() {
    const { setShowAddEvent } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowAddEvent(true)}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl mt-5 ml-5 custom-border"
      // Adding custom-border class
    >
      <img src={plusImg} alt="create_event" className="w-7 h-7" />
      <span className="pl-3 pr-7"> Create</span>
    </button>
  );
}
