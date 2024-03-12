import React from 'react';
import Customer from './Customer';

const Seller = () => {
    return (
        <>
            <div className="text-center mt-[15vh] ">
                <h1 className="text-6xl text-gray-700 font-bold">Bestseller Products</h1>
                <p className="text-lg text-gray-500 mt-5">Latin words, combined with a handful of model sentence structures, to generate Lorem<br></br> Ipsum which looks reasonable.</p>
            </div>
            {/* first section here */}
            <div className="w-full flex">
                <div className="w-[27vw] h-[30vh] bg-gray-100 rounded-md ml-[7vw] mt-[10vh]">
                    <div className='flex'>
                        <div className=''>
                            <img src="https://themewagon.github.io/fruitables/img/best-product-1.jpg" alt="" className='h-[24vh] w-[12vw] rounded-full mt-5 ml-5' />
                        </div>
                        <div className="">
                            <h1 className='text-gray-700 text-xl ml-6 mt-7 hover:text-lime-500'>Organic Orange</h1>
                            <i className="fa-solid fa-star ml-6 mt-5 text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-gray-500"></i>
                            <h2 className='ml-6 mt-5 text-lg font-bold text-gray-600'><span className='text-xl'>3</span>.12<span className='text-xl'> $</span></h2>
                            <button type="button" className="border border-1 border-orange-400 mt-4 px-4 py-1 ml-5 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="w-[27vw] h-[30vh] bg-gray-100 rounded-md ml-[2vw] mt-[10vh]">
                    <div className='flex'>
                        <div className=''>
                            <img src="https://themewagon.github.io/fruitables/img/best-product-2.jpg" alt="" className='h-[24vh] w-[12vw] rounded-full mt-5 ml-5' />
                        </div>
                        <div className="">
                            <h1 className='text-gray-700 text-xl ml-6 mt-7 hover:text-lime-500'>Organic Raspberries</h1>
                            <i className="fa-solid fa-star ml-6 mt-5 text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-gray-500"></i>
                            <h2 className='ml-6 mt-5 text-lg font-bold text-gray-600'><span className='text-xl'>3</span>.12<span className='text-xl'> $</span></h2>
                            <button type="button" className="border border-1 border-orange-400 mt-4 px-4 py-1 ml-5 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="w-[27vw] h-[30vh] bg-gray-100 rounded-md ml-[2vw] mt-[10vh]">
                    <div className='flex'>
                        <div className=''>
                            <img src="https://themewagon.github.io/fruitables/img/best-product-3.jpg" alt="" className='h-[24vh] w-[12vw] rounded-full mt-5 ml-5' />
                        </div>
                        <div className="">
                            <h1 className='text-gray-700 text-xl ml-6 mt-7 hover:text-lime-500'>Organic Banana</h1>
                            <i className="fa-solid fa-star ml-6 mt-5 text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-gray-500"></i>
                            <h2 className='ml-6 mt-5 text-lg font-bold text-gray-600'><span className='text-xl'>3</span>.12<span className='text-xl'> $</span></h2>
                            <button type="button" className="border border-1 border-orange-400 mt-4 px-4 py-1 ml-5 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                        </div>
                    </div>
                </div>

            </div>

         {/* second section here */}
          
         <div className="w-full flex">
                <div className="w-[27vw] h-[30vh] bg-gray-100 rounded-md ml-[7vw] mt-[4vh]">
                    <div className='flex'>
                        <div className=''>
                            <img src="https://themewagon.github.io/fruitables/img/best-product-4.jpg" alt="" className='h-[24vh] w-[12vw] rounded-full mt-5 ml-5' />
                        </div>
                        <div className="">
                            <h1 className='text-gray-700 text-xl ml-6 mt-7 hover:text-lime-500'>Organic peach</h1>
                            <i className="fa-solid fa-star ml-6 mt-5 text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-gray-500"></i>
                            <h2 className='ml-6 mt-5 text-lg font-bold text-gray-600'><span className='text-xl'>3</span>.12<span className='text-xl'> $</span></h2>
                            <button type="button" className="border border-1 border-orange-400 mt-4 px-4 py-1 ml-5 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="w-[27vw] h-[30vh] bg-gray-100 rounded-md ml-[2vw] mt-[4vh]">
                    <div className='flex'>
                        <div className=''>
                            <img src="https://themewagon.github.io/fruitables/img/best-product-5.jpg" alt="" className='h-[24vh] w-[12vw] rounded-full mt-5 ml-5' />
                        </div>
                        <div className="">
                            <h1 className='text-gray-700 text-xl ml-6 mt-7 hover:text-lime-500'>Organic grapes</h1>
                            <i className="fa-solid fa-star ml-6 mt-5 text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-gray-500"></i>
                            <h2 className='ml-6 mt-5 text-lg font-bold text-gray-600'><span className='text-xl'>3</span>.12<span className='text-xl'> $</span></h2>
                            <button type="button" className="border border-1 border-orange-400 mt-4 px-4 py-1 ml-5 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="w-[27vw] h-[30vh] bg-gray-100 rounded-md ml-[2vw] mt-[4vh]">
                    <div className='flex'>
                        <div className=''>
                            <img src="https://themewagon.github.io/fruitables/img/best-product-6.jpg" alt="" className='h-[24vh] w-[12vw] rounded-full mt-5 ml-5' />
                        </div>
                        <div className="">
                            <h1 className='text-gray-700 text-xl ml-6 mt-7 hover:text-lime-500'>Organic Apple</h1>
                            <i className="fa-solid fa-star ml-6 mt-5 text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-gray-500"></i>
                            <h2 className='ml-6 mt-5 text-lg font-bold text-gray-600'><span className='text-xl'>3</span>.12<span className='text-xl'> $</span></h2>
                            <button type="button" className="border border-1 border-orange-400 mt-4 px-4 py-1 ml-5 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex'>
                <div className=''>
                    <img src='https://themewagon.github.io/fruitables/img/best-product-1.jpg' alt='' className='h-[27vh] w-[20vw] rounded-2xl mt-6 ml-[7vw]'/>
                </div>
                <div className=''>
                    <img src='https://themewagon.github.io/fruitables/img/fruite-item-2.jpg' alt='' className='h-[27vh] w-[20vw] rounded-2xl mt-6 ml-6'/>
                </div>
                <div className=''>
                    <img src='https://themewagon.github.io/fruitables/img/fruite-item-3.jpg' alt='' className='h-[27vh] w-[20vw] rounded-2xl mt-6 ml-6'/>
                </div>
                <div className=''>
                    <img src='https://themewagon.github.io/fruitables/img/fruite-item-4.jpg' alt='' className='h-[27vh] w-[20vw] rounded-2xl mt-6 ml-6'/>
                </div>
            </div>
            <div className='flex'>
                <div className='text-center ml-[12vw]'>
                <h1 className='text-gray-700 text-xl mt-7 hover:text-lime-500'>Organic Orange</h1>
                            <i className="fa-solid fa-star mt-5 text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-gray-500"></i>
                            <h2 className=' mt-5 text-lg font-bold text-gray-600'><span className='text-xl'>3</span>.12<span className='text-xl'> $</span></h2>
                            <button type="button" className="border border-1 border-orange-400 mt-4 px-4 py-1 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                </div>
                <div className='text-center  ml-[12vw]'>
                <h1 className='text-gray-700 text-xl  mt-7 hover:text-lime-500'>Organic Raspberries</h1>
                            <i className="fa-solid fa-star mt-5 text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-gray-500"></i>
                            <h2 className=' mt-5 text-lg font-bold text-gray-600'><span className='text-xl'>3</span>.12<span className='text-xl'> $</span></h2>
                            <button type="button" className="border border-1 border-orange-400 mt-4 px-4 py-1 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                </div>
                <div className='text-center  ml-[12vw]'>
                <h1 className='text-gray-700 text-xl  mt-7 hover:text-lime-500'>Organic Banana</h1>
                            <i className="fa-solid fa-star mt-5 text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-gray-500"></i>
                            <h2 className=' mt-5 text-lg font-bold text-gray-600'><span className='text-xl'>3</span>.12<span className='text-xl'> $</span></h2>
                            <button type="button" className="border border-1 border-orange-400 mt-4 px-4 py-1 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                </div>
                <div className='text-center  ml-[12vw]'>
                <h1 className='text-gray-700 text-xl  mt-7 hover:text-lime-500'>Organic Peach</h1>
                            <i className="fa-solid fa-star mt-5 text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-lime-500"></i>
                            <i className="fa-solid fa-star text-gray-500"></i>
                            <h2 className=' mt-5 text-lg font-bold text-gray-600'><span className='text-xl'>3</span>.12<span className='text-xl'> $</span></h2>
                            <button type="button" className="border border-1 border-orange-400 mt-4 px-4 py-1 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                </div>
            </div>
         <Customer/>
        </>
    )
}

export default Seller;
