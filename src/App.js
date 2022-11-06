import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="forest" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Morgane Lara and is{" "}
            <a
              href="https://github.com/MorganeLara/dictionary-project"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              open-sourced on GitHub{" "}
            </a>{" "}
            and{" "}
            <a
              href="https://app.netlify.com/sites/legendary-cascaron-cb1365/overview"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              hosted on Netlify{" "}
            </a>{" "}
          </small>
          <br />
          <small>
            Check out my other{" "}
            <a
              href="https://master--resplendent-crepe-28e0d1.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              project
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
