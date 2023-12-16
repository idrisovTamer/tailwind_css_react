import React from 'react'

const Footer = () => {
  return (
  <section className='relative mt-[10%] w-full h-full flex'>
    <div className='absolute -z-10 w-full h-full'>
    <img className='w-auto h-auto' src='./image/imgForm1.png' alt='man'></img>
    </div>
    <div className='flex flex-row  pl-[40%] w-auto h-auto'>
      <div className='w-[50%] pt-[45px]'>
    <h6 className='text-[42px] leading-[70px] font-extrabold'>Оставьте заявку <br/>на бесплатную консультацию</h6>
    <p className='text-[18px] leading-[32px] font-normal pt-8'>Мы перезвоним вам <br/>в ближайшее время</p>
      </div>

      <div className='flex-col flex w-[50%] gap-4 pt-16 '>

      <input className='w-[284px] h-[67px] rounded-[38px] pl-8 border-[2px] border-cyan-100 ' type='text' placeholder='Ваше имя'/>
      <input className='w-[284px] h-[67px] rounded-[38px] pl-8 border-[2px] border-cyan-100 ' type='text' placeholder='+7 (_ _)_ _-_ _-_ _'/>
      <button className='w-[284px] h-[67px] rounded-[38px]  bg-cyan-500'>Отправить заявку</button>
      <p>Нажимая кнопку,вы даете согласие <br/>на <a className=' text-cyan-700' href='https://new.filmhd1080.quest/11370-1410-serial-klan-soprano-smotret-onlayn.html'>обработку персональных данных</a></p>
      </div>

    </div>
  </section>
  )
}

export default Footer;


