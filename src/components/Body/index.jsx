import React, { useEffect, useState } from "react";
import Modal from "react-modal";
const Body = () => {

  const [openIsModal, setOpenIsModal] = useState(false);

  useEffect(() => {
    Modal.setAppElement('#root'); 
  }, []);
  const openModal = () => {
    setOpenIsModal(true);
  };
  const closeModal = () => {
    setOpenIsModal(false);


  };

  return (
    <section className=" lg:w-full lg:h-full lg:flex lg:flex-row flex-col sm:mt-[50px] md:mt-[70px] lg:mt-[150px] ">
      <div className=" relative lg:w-[50%]  lg:h-full h-[270px]">
        <div className="absolute -z-10 w-full h-full">
          <img
            className=" lg:pl-[5%] w-full h-full"

            src={`${process.env.PUBLIC_URL}/image/imgHawaii1.png`}
            alt="Hawaii"
            onError={(e) => {
              console.error("Error loading image:", e);
            }}
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
        <button
          onClick={openModal}
          className="sm:w-[271px] sm:h-[75px] rounded-[38px] border-[2px] border-cyan-500 text-cyan-500 focus:hover:bg-black lg:text-[20px] lg:font-semibold mt-2 w-[250px] h-[40px]"
        >
          Смотреть все
        </button>
        <Modal 
  className="bg-black w-full h-full flex justify-center items-center"
  isOpen={openIsModal}
  onRequestClose={closeModal}
>
  <div className="bg-white opacity-80 p-8 rounded-lg relative">
    <button 
      className="absolute top-0 right-0 text-gray-600 hover:text-gray-800"
      onClick={closeModal}
    >
      ❌
    </button>
    <h1 className="text-2xl font-bold mb-4">Заголовок</h1>
    <p className="text-gray-800">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
      recusandae amet. Adipisci, aut nulla? <br />
      Reiciendis eaque sunt cupiditate soluta perferendis eveniet
      distinctio, reprehenderit magni! Sint saepe deleniti nihil
      praesentium libero.
    </p>
  </div>
</Modal>
      </div>
    </section>
  );
};

export default Body;
