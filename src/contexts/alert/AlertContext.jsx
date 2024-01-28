import { createContext, useReducer } from "react";
import { ALERT_ACTIONS, alertReducer } from "./AlertReducer";

export const AlertContext = createContext();

const initalState = null;

export default function AlertProvider({ children }) {
  const [state, dispatch] = useReducer(alertReducer, initalState);

  function setAlert(msg, type) {
    dispatch({
      type: ALERT_ACTIONS.SET_ALERT,
      payload: { msg, type },
    });

    setTimeout(() => {
      dispatch({
        type: ALERT_ACTIONS.REMOVE_ALERT,
      });
    }, 2000);
  }

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}
