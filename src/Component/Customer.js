import React from 'react';
import Testimonial from './Testimonial';

const Customer = () => {
    return (
        <>
            <div className="flex h-[53vh] w-[85vw] bg-gray-100 rounded-xl mt-[20vh] ml-[7vw] " >
                <div className='bg-white h-[40vh] w-[18vw] rounded-xl mt-[7vh] ml-[4vw] text-center'>
                    <i className="fa-solid fa-users text-6xl text-orange-400 mt-[8vh]"></i>
                    <h1 className='text-lime-500 text-2xl font-medium mt-5'>SATISFIED<br></br> CUSTOMERS</h1>
                    <p className='text-gray-600 text-3xl font-semibold mt-2'>1<span className='text-5xl align-text-top'>9</span><span className='text-5xl align-text-bottom'>6</span><span className='text-5xl align-text-top'>3</span></p>
                </div>
                <div className='bg-white h-[40vh] w-[18vw] rounded-xl mt-[7vh] ml-[1.5vw] text-center'>
                    <i className="fa-solid fa-users text-6xl text-orange-400 mt-[8vh]"></i>
                    <h1 className='text-lime-500 text-2xl font-medium mt-5'>QUALITY OF<br></br> SERVICE</h1>
                    <p className='text-gray-600 text-4xl font-semibold mt-2'>99<span className='text-4xl align-text-top'>%</span></p>
                </div>
                <div className='bg-white h-[40vh] w-[18vw] rounded-xl mt-[7vh] ml-[1.5vw] text-center'>
                    <i className="fa-solid fa-users text-6xl text-orange-400 mt-[8vh]"></i>
                    <h1 className='text-lime-500 text-2xl font-medium mt-5'>QUALITY<br></br> CERTIFICATES</h1>
                    <p className='text-gray-600 text-4xl font-semibold mt-2'>33</p>
                </div>
                <div className='bg-white h-[40vh] w-[18vw] rounded-xl mt-[7vh] ml-[1.5vw] text-center'>
                    <i className="fa-solid fa-users text-6xl text-orange-400 mt-[8vh]"></i>
                    <h1 className='text-lime-500 text-2xl font-medium mt-5'>AVAILABLE<br></br> PRODUCTS</h1>
                    <p className='text-gray-600 text-4xl font-semibold mt-2'>7<span className='text-4xl align-text-top'>8</span><span className='text-4xl align-text-bottom'>9</span></p>
                </div>
            </div>
            <Testimonial/>
        </>
    )
}

export default Customer;
