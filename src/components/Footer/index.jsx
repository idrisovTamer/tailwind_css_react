import React from 'react'

const Footer = () => {
  return (
  <section className='lg:relative pt-[50px] sm:mt-[50px] md:mt-[70px] lg:mt-[150px] lg:w-full lg:h-full lg:flex flex-col'>
    <div className=''>
    <div className='lg:absolute lg:-z-10 lg:w-full lg:h-full h-[270px]'>
    <img className='w-full h-full' src={`${process.env.PUBLIC_URL}/image/imgForm1.png`} alt='man'></img>
    </div>
    </div>
    <div className='lg:flex lg:justify-center lg:w-auto lg:h-auto lg:pb-24 lg:pl-[380px]'>
      <div className=' lg:pt-[45px] pl-[35px]'>
    <h6 className='sm:text-[42px] sm:leading-[65px] sm:font-extrabold  text-[30px] leading-10 font-normal'>Оставьте заявку <br/>на бесплатную<br/> консультацию</h6>
    <p className='text-[18px] leading-[32px] font-normal lg:pt-8 pt-3'>Мы перезвоним вам <br/>в ближайшее время</p>
      </div>

      <div className='flex-col flex gap-4 lg:pt-16 lg:pl-[50px] pt-5 pl-[30px]'>

      <input className='sm:w-[284px] sm:h-[67px]  w-[250px] h-[40px] rounded-[38px] pl-8 border-[2px] border-cyan-100 ' type='text' placeholder='Ваше имя'/>
      <input className='sm:w-[284px] sm:h-[67px]  w-[250px] h-[40px] rounded-[38px] pl-8 border-[2px] border-cyan-100 ' type='text' placeholder='+7 (_ _)_ _-_ _-_ _'/>
      <button className='sm:w-[284px] sm:h-[67px]  w-[250px] h-[40px] rounded-[38px] bg-cyan-500'>Отправить заявку</button>
      <p>Нажимая кнопку,вы даете согласие <br/>на <a className=' text-cyan-700' href='https://new.filmhd1080.quest/11370-1410-serial-klan-soprano-smotret-onlayn.html'>обработку персональных данных</a></p>
      </div>

    </div>
    
  </section>
  )
}

export default Footer;


