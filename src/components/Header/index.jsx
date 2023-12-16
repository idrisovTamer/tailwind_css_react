import React from "react";

const Header = () => {
  return (
    <section className=" w-full h-full">
      <div className="flex mt-[5%] flex-col pl-8 justify-between gap-6 pb-40">
        <h1 className="font-bold text-[70px] leading-[95px] text-cyan-50">
          Открой для себя
          <br />
          Новую Ирландию
        </h1>
        <h3 className="font-normal text-[25px] leading-[45px] text-cyan-50">
          Авторские туры по экзотическим <br /> уголкам от Ивана Иванова
        </h3>

        <button className="w-[22%] h-[75px] rounded-[38px] bg-cyan-500 focus:hover:bg-black text-cyan-50 text-[20px] font-semibold	">
          Оставить заявку
        </button>
      </div>
    </section>
  );
};

export default Header;
