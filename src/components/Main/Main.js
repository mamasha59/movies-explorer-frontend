import React from "react";
import AboutPtoject from '../AboutPtoject/AboutProject';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs'
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import './Main.css'

function Main(){
    return(
      <>
          <Header />
          <Promo />
          <AboutPtoject />
          <Techs />
          <AboutMe />
          <Footer />
      </>
    );
}
export default Main;