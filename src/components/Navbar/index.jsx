import React from 'react'

const Navbar = () => {
  return (
     <section className='flex'>
    <div className="absolute -z-10 w-full h-full">
          <img className="w-full h-full"  src="./image/imgBackground1.png" alt="island" />
        </div>
        <div className="flex pt-6 px-8 w-full h-full">
          <img className="cursor-pointer" src="./image/iconLogoWhite1.png" alt="logo"/>
          <div className="flex w-[90%] justify-end gap-8 text-black cursor-pointer">
          <p className="hover:opacity-[50%]">все туры</p>
          <p className="hover:opacity-[50%]">отзывы</p>
          <p className="hover:opacity-[50%]">контакты</p>
          </div>
        </div>
        </section>
  )
}

export default Navbar;