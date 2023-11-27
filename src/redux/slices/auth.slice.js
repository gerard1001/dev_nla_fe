const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: {}
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {}
})


export const {} = authSlice.actions

const authReducer = authSlice.reducer
export default authReducer