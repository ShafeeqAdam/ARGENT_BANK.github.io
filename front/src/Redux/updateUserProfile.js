/* même principe que pour le fetch
 * action async pour aller chercher les infos user
 * on recup le token, balance une reponse
 * un log pour tt vérifier
 * on fetch avec un put pour updater le username, token dans le header
 * on creer un objet updateUser avec qqls données rendue par l'api
 * console pour verifier la manip
 * et enfin on setItem pour dire que mnt les nouvelles données du user c'est
 * updateUser
 *
 *
 *
 */

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  updateUserProfilePending,
  updateUserProfileSuccess,
  updateUserProfileFailure,
} from "./userReducers";

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async (newUsername, { dispatch, rejectWithValue }) => {
    dispatch(updateUserProfilePending(newUsername));
    console.log(
      "Dispatch updateUserProfilePending",
      updateUserProfilePending(newUsername)
    );

    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const token = storedUser?.token;

      if (!token) {
        console.log("Pas de token.");
        throw new Error("Pas de token.");
      }

      console.log("Token du storage :", token);

      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userName: newUsername }),
        }
      );

      console.log("Réponse de l'API :", response);

      if (!response.ok) {
        console.log("Impossible de mettre à jour le username");
        throw new Error("Impossible de mettre à jour le username");
      }

      const data = await response.json();
      const updateUser = {
        token,
        username: data.body.userName,
        firstName: data.body.firstName,
        lastName: data.body.lastName,
      };

      console.log("Username mis à jour :", updateUser);

      localStorage.setItem("user", JSON.stringify(updateUser));

      dispatch(updateUserProfileSuccess(updateUser));
      console.log(
        "Dispatch updateUserProfileSuccess",
        updateUserProfileSuccess(updateUser)
      );
      return updateUser;
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
      dispatch(updateUserProfileFailure(errorMessage));
      console.log(
        "Dispatch updateUserProfileFailure",
        updateUserProfileFailure(errorMessage)
      );
      return rejectWithValue(errorMessage);
    }
  }
);
