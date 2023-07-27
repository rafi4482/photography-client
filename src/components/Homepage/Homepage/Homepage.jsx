import React from "react";
import Banner from "../Banner/Banner";
import Navigation from "../Navigation/Navigation";
import PopularClasses from "../popularClasses/PopularClasses";
import PopularInstructors from "../popularInstructors/PopularInstructors";
import ImageGallery from "../Gallery/ImageGallery";
import Footer from "../../Footer/Footer";

const Homepage = () => {
  return (
    <>
      <Banner />
      <PopularClasses />
      <PopularInstructors />
      <ImageGallery />
    </>
  );
};

export default Homepage;
