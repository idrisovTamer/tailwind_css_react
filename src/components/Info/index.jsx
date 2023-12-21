import React from 'react'

const Info = () => {
  return (
    <section className=" sm:mt-[50px] md:mt-[70px] lg:mt-[150px] w-full lg:h-full lg:flex lg:flex-row flex-col  ">
    
    <div className="flex flex-col mt-[1%] lg:gap-6 lg:pl-16 ml-8 sm:justify-center ">
      <h1 className="sm:text-[42px] sm:leading-[65px] sm:font-extrabold  text-[30px] leading-10 font-normal">
      Что пишут участники <br/>наших путешествий 
      </h1>
      <p className="ont-normal sm:leading-[40px] sm:text-[18px] text-[15px] ml-2">
      87% участников приходят по личной <br/>рекомендации от друзей. А каждый 4-ый <br/>путешествует с нами более двух раз!
      </p>
      <button className="sm::w-[271px] sm:h-[75px] rounded-[38px] border-[2px] border-cyan-500 text-cyan-500 focus:hover:bg-black lg:text-[20px] lg:font-semibold mt-2 w-[250px] h-[40px] ">
      Читать отзывы
      </button>
    </div>
    <div className="relative lg:w-[50%] lg:h-full pt-[20px] h-[270px] ">
        <div className="absolute -z-10 w-full h-full">
          <img
            className=" lg:pl-[5%] w-full h-full"
            src="./image/imgHawaii2.png"
            alt="Hawaii2"
          ></img>
        </div>
        <div className=" flex pt-6 flex-col pl-[15%] ">
          <p className=" text-cyan-50">
          Отзыв
            <br />
            Елена Иванова
          </p>
          <div className=" lg:pt-[230px] lg:pb-[20px] pt-[130px]">
            <p className=" text-cyan-50">
            Пожалуй, это был самый <br/>лучший отпуск в моей жизни...
            </p>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Info;