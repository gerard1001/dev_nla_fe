import axiosInstance from "@/configs/axios/axios.config";

const { createEntityAdapter, createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getCases = createAsyncThunk('cases/getCases', async () => {
  const res = await axiosInstance.get('/cases')
  const pagination = {
    page:  res.data.page,
    limit: res.data.limit
  }
  delete res.data.page
  delete res.data.limit

  const data = Object.values(res.data)
  return {data, pagination}
})

const casesAdapter = createEntityAdapter()

const casesSlice = createSlice({
  name: 'cases',
  initialState: casesAdapter.getInitialState({
    pagination: {
      page: 0,
      limit: 0
    }
  }),
  extraReducers: (builder) => {
    builder.addCase(getCases.fulfilled, (state, { payload }) => {
      casesAdapter.upsertMany(payload.data)
      state.pagination = payload.pagination
    })
  }
})

const {} = casesSlice.actions

const casesReducer = casesSlice.reducer
export default casesReducer