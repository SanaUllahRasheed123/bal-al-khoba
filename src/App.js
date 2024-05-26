import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Collection from "./components/Collection";
import Catagories from "./components/Catagories";
import Features from "./components/Features";
import NewCollections from "./components/NewCollections";
import Shelter from "./components/Shelter";
import FooterLinks from "./components/FooterLinks";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Collection />
      <Catagories />
      <Features />
      <NewCollections />
      <Shelter />
      <FooterLinks />
    </div>
  );
};

export default App;
