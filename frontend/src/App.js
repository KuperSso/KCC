import "./index.css";
import React, { useState, useEffect } from "react";
import Banner from "./widgets/Banner/Banner";
import OurMissions from "./widgets/CenterBlock/OurMissions/OurMission";
import OurWorks from "./widgets/CenterBlock/OurWorks/OurWorks";
import Reviews from "./widgets/CenterBlock/Reviews/Reviews";
import Price from "./widgets/CenterBlock/Price/Price";
import FreeConsultation from "./widgets/CenterBlock/FreeConsultation/FreeConsultation";
import Footer from "./widgets/Footer/Footer";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function App() {
  return (
    <PrimeReactProvider>
      <Banner />
      <div className="body">
        <OurMissions />
        <OurWorks />
        <Price />
        <Reviews />
        <FreeConsultation />
      </div>
      <Footer />
    </PrimeReactProvider>
  );
}
