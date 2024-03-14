import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  showAddEvent: false,
  setShowAddEvent: () =>{},
  dispatchCalEvent: ({type, payload}) =>{},
  savedEvents: []
});

export default GlobalContext;
