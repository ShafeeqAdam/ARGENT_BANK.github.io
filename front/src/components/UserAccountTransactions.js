import React from "react";

function UserAccountTransactions({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

export default UserAccountTransactions;

/* création de ce composant qui contient le bloc UserAccountTransactions, 
avec 3 props pour afficher les contenus respectifs, même remarque que pour le HomeItems 
t'aurais du y penser avant, pcq ça permet de rendre 
ta structure plus réutilisable */
