import axiosInstance from "@/app/axios/axios.config";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const authRegister = createAsyncThunk("auth/register", async (data) => {
  const res = await axiosInstance.post("/auth/register", data);

  console.log(data);
  return res;
});

const initialState = {
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authRegister.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const {} = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
