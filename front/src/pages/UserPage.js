import React from "react";
import "./styles/main.css";
import IntroUser from "../components/IntroUser";
import UserAccount from "../components/UserAccount";

function UserPage() {
  return (
    <div className="body">
      <main className="main bg-dark">
        <IntroUser />
        <UserAccount />
      </main>
    </div>
  );
}

export default UserPage;
