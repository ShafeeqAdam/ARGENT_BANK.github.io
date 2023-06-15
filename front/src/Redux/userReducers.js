import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserProfilePending: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserProfileSuccess: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
      state.error = null;
    },
    fetchUserProfileFailure: (state, { payload }) => {
      state.user = null;
      state.loading = false;
      state.error = payload;
    },
    updateUserProfilePending: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateUserProfileSuccess: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
      state.error = null;
    },
    updateUserProfileFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {
  fetchUserProfilePending,
  fetchUserProfileSuccess,
  fetchUserProfileFailure,
  updateUserProfilePending,
  updateUserProfileSuccess,
  updateUserProfileFailure,
} = userSlice.actions;

export default userSlice.reducer;

/* Reducer pour toutes les actions concernant le user, en l'occurence la c'est fetch et update*/
