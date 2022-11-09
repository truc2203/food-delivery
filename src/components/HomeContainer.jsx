import React from 'react'
import Delivery from "../assets/delivery.png";
import HeroBg from '../assets/heroBg.png'
import I1 from '../assets/i1.png'
import {heroData} from '../utils/data';

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
          <p className="text-lg text-center md:text-left md:w-[80%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, omnis! Facere harum, voluptatem fuga magnam illum impedit? Tempora dolor voluptates voluptate temporibus, voluptatem corrupti fugit labore est, amet quidem molestias!</p>
          <button type="button" className="button-theme w-full md:w-auto px-4 py-2 rounded-lg">Order Now</button>
        </div>


        <div className="py-2 flex-1 flex items-center relative">
            <img src={HeroBg} alt="hero-bg" className='ml-auto h-420 lg:h-650 w-full lg:w-auto' />
            <div className='w-full h-full  absolute top-0 left-0 flex items-center justify-center px-4 md:px-0 py-8 md:py-12 lg:py-16 gap-4 lg:gap-8  xl:gap-12 xl:px-16 flex-wrap'>
              {heroData.map((hero,i) => (
                <div key={i} className='drop-shadow flex flex-col items-center justify-center w-[148px] lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl'>
                <img src={hero.imgScr} alt="i1" className='w-16 md:w-24 lg:w-40 md:-mt-20'/>
                <p className='text-base lg:text-xl font-bold text-black'>{hero.name}</p>
                <p className='text-sm lg:text-lg text-slate-800 font-semibold'>{hero.desc}</p>
                <p className='text-sm lg:text-base font-semibold text-slate-800'><span className='text-red-500 text-sm'>$</span>{hero.price}</p>
              </div>
              ))}
            </div>
        </div>
      </section>    
    </>
  )
}

export default HomeContainer