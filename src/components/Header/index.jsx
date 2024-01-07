import React from "react";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <section className=" w-full h-full relative">
       <div className="absolute -z-10 w-full sm:h-full h-[270px] ">
         
          <img className="w-full h-full bg-center bg-auto	" src={`${process.env.PUBLIC_URL}/image/imgBackground1.png`} alt="island" />
        </div>
      <div className="flex  flex-col pl-8 justify-between gap-2 lg:pb-40 pb-24">
      <Navbar/>

        <h1 className="lg:font-bold lg:text-[70px] lg:leading-[95px] text-cyan-50 font-medium text-[30px] leading-[40px]">
          Открой для себя
          <br />
          Новую Ирландию
        </h1>
        <h3 className="lg:font-normal lg:text-[25px] lg:leading-[45px] text-cyan-50 font-light">
          Авторские туры по экзотическим <br /> уголкам от Ивана Иванова
        </h3>

        <button className=" sm:w-[290px] sm:h-[75px] rounded-[38px] bg-cyan-500 focus:hover:bg-black text-cyan-50 sm:text-[20px] sm:font-semibold	 font-normal w-[170px] h-[45px] text-[15px] mt-3">
          Оставить заявку
        </button>
      </div>
    </section>
  );
};

export default Header;
