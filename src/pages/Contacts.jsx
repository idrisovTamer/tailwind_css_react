import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Contacts = () => {
  const location = useLocation();

  const isContactsPage = location.pathname === '/contacts'
  return (
  <>
  <div className={`${isContactsPage ? 'bg-slate-200 min-h-screen gap-10 flex flex-col relative' : 'hidden'}`}>
    <div className='flex flex-col items-center gap-2 md:gap-6 pt-10'>
    <img className='w-[45%] md:w-[35%] rounded-full' src={`${process.env.PUBLIC_URL}/image/wolf.JPG`} alt='wolf'></img>
    <h1 className='md:text-2xl md:font-bold font-semibold text-lime-950'>Контакты</h1>
    <p className=' text-center  md:font-bold text-lime-950'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Corporis animi mollitia illum ex natus, provident tempore dolorum nesciunt. <br/>Deleniti cupiditate qui, eveniet optio necessitatibus maxime distinctio recusandae nam possimus dignissimos?</p>
    </div>
    <div className='flex justify-around bg-slate-400 w-auto h-auto'>
    <div className='mx-auto'>
      <p>Lorem ipsum dolor sit amet</p>
      <p>Corporis animi mollitia illum ex natus</p>
    </div>

    <div className='mx-auto'>

    <p>Телефонн</p>
    <p>+799999999</p>
    <p>+793242354</p>

    </div>
    </div>
 <Link to='/tailwind_css_react'><button className='absolute text-red-500 top-0 left-0'>Назад</button></Link>
  </div>
  </>
  )
}

export default Contacts;

