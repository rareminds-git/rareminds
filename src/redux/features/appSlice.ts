const initialState = {
  bannerSelected: "",
};

const appSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    selectBanner: (state, action) => {
      state.bannerSelected = action.payload;
    },
  },
});

export const { selectBanner } = appSlice.actions;

export default appSlice.reducer;
