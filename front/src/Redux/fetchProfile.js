/*
 ** action Redux asynchrone pour récupérer le profil de mon user.
 ** On fait une requête à l'API de l'application pour obtenir les informations de profil,
 ** et on met à jour le state Redux avec ces informations.
 */
/* Ensuite
 ** requête POST à l'API en utilisant fetch,
 ** avec token d'authentification du user dans le header .
 ** La requête envoyé à "/user/profile" pour obtenir les informations de profil.
 */

/*
 ** objet user à partir des données de l'API, pour afficher les infos ET
 ** surtout les conserver en le stockan dans le localStorage,
 ** pour être utilisé comme payload dans l'action Redux de réussite.
 */

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchUserProfilePending,
  fetchUserProfileSuccess,
  fetchUserProfileFailure,
} from "./userReducers";

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(fetchUserProfilePending());
    console.log(fetchUserProfilePending());
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const token = storedUser?.token;

      if (!token) {
        console.log("Pas de token");
        throw new Error("Pas de token");
      }

      console.log("Token est là", token);

      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({}),
        }
      );

      console.log("Réponse de l'API :", response);

      if (!response.ok) {
        console.log("Impossible d'accéder au profil");
        throw new Error("Impossible d'accéder au profil");
      }

      const data = await response.json();
      console.log("Réponse de l'API :", data);

      const user = {
        token,
        username: data.body.userName,
        firstName: data.body.firstName,
        lastName: data.body.lastName,
      };

      console.log("Informations de l'utilisateur :", user);

      localStorage.setItem("user", JSON.stringify(user));

      dispatch(fetchUserProfileSuccess(user));
      console.log(fetchUserProfileSuccess(user));
      return user;
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
      dispatch(fetchUserProfileFailure(errorMessage));
      console.log(fetchUserProfileFailure(errorMessage));
      return rejectWithValue(errorMessage);
    }
  }
);
