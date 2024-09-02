import { useState } from "react";
import {
  originals,
  actions,
  trending,
  comedy,
  romance,
  horror,
  documentaries,
} from "./Urls";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards url={originals} title="Netflix Originals" />
      <Cards url={romance} title="Romance " isSmall />
      <Cards url={actions} title="Actions" isSmall />
      <Cards url={documentaries} title="Documentaries" isSmall />
      {/* <Cards url={horror} title="Horror" isSmall />
      <Cards url={trending} title="Trending" isSmall />
      <Cards url={comedy} title="Comedy" isSmall /> */}
      <Footer />
    </>
  );
}

export default App;
