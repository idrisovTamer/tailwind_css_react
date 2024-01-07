import React from "react";
import { Link } from "react-router-dom";
import Contacts from "../../pages/Contacts";
import Reviews from "../../pages/Reviews";
import Tours from "../../pages/Tours";

const Navbar = () => {
  return (
    <section className="flex">
      <div className="flex pt-6 px-8 w-full h-full">
        <img
          className="cursor-pointer hidden sm:flex"
          src={`${process.env.PUBLIC_URL}/image/iconLogoWhite1.png`}
          alt="logo"
        />

        <ul className="sm:flex sm:w-[90%] sm:justify-end sm:gap-8 sm:text-black sm:cursor-pointer ">

         <Link to="/contacts"><Contacts/>контакты</Link>
         <Link to="/tours"> <Tours/>все туры</Link>
         <Link to="/reviews"><Reviews/>отзывы</Link>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
