import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "../Redux/updateUserProfile";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectUser } from "../Redux/selector";

function UserEditButton({ onEditClick }) {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  // console.log(user);

  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState("");
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
  // ajout alerte, si pas de texte dans le input username
  const handleSaveClick = () => {
    if (!username) {
      alert("Please enter a username");

      return;
    }

    dispatch(updateUserProfile(username));
    setEditing(false);
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  const editSubmit = (event) => {
    event.preventDefault();

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
            ></input>
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
