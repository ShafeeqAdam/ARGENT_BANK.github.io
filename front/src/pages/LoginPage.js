import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/authActions";
import { loginSuccess } from "../Redux/authReducers";
import "./styles/main.css";
import { fetchUserProfile } from "../Redux/fetchProfile";
import { selectIsAuthenticated } from "../Redux/selector";
import { selectLoginError } from "../Redux/selector";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  // pour utiliser dispatch et navigate
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useSelector vient extraire la valeur de isAuth, state maj par le reducer a chaque fois que le state change

  const isAuthenticated = useSelector(selectIsAuthenticated);
  // même chose mais avec errooooooor

  const loginError = useSelector(selectLoginError);
  // divers state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // va etre la pour l'alerte, on mettra son etat a jour pour suivre les tentatives de co echoué
  const [hasAttemptedLogin, setHasAttemptedLogin] = useState(false);
  // pareil mais quelle ai reussis ou echoué
  const [submitAttempted, setSubmitAttempted] = useState(false);
  // func async quand le user click sur le bouton de co
  const handleLogin = async () => {
    // const avec les infos de co
    const user = {
      email: username,
      password: password,
    };
    // ptite verif qui va bien
    console.log("mail du user ", username, "mdp du user", password);
    // ptite verif qui va bien
    console.log("Button clicked");
    // reste a false
    setHasAttemptedLogin(false);
    // dispatch de login avec user
    await dispatch(login(user));
    // met à jour l'état pour dire que le user a essayé et réussis à se co
    setSubmitAttempted(true);
  };

  useEffect(() => {
    // utile pour affichage de l'alerte
    // si erreur pendant tentatives de co, alors a essayé de se co est vrai
    if (loginError && submitAttempted) {
      setHasAttemptedLogin(true);
    } else {
      // si pas d'erreur pendant tentative de co alors a essayé de se co est sans erreur faux
      setHasAttemptedLogin(false);
    }
  }, [loginError, submitAttempted]);

  useEffect(() => {
    if (isAuthenticated) {
      console.log("useE bien la ");
      console.log("user co", isAuthenticated);
      // dispatch du succes
      dispatch(loginSuccess());
      dispatch(fetchUserProfile());
      console.log("Bouton clikéé bienvenu à bord !");
      //////////

      // et rediiiiiiirection
      navigate("/user");
    } else {
      // si tentative de co foirée
      if (hasAttemptedLogin) {
        // affichage magique
        window.alert(loginError);
        // maj de ca pcq j'avais des alertes en pagaille
        setSubmitAttempted(false);
      }
    }
  }, [
    isAuthenticated,
    navigate,
    dispatch,
    username,
    password,
    hasAttemptedLogin,
    loginError,
  ]);

  return (
    <div className="body">
      <main className="main bg-dark">
        <LoginForm
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      </main>
    </div>
  );
}

export default LoginPage;
