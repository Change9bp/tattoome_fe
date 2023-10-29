import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import LastAdded from "../../components/lastAdded/LastAdded";
import LastRegistered from "../../components/lastRegistered/LastRegistered";

const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <h2 className="max-w-screen-xl mx-auto px-4 text-4xl font-extrabold">
        Ultimi aggiunti dalla community
      </h2>
      <LastAdded />
      <h2 className="max-w-screen-xl mx-auto px-4 text-4xl font-extrabold">
        Ultimi creator registrati dalla community
      </h2>
      <LastRegistered />
    </>
  );
};

export default Home;
