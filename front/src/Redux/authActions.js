import {
  loginPending,
  loginSuccess,
  loginFailure,
  logoutSuccess,
} from "./authReducers";

// fichier qui définit le role des actions.

// action de login async avec thunk
export const login = (userData) => async (dispatch) => {
  // verif vite fait qui est co
  console.log(userData);
  // dispatch du pending, connex en cours......
  dispatch(loginPending());
  try {
    // requete http
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    // reponse pas bonne erreur générée

    // si reponse ok data en mode json
    const data = await response.json();
    // Pour voir la reponse complete
    console.log(data);
    // dispatch de connex reussis avec data
    dispatch(loginSuccess(data));

    // je veux voir le token dans la page home, histoire que ca me confirme que le user est bien co
    const user = {
      token: data.body.token,
    };
    console.log("User dans la place", user);
    // pour stocker l'etat de co, même si on recharge ou switch de page
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.error("PAS REUSSIS", error);
    // dispatch du fail de co si co pas ok
    dispatch(
      loginFailure(
        "L'authentification a échoué. Veuillez vérifier vos identifiants."
      )
    );
  }
};

export const logout = () => (dispatch) => {
  // voir si logout est ok
  console.log("Logout actiiiiiiivé");
  // enleve ttes les infos du user
  localStorage.removeItem("user");
  // verif si token plus lo
  console.log("Token disparu dans l'infinité ", localStorage.getItem("user")); // Affiche le token après la déconnexion
  // dispatch du succes de logout
  dispatch(logoutSuccess());
};
