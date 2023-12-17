import React from "react";

const Body = () => {
  return (
    <section className="relative mt-[10%] w-full h-full flex justify-around">
      <div className=" w-[50%] h-full">
        <div className="absolute -z-10">
          <img
            className=" pl-[5%]"
            src="./image/imgHawaii1.png"
            alt="Hawaii"
          ></img>
        </div>
        <div className=" flex pt-6 flex-col pl-[15%] ">
          <p className=" text-cyan-50">
            10-24
            <br />
            апреля
          </p>
          <div className=" pt-[230px]">
            <p className=" text-cyan-50">
              Большое ущелье <br />
              на острове Гавайи
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[1%] gap-6 pl-16 ">
        <h1 className="text-[42px] leading-[65px] font-extrabold">
          Посмотрите все <br /> направления туров
        </h1>
        <p className="font-normal leading-[40px] text-[18px]">
          Берега океанов и дикие пляжи с редкими <br />
          породами деревьев. Местная архитектура и <br />
          первозданный вид дикой природы
        </p>
        <button className="w-[271px] h-[75px] rounded-[38px] border-[2px] border-cyan-500 text-cyan-500 focus:hover:bg-black text-[20px] font-semibold  ">
          Смотреть все
        </button>
      </div>
    </section>
  );
};

export default Body;
