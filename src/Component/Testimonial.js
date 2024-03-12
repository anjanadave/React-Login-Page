import React from 'react'
import Footer from './Footer'

const Testimonial = () => {
    return (
        <>
            <div className='mt-[20vh] text-center'>
                <h1 className='text-2xl text-lime-500 font-semibold'>Our Testimonial</h1>
                <h2 className='text-5xl mt-3 text-gray-600 font-bold'>Our Client Saying!</h2>
            </div>
            <div className='flex'>
                <div className='bg-gray-100 h-[35vh] w-[42vw] rounded-xl mt-[8vh] ml-[7vw]'>
                    <p className='text-gray-500 text-lg mt-6 mx-8'>Lorem Ipsum is simply dummy text of the printing Ipsum has been the<br></br>industry's standard dummy text ever since the 1500s,</p>
                    <div className='bg-orange-400 h-[1px] w-[38vw] mt-7 ml-8'></div>
                    <div className='flex'>
                        <div className=''>
                            <img src='https://themewagon.github.io/fruitables/img/testimonial-1.jpg' alt='' className='rounded-lg mt-6 ml-7' />
                        </div>
                        <div className=''>
                            <h1 className='ml-6 text-2xl text-gray-600 font-semibold mt-6'>Client Name</h1>
                            <h2 className='text-lg text-gray-500 ml-6 mt-2'>Profession</h2>
                            <i className="fa-solid fa-star ml-6 mt-3 text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-gray-500"></i>
                        </div>
                        <div className=''>
                        <i class="fa-solid fa-quote-right text-5xl text-orange-400 ml-[18vw] mt-[7vh]"></i>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-100 h-[35vh] w-[42vw] rounded-xl mt-[8vh] ml-[1vw]'>
                    <p className='text-gray-500 text-lg mt-6 mx-8'>Lorem Ipsum is simply dummy text of the printing Ipsum has been the<br></br>industry's standard dummy text ever since the 1500s,</p>
                    <div className='bg-orange-400 h-[1px] w-[38vw] mt-7 ml-8'></div>
                    <div className='flex'>
                        <div className=''>
                            <img src='https://themewagon.github.io/fruitables/img/testimonial-1.jpg' alt='' className='rounded-lg mt-6 ml-7' />
                        </div>
                        <div className=''>
                            <h1 className='ml-6 text-2xl text-gray-600 font-semibold mt-6'>Client Name</h1>
                            <h2 className='text-lg text-gray-500 ml-6 mt-2'>Profession</h2>
                            <i className="fa-solid fa-star ml-6 mt-3 text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-gray-500"></i>
                        </div>
                        <div className=''>
                        <i class="fa-solid fa-quote-right text-5xl text-orange-400 ml-[18vw] mt-[7vh]"></i>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Testimonial
