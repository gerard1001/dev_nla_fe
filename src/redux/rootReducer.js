const { combineReducers } = require("@reduxjs/toolkit");
const { default: authReducer } = require("./slices/auth.slice");

const rootReducers = combineReducers({
  auth: authReducer
})

export default rootReducers
