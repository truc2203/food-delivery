import React from 'react'
import Delivery from "../assets/delivery.png";
import HeroBg from '../assets/heroBg.png'
const HomeContainer = () => {
  return (
    <>
     <section id='home' className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6 ">
          <div className="flex items-center justify-center gap-2 bg-orange-200 px-4 py-1 rounded-full">
            <p className="text-base font-semibold text-orange-500">
              Bike Delivery
            </p>
            <div className="w-6 h-6 rounded-full overflow-hidden drop-shadow-xl">
              <img
                src={Delivery}
                alt="delivery"
                className="w-full h-full object-contain bg-white"
              />
            </div>
          </div>

          <p className="text-[3rem] md:text-[2.5rem] lg:text-[5.5rem] font-bold leading-normal tracking-wide text-slate-900">
            The Fastest Delivery In{" "}
            <span className="text-orange-500 text-[3.75rem] md:text-[3.25rem] lg:text-[6.25rem]">Your City</span>
          </p>
          <p className="text-base text-center md:text-left md:w-[80%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, omnis! Facere harum, voluptatem fuga magnam illum impedit? Tempora dolor voluptates voluptate temporibus, voluptatem corrupti fugit labore est, amet quidem molestias!</p>
          <button type="button" className="button-theme w-full md:w-auto px-4 py-2 rounded-lg">Order Now</button>
        </div>


        <div className="py-2 flex-1 flex items-center">
            <img src={HeroBg} alt="hero-bg" className='ml-auto h-420 lg:h-650 w-full lg:w-auto' />
            <div className='w-auto h-full absolute flex items-center justify-center'></div>
        </div>
      </section>    
    </>
  )
}

export default HomeContainer