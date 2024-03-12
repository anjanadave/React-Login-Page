import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='h-[80vh] w-full bg-teal-900 pt-[12vh] mt-[20vh]'>
                <div className='flex'>
                    <div className='pl-[7vw] '>
                        <h1 className='text-lime-500 text-4xl font-semibold'>Fruitables</h1>
                        <p className='text-orange-400'>Fresh Products</p>
                    </div>
                    <div className=''>
                        <input type="text" placeholder="Your Email" readOnly className="h-[7vh] w-[40vw] my-5  rounded-full pl-4 text-xl absolute ml-[13vw]" />
                        <button type="button" className="bg-lime-500 text-white h-[7vh] w-[10vw] my-5 rounded-full font-bold relative ml-[43vw] hover:bg-amber-500">Subscribe Now</button>
                    </div>
                    <div className='text-amber-500 text-xl ml-[8vw] mt-7 '>
                    <i className="fa-brands fa-twitter border border-1 border-amber-500 rounded-full p-3 ml-2 hover:bg-amber-500 hover:text-black"></i>
                    <i className="fa-brands fa-facebook-f w-12 text-center border border-1 border-amber-500 rounded-full p-3 ml-2 hover:bg-amber-500 hover:text-black"></i>
                    <i className="fa-brands fa-youtube border border-1 border-amber-500 rounded-full p-3 ml-2 hover:bg-amber-500 hover:text-black"></i>
                    <i className="fa-brands fa-linkedin-in border border-1 border-amber-500 rounded-full p-3 ml-2 hover:bg-amber-500 hover:text-black"></i>
                    </div>
                </div>
                <div className='bg-orange-400 h-[1px] w-[85vw] mt-7 ml-[7vw]'></div>
                <div className='flex'>
                    <div className='w-[21vw] ml-[7vw] mt-6'>
                        <h1 className='text-white text-2xl'>Why People Like us!</h1>
                        <p className='text-gray-400 text-md mt-5'>typesetting, remaining essentially</p>
                        <p className='text-gray-400 text-md mt-1'>unchanged. It was popularised in the</p>
                        <p className='text-gray-400 text-md mt-1'>1960s with the like Aldus PageMaker</p>
                        <p className='text-gray-400 text-md mt-1'>including of Lorem Ipsum.</p>
                        <button className='text-lime-500 border border-1 border-orange-400 px-5 py-2 rounded-3xl mt-5 font-semibold hover:bg-orange-400 hover:text-white'>Read More</button>
                    </div>
                    <div className='w-[21vw] mt-6'>
                        <h1 className='text-white text-2xl'>Shop Info</h1>
                        <p className='text-gray-400 text-md mt-5 hover:text-orange-400'>About Us</p>
                        <p className='text-gray-400 text-md mt-1 hover:text-orange-400'>Contact Us</p>
                        <p className='text-gray-400 text-md mt-1 hover:text-orange-400'>Privacy Policy</p>
                        <p className='text-gray-400 text-md mt-1 hover:text-orange-400'>Terms & Condition</p>
                        <p className='text-gray-400 text-md mt-1 hover:text-orange-400'>Return Policy</p>
                        <p className='text-gray-400 text-md mt-1 hover:text-orange-400'>FAQs & Help</p>
                    </div>
                    <div className='w-[21vw] mt-6'>
                        <h1 className='text-white text-2xl'>Account</h1>
                        <p className='text-gray-400 text-md mt-5 hover:text-orange-400'>My Account</p>
                        <p className='text-gray-400 text-md mt-1 hover:text-orange-400'>Shop details</p>
                        <p className='text-gray-400 text-md mt-1 hover:text-orange-400'>Shopping Cart</p>
                        <p className='text-gray-400 text-md mt-1 hover:text-orange-400'>Wishlist</p>
                        <p className='text-gray-400 text-md mt-1 hover:text-orange-400'>Order History</p>
                        <p className='text-gray-400 text-md mt-1 hover:text-orange-400'>International Orders</p>
                    </div>
                    <div className='w-[21vw] mt-6'>
                        <h1 className='text-white text-2xl'>Contact</h1>
                        <p className='text-gray-400 text-md mt-5'>Address: 1429 Netus Rd, NY 48247</p>
                        <p className='text-gray-400 text-md mt-1'>Email: Example@gmail.com</p>
                        <p className='text-gray-400 text-md mt-1'>Phone: +0123 4567 8910</p>
                        <p className='text-gray-400 text-md mt-1'>Payment Accepted</p>
                        <img src='https://themewagon.github.io/fruitables/img/payment.png' alt='' className='mt-5'/>
                    </div>
                </div>
                <div className='flex'>
                    <p className='text-white mt-20 text-lg ml-[6vw]'>ⓒ<span className='text-lime-500 hover:text-lime-600'>Your Site Name,</span> All right reserved.</p>
                    <p className='text-white mt-20 text-lg ml-[38vw]'>Designed By<span className='text-lime-500 underline decoration-gray-500'> Anjana Dave</span> Distributed By <span className='text-lime-500 underline decoration-solid decoration-gray-500'>ThemeWagon</span></p>
                </div>
            </div>
        </>
    )
}

export default Footer;
