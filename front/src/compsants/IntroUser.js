import "../pages/styles/main.css";
import UserEditButton from "../compsants/UserEditButton";
import { useSelector } from "react-redux";

function IntroUser() {
  const handleEditClick = () => {
    console.log("Edit cliqué !");
  };
  // useSelector pour accéder à notre state global Redux
  const user = useSelector((state) => state.auth.user);

  // Générer un titre de bienvenue basé sur le nom d'utilisateur
  const welcomeTitle = user
    ? `Welcome back, ${user.firstName}!`
    : "Welcome back!";
  return (
    <div className="header">
      <h1>{welcomeTitle}</h1>
      <UserEditButton onEditClick={handleEditClick} />
    </div>
  );
}

export default IntroUser;
