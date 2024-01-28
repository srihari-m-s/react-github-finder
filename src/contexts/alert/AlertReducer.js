// Actions
const ALERT_ACTIONS = {
  SET_ALERT: "set-alert",
  REMOVE_ALERT: "remove-alert",
};

// Reducer
const alertReducer = (state, action) => {
  switch (action.type) {
    case ALERT_ACTIONS.SET_ALERT:
      return action.payload;
    case ALERT_ACTIONS.REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};

// Exports
export { alertReducer, ALERT_ACTIONS };
