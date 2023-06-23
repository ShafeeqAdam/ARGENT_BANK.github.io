import "../pages/styles/main.css";
import UserAccountTransactions from "./UserAccountTransactions";

/* Legere modif suite à la soutenance, import et intégration du composants
UserAccountTransactions*/

function UserAccount() {
  return (
    <div>
      <h2 className="sr-only">Accounts</h2>
      <UserAccountTransactions
        title="Argent Bank Checking (x8349)"
        amount="$200,786,082.79"
        description="Available Balance"
      />
      <UserAccountTransactions
        title="Argent Bank Savings (x6712)"
        amount="$500,000,928.42"
        description="Available Balance"
      />
      <UserAccountTransactions
        title="Argent Bank Credit Card (x8349)"
        amount="$180,404.30"
        description="Current Balance"
      />
    </div>
  );
}

export default UserAccount;
