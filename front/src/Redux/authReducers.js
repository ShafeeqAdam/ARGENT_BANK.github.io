import { createSlice } from "@reduxjs/toolkit";
import { fetchUserProfile } from "./fetchProfile";
import { updateUserProfile } from "./updateUserProfile";
// état initial de l'app, un peu comme le début d'un game
const initialState = {
  isAuthenticated: false, // joueur pas encore sur le terrain
  user: null, // pas de joueur
  error: null,
  loading: false, // match pas commencé
};
// createSlice c'est comme une feuille du game
const authSlice = createSlice({
  name: "auth", // nom du game
  initialState, // etat du debut du game
  reducers: {
    // chaque action qu'on va définir, sont un peu comme des faits de jeu, cartons, but, hj etc
    loginPending: (state) => {
      state.loading = true; // R9 qui va rentrer
    },
    loginSuccess: (state, { payload }) => {
      state.isAuthenticated = true; // R9 est sur le terrain
      state.user = payload; // on connait le joueur, c'est R9, numero 9 coupe deguelasse
      state.loading = false; // match en cours
    },
    loginFailure: (state, { payload }) => {
      state.isAuthenticated = false; // R9 n'a pas pu rentrer, pas le bon num (mauvais identifiants par ex)
      state.user = null; // pas de R9 sur le terrain
      state.error = payload; // raison de la non entrée, pas le bon num (erreu d'id par ex)
      state.loading = false; // match en cours
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false; // R9 a été remplacé
      state.user = null; // plus de R9 sur le terrain
      state.error = null; // r
      state.loading = false; // match en cours
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.user = null;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        console.log("etat apres maj", state);
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { loginPending, loginSuccess, loginFailure, logoutSuccess } =
  authSlice.actions;
export default authSlice.reducer;

// payload c'est les données qui sont envoyés avec une action redux
