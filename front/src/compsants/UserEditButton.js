import { useState } from "react";

function UserEditButton({ onEditClick }) {
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("Tony");
  const [lastName, setLastName] = useState("Stark");

  const handleEditClick = () => {
    setEditing(true);
    onEditClick();
  };

  const handleSaveClick = () => {
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
              // type="button"
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
