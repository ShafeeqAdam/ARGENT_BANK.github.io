import { createSlice } from "@reduxjs/toolkit";
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
});

export const { loginPending, loginSuccess, loginFailure, logoutSuccess } =
  authSlice.actions;
export default authSlice.reducer;

// payload c'est les données qui sont envoyés avec une action redux
