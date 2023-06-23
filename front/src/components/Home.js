import "../pages/styles/main.css";
import chatIcon from "../pages/img/icon-chat.png";
import moneyIcon from "../pages/img/icon-money.png";
import securityIcon from "../pages/img/icon-security.png";
import HomeItems from "./HomeItems";

/* Legere modif suite à la soutenance, import et intégration du composants
HomeItems*/

function Home() {
  return (
    <div>
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <HomeItems
            imageSrc={chatIcon}
            imageAlt="Chat Icon"
            title="You are our #1 priority"
          >
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </HomeItems>
          <HomeItems
            imageSrc={moneyIcon}
            imageAlt="Money Icon"
            title="More savings means higher rates"
          >
            The more you save with us, the higher your interest rate will be!
          </HomeItems>
          <HomeItems
            imageSrc={securityIcon}
            imageAlt="Security Icon"
            title="Security you can trust"
          >
            We use top of the line encryption to make sure your data and money
            is always safe.
          </HomeItems>
        </section>
      </main>
    </div>
  );
}
export default Home;
