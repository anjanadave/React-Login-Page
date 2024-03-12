import React from 'react'
import Service from './Service'

const Header = () => {
  return (
    <>
       <div className="bg-orange-50 bg-cover bg-center my-4 sm:h-[75vh] lg:h-[75vh] md:h-auto w-full flex flex-col md:flex-row items-center justify-around">
                <div className="">
                    <h1 className="text-orange-400 text-2xl pb-5">100% Organic Foods</h1>
                    <h1 className="text-lime-500 text-7xl font-bold pb-5 leading-[80px]">Organic Veggies & <br></br>Fruits Foods</h1>
                    <div className="">
                        <input type="text" placeholder="search" readOnly className="h-[8vh] w-[40vw] my-5 border-2 border-orange-400 rounded-full pl-4 text-xl absolute" />
                        <button type="button" className="bg-lime-500 text-white h-[8vh] sm:h-[10vh] md:h-[8vh] w-[10vw] my-5 border border-orange-400 rounded-full font-bold relative ml-[30vw] hover:bg-amber-500">Submit Now</button>
                    </div>
                </div>
                <div className="">
                    <img src="https://themewagon.github.io/fruitables/img/hero-img-1.png" alt="" />
                </div>
            </div>
            <Service/>
    </>
  )
}

export default Header
