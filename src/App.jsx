import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="sketchfab-embed-wrapper">
        {" "}
        <iframe
          title="my animated horse"
          frameborder="0"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/542a52062aae4101b8f2563a9ebf0355/embed"
        >
          {" "}
        </iframe>{" "}
      </div>
    </div>
  );
}

export default App;
