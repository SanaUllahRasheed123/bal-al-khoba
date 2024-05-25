import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Collection from "./components/Collection";
import Catagories from "./components/Catagories";
import Features from "./components/Features";
import NewCollections from "./components/NewCollections";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Collection />
      <Catagories />
      <Features />
      <NewCollections />
    </div>
  );
};

export default App;
