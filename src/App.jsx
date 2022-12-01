import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="card">
        <model-viewer
          src="https://storage.googleapis.com/virtualia_shop/ar_models/France/Occitanie/Montauban/atelierchezsoi/atelierchezsoi/renard.glb"
          ios-src="https://storage.googleapis.com/virtualia_shop/ar_models/France/Occitanie/Montauban/atelierchezsoi/atelierchezsoi/renard-poly.usdz"
          poster=""
          alt="A 3D model of a fox"
          shadow-intensity="1"
          camera-controls=""
          auto-rotate=""
          ar=""
        ></model-viewer>
        <section classNAme="attribution">
          <span>
            <h2 style={{ textAlign: "center" }}>
              À voir en réalité augmentée sans modération
            </h2>
            <span>
              Credit:{" "}
              <a href="https://modelviewer.dev/" target="_blank" rel="noopener">
                Poly
              </a>
            </span>
            <a
              className="cc"
              href="https://creativecommons.org/licenses/by/2.0/"
              target="_blank"
              rel="noopener"
            >
              <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" />
              <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" />
            </a>
          </span>
        </section>
      </div>

      <footer id="footerAR">
        <span>
          This model is based on the{" "}
          <a
            href="https://github.com/GoogleWebComponents/model-viewer"
            target="_blank"
            rel="noopener"
          >
            &lt;model-viewer&gt;
          </a>{" "}
          web component.
        </span>
      </footer>
    </div>
  );
}

export default App;
