import React from 'react'

const Info = () => {
  return (
    <section className="relative mt-[10%] w-full h-full flex justify-around">
    
    <div className="flex flex-col mt-[1%] gap-6 pl-16 ">
      <h1 className="text-[42px] leading-[65px] font-extrabold">
      Что пишут участники <br/>наших путешествий 
      </h1>
      <p className="font-normal leading-[40px] text-[18px]">
      87% участников приходят по личной <br/>рекомендации от друзей. А каждый 4-ый <br/>путешествует с нами более двух раз!
      </p>
      <button className="w-[271px] h-[75px] rounded-[38px] border-[2px] border-cyan-500 text-cyan-500 focus:hover:bg-black text-[20px] font-semibold  ">
      Читать отзывы
      </button>
    </div>
    <div className=" w-[50%] h-full mr-[15%]">
        <div className="absolute -z-10">
          <img
            className=" pl-[5%]"
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
          <div className=" pt-[230px]">
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