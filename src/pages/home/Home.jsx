import React from "react";
import NavbarDropdown from "../../components/navbar/NavbarDropdown";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import LastAdded from "../../components/lastAdded/LastAdded";
import LastRegistered from "../../components/lastRegistered/LastRegistered";
import DropDownBar from "../../components/dropDownBar/DropDownBar";
import SearchSection from "../../components/searcSection/SearchSection";

const Home = () => {
  return (
    <>
      <NavbarDropdown />
      <Jumbotron />
      <div>
        <DropDownBar />
        <h2 className="max-w-screen-xl mx-auto p-4 text-2xl font-extrabold text-center">
          Trova il Tatuatore più vicino a te
        </h2>
        <SearchSection />
      </div>
      <h2 className="max-w-screen-xl mx-auto px-4 pt-8 text-4xl font-extrabold">
        Ultimi aggiunti dalla community
      </h2>
      <LastAdded />
      <h2 className="max-w-screen-xl mx-auto px-4 text-4xl font-extrabold">
        Ultimi creator registrati alla community
      </h2>
      <LastRegistered />
    </>
  );
};

export default Home;
