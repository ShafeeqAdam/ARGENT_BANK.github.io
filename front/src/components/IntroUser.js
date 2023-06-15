import "../pages/styles/main.css";
import UserEditButton from "./UserEditButton";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/selector";

function IntroUser() {
  const handleEditClick = () => {
    console.log("Edit cliqué !");
  };

  const user = useSelector(selectUser);

  // rendu welcome dynamique
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
