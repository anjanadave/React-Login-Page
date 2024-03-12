import Organic from "./Organic"

const Product = () => {
    
    return (
        <>
            <div className="flex flex-wrap justify-around align-middle  w-full ">
                <div className="text-5xl text-gray-800 mx-20">
                    <h1>Our Organic Products</h1>
                </div>
                <div className="flex flex-wrap space-x h-10 mt-5 cursor-pointer">
                    <button type="button" className="bg-orange-400 text-white px-4 py-2 rounded-[30px] mx-5">All Products</button>
                    <button type="button" className="bg-gray-100 text-gray-700 px-6 py-2 rounded-[30px]">Vegetables</button>
                    <button type="button" className="bg-gray-100 text-gray-700 px-8 py-2 rounded-[30px] ml-5">Fruits</button>
                    <button type="button" className="bg-gray-100 text-gray-700 px-8 py-2 rounded-[30px] ml-5">Bread</button>
                    <button type="button" className="bg-gray-100 text-gray-700 px-8 py-2 rounded-[30px] ml-5 mr-10">Meat</button>
                </div>
            </div>
            <div className="flex">
                <div className="h-[60vh] w-[20vw] product mt-[10vh] ml-[7vw] box">
                    <div className="product-img">
                        <button type="button" className="bg-orange-400 h-8 w-20 rounded-lg my-3 ml-3 text-white text-lg">Fruits</button>
                    </div>
                    <div className="w-full">
                        <div className="h-[30vh] w-20vw text-center border border-1 border-x-orange-400 border-b-orange-400 rounded-b-lg">
                            <h1 className="text-3xl pt-5 text-gray-600">Grapes</h1>
                            <p className="text-gray-400 text-md px-4 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="flex">
                                <h2 className="text-xl font-medium ml-6 pt-5 text-gray-600">$4.99 / kg</h2>
                                <button type="button" className="border border-1 border-orange-400 mt-5 px-4 py-1 ml-5 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[60vh] w-[20vw] product mt-[10vh] ml-6 box">
                    <div className="product-img">
                        <button type="button" className="bg-orange-400 h-8 w-20 rounded-lg my-3 ml-3 text-white text-lg">Fruits</button>
                    </div>
                    <div className="w-full">
                        <div className="h-[30vh] w-20vw text-center border border-1 border-x-orange-400 border-b-orange-400 rounded-b-lg">
                            <h1 className="text-3xl pt-5 text-gray-600">Grapes</h1>
                            <p className="text-gray-400 text-md px-4 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="flex">
                                <h2 className="text-xl font-medium ml-6 pt-5 text-gray-600">$4.99 / kg</h2>
                                <button type="button" className="border border-1 border-orange-400 mt-5 px-4 py-1 ml-5 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[60vh] w-[20vw] product mt-[10vh] ml-6 box">
                    <div className="product-img1">
                        <button type="button" className="bg-orange-400 h-8 w-20 rounded-lg my-3 ml-3 text-white text-lg">Fruits</button>
                    </div>
                    <div className="w-full">
                        <div className="h-[30vh] w-20vw text-center border border-1 border-x-orange-400 border-b-orange-400 rounded-b-lg">
                            <h1 className="text-3xl pt-5 text-gray-600">Raspberries</h1>
                            <p className="text-gray-400 text-md px-4 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="flex">
                                <h2 className="text-xl font-medium ml-6 pt-5 text-gray-600">$4.99 / kg</h2>
                                <button type="button" className="border border-1 border-orange-400 mt-5 px-4 py-1 ml-5 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[60vh] w-[20vw] product mt-[10vh] ml-6 box">
                    <div className="product-img2">
                        <button type="button" className="bg-orange-400 h-8 w-20 rounded-lg my-3 ml-3 text-white text-lg">Fruits</button>
                    </div>
                    <div className="w-full">
                        <div className="h-[30vh] w-20vw text-center border border-1 border-x-orange-400 border-b-orange-400 rounded-b-lg">
                            <h1 className="text-3xl pt-5 text-gray-600">Apricots</h1>
                            <p className="text-gray-400 text-md px-4 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="flex">
                                <h2 className="text-xl font-medium ml-6 pt-5 text-gray-600">$4.99 / kg</h2>
                                <button type="button" className="border border-1 border-orange-400 mt-5 px-4 py-1 ml-5 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          {/* second part */}
            <div className="flex">
                <div className="h-[60vh] w-[20vw] product mt-[4vh] ml-[7vw] box">
                    <div className="product-img4">
                        <button type="button" className="bg-orange-400 h-8 w-20 rounded-lg my-3 ml-3 text-white text-lg">Fruits</button>
                    </div>
                    <div className="w-full">
                        <div className="h-[30vh] w-20vw text-center border border-1 border-x-orange-400 border-b-orange-400 rounded-b-lg">
                            <h1 className="text-3xl pt-5 text-gray-600">Banana</h1>
                            <p className="text-gray-400 text-md px-4 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="flex">
                                <h2 className="text-xl font-medium ml-6 pt-5 text-gray-600">$4.99 / kg</h2>
                                <button type="button" className="border border-1 border-orange-400 mt-5 px-4 py-1 ml-5 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[60vh] w-[20vw] product mt-[4vh] ml-6 box">
                    <div className="product-img5">
                        <button type="button" className="bg-orange-400 h-8 w-20 rounded-lg my-3 ml-3 text-white text-lg">Fruits</button>
                    </div>
                    <div className="w-full">
                        <div className="h-[30vh] w-20vw text-center border border-1 border-x-orange-400 border-b-orange-400 rounded-b-lg">
                            <h1 className="text-3xl pt-5 text-gray-600">Oranges</h1>
                            <p className="text-gray-400 text-md px-4 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="flex">
                                <h2 className="text-xl font-medium ml-6 pt-5 text-gray-600">$4.99 / kg</h2>
                                <button type="button" className="border border-1 border-orange-400 mt-5 px-4 py-1 ml-5 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[60vh] w-[20vw] product mt-[4vh] ml-6 box">
                    <div className="product-img1">
                        <button type="button" className="bg-orange-400 h-8 w-20 rounded-lg my-3 ml-3 text-white text-lg">Fruits</button>
                    </div>
                    <div className="w-full">
                        <div className="h-[30vh] w-20vw text-center border border-1 border-x-orange-400 border-b-orange-400 rounded-b-lg">
                            <h1 className="text-3xl pt-5 text-gray-600">Raspberries</h1>
                            <p className="text-gray-400 text-md px-4 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="flex">
                                <h2 className="text-xl font-medium ml-6 pt-5 text-gray-600">$4.99 / kg</h2>
                                <button type="button" className="border border-1 border-orange-400 mt-5 px-4 py-1 ml-5 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[60vh] w-[20vw] product mt-[4vh] ml-6 box">
                    <div className="product-img">
                        <button type="button" className="bg-orange-400 h-8 w-20 rounded-lg my-3 ml-3 text-white text-lg">Fruits</button>
                    </div>
                    <div className="w-full">
                        <div className="h-[30vh] w-20vw text-center border border-1 border-x-orange-400 border-b-orange-400 rounded-b-lg">
                            <h1 className="text-3xl pt-5 text-gray-600">Grapes</h1>
                            <p className="text-gray-400 text-md px-4 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div className="flex">
                                <h2 className="text-xl font-medium ml-6 pt-5 text-gray-600">$4.99 / kg</h2>
                                <button type="button" className="border border-1 border-orange-400 mt-5 px-4 py-1 ml-5 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Organic/>
        </>
    )
}

export default Product
