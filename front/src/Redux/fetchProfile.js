import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (_, { rejectWithValue }) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const token = storedUser?.token;

    if (!token) {
      return rejectWithValue("Pas de token");
    }

    console.log("Token est la", token);

    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}), //
    });

    console.log("reponse api", response);

    if (!response.ok) {
      throw new Error("impossible d'accéder au profil");
    }

    const data = await response.json();
    console.log("API response:", data); //
    const user = {
      token,
      username: data.body.userName, //
      firstName: data.body.firstName, //
      lastName: data.body.lastName, //
    };

    console.log("infos user", user);
    //
    localStorage.setItem("user", JSON.stringify(user));

    return user;
  }
);
