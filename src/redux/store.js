const { configureStore } = require("@reduxjs/toolkit");
const { default: rootReducers } = require("./rootReducer");

const store = configureStore({
  reducer: rootReducers,
});

export default store;
