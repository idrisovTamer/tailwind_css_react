import React from "react";

const Body = () => {
  return (
    <section className=" lg:w-full lg:h-full lg:flex lg:flex-row flex-col sm:mt-[50px] md:mt-[70px] lg:mt-[150px] ">
      <div className=" relative lg:w-[50%]  lg:h-full h-[270px]">
        <div className="absolute -z-10 w-full h-full">
          <img
            className=" lg:pl-[5%] w-full h-full"
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
          <div className=" lg:pt-[230px] lg:pb-[20px] pt-[130px]">
            <p className=" text-cyan-50">
              Большое ущелье <br />
              на острове Гавайи
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[1%] lg:gap-6 lg:pl-16 ml-12 sm:justify-center ">
        <h1 className="sm:text-[42px] sm:leading-[65px] sm:font-extrabold  text-[30px] leading-10 font-normal'">
          Посмотрите все <br /> направления туров
        </h1>
        <p className="font-normal sm:leading-[40px] sm:text-[18px] text-[12px] ml-2">
          Берега океанов и дикие пляжи с редкими <br />
          породами деревьев. Местная архитектура и <br />
          первозданный вид дикой природы
        </p>
        <button className="sm::w-[271px] sm:h-[75px] rounded-[38px] border-[2px] border-cyan-500 text-cyan-500 focus:hover:bg-black lg:text-[20px] lg:font-semibold mt-2 w-[250px] h-[40px]">
          Смотреть все
        </button>
      </div>
    </section>
  );
};

export default Body;
