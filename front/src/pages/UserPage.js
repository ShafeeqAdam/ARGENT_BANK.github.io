import React from "react";
import "./styles/main.css";
import IntroUser from "../compsants/IntroUser";
import UserAccount from "../compsants/UserAccount";

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
