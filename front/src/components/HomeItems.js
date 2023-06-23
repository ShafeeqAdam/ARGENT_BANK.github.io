import React from "react";

function HomeItems({ imageSrc, imageAlt, title, children }) {
  return (
    <div className="feature-item">
      <img src={imageSrc} alt={imageAlt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export default HomeItems;

/* création de ce composant qui contient le bloc HomeItems, 
avec 4 props pour afficher les contenus respectifs, 
t'aurais du y penser avant, pcq ça permet de rendre 
ta structure plus réutilisable */
