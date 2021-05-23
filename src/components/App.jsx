import "../styles/index.scss";
import Recipes from "./Recipes.jsx";
import sword from "../images/swc-sword.jpg";
import swordSvg from "../images/sword.svg";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hai, React</h1>
        </section>
        <img src={sword} alt="sword" width="250" />
        <img src={swordSvg} alt="sword" width="250" />
        <Recipes />
      </main>
    </>
  );
};

export default App;
