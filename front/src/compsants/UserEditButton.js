import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "../Redux/updateUserProfile";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function UserEditButton({ onEditClick }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  // console.log(user);

  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState("");
  // const [firstName] = useState(user ? user.firstName : "");
  // const [lastName] = useState(user ? user.lastName : "");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
    }
  }, [user]);

  const handleEditClick = () => {
    setEditing(true);
    onEditClick();
  };

  const handleSaveClick = () => {
    dispatch(updateUserProfile(username));
    // Effectuer les actions nécessaires pour sauvegarder les modifications
    setEditing(false);
  };

  const handleCancelClick = () => {
    // Effectuer les actions nécessaires pour annuler les modifications
    setEditing(false);
  };

  const editSubmit = (event) => {
    event.preventDefault();

    // Mettre à jour les informations de l'utilisateur ici
    setEditing(false);
  };

  return (
    <div>
      {!editing && (
        <button className="edit-button" onClick={handleEditClick}>
          Edit Name
        </button>
      )}
      {editing && (
        <form onSubmit={editSubmit}>
          <label>
            User Name:
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label>
            First Name:
            <input type="text" value={firstName} disabled />
          </label>
          <label>
            Last Name:
            <input type="text" value={lastName} disabled />
          </label>
          <div>
            <button
              className="edit-button"
              type="submit"
              onClick={handleSaveClick}
            >
              Save
            </button>
            <button
              className="edit-button"
              // type="button"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default UserEditButton;
