import React from "react";
import AboutMe from "./AboutMe";
import Header from "./Header";
import { Reset } from "styled-reset";

function App() {
  return (
    <div>
      <Reset />
      <Header menu={["index1", "index2"]} />
      <AboutMe />
    </div>
  );
}

export default App;
