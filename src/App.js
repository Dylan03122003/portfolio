import React from "react";

import "./App.scss";
import { Navbar } from "./components";
import { Footer, Header, Skills, Work } from "./container";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    {/* <About /> */}
    <Work />
    <Skills />
    <Footer />
  </div>
);

export default App;
