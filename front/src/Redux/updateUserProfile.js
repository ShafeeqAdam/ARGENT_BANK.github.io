import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async (newUsername, { rejectWithValue, getState }) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const token = storedUser?.token;

    if (!token) {
      return rejectWithValue("No token.");
    }

    console.log("Token du storage", token);

    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userName: newUsername }), //
    });

    console.log("reponse api", response);

    if (!response.ok) {
      throw new Error("Impossible de maj le username");
    }

    const data = await response.json();
    const updateUser = {
      token,
      username: data.body.userName,

      firstName: data.body.firstName, //
      lastName: data.body.lastName, //
    };

    console.log("username maj", updateUser);
    //
    localStorage.setItem("user", JSON.stringify(updateUser));

    return updateUser;
  }
);
