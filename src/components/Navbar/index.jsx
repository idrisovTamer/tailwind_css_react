import React from 'react'

const Navbar = () => {
  return (
     <section className='flex'>
   
        <div className="flex pt-6 px-8 w-full h-full">
          <img className="cursor-pointer hidden sm:flex" src="./image/iconLogoWhite1.png" alt="logo"/>
          <div className=" sm:flex sm:w-[90%] sm:justify-end sm:gap-8 sm:text-black sm:cursor-pointer hidden	">
          <p className="hover:opacity-[50%]">все туры</p>
          <p className="hover:opacity-[50%]">отзывы</p>
          <p className="hover:opacity-[50%]">контакты</p>
          </div>
        </div>
        </section>
  )
}

export default Navbar;