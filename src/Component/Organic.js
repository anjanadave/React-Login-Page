import Exotic from './Exotic';


const Organic = () => {
    return (
        <>
            <div className="w-full h-[100vh] mt-[15vh] ">
                <h1 className="text-5xl text-gray-800 mx-[6%]">Our Organic Products</h1>
                <div className="flex mt-10">
                    <div className="h-[60vh] w-[20vw] product mt-[4vh] ml-[7vw] box">
                        <div className="organic1 border border-1 border-x-lime-500 border-t-lime-500">
                            <button type="button" className="bg-lime-600 h-8 w-28 rounded-lg my-3 ml-[12vw] text-white text-lg">Vegetable</button>
                        </div>
                        <div className="w-full">
                            <div className="h-[30vh] w-20vw text-start border border-1 border-x-lime-500 border-b-lime-500 rounded-b-lg">
                                <h1 className="text-3xl pt-5 text-gray-600 ml-5">Potatoes</h1>
                                <p className="text-gray-400 text-md px-4 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <div className="flex">
                                    <h2 className="text-xl font-medium ml-5 pt-5 text-gray-600">$7.99 / kg</h2>
                                    <button type="button" className="border border-1 border-orange-400 mt-5 px-4 py-1 ml-5 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[60vh] w-[20vw] product mt-[4vh] ml-6 box">
                        <div className="organic2 border border-1 border-x-lime-500 border-t-lime-500">
                        <button type="button" className="bg-lime-600 h-8 w-28 rounded-lg my-3 ml-[12vw] text-white text-lg">Vegetable</button>
                        </div>
                        <div className="w-full">
                            <div className="h-[30vh] w-20vw text-start border border-1 border-x-lime-500 border-b-lime-500 rounded-b-lg">
                                <h1 className="text-3xl pt-5 text-gray-600 ml-5">Parsely</h1>
                                <p className="text-gray-400 text-md px-4 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <div className="flex">
                                    <h2 className="text-xl font-medium ml-5 pt-5 text-gray-600">$7.99 / kg</h2>
                                    <button type="button" className="border border-1 border-orange-400 mt-5 px-4 py-1 ml-5 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[60vh] w-[20vw] product mt-[4vh] ml-6 box">
                        <div className="organic3 border border-1 border-x-lime-500 border-t-lime-500">
                        <button type="button" className="bg-lime-600 h-8 w-28 rounded-lg my-3 ml-[12vw] text-white text-lg">Vegetable</button>
                        </div>
                        <div className="w-full">
                            <div className="h-[30vh] w-20vw text-start border border-1 border-x-lime-500 border-b-lime-500 rounded-b-lg">
                                <h1 className="text-3xl pt-5 text-gray-600 ml-5">Tomatoes</h1>
                                <p className="text-gray-400 text-md px-4 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <div className="flex">
                                    <h2 className="text-xl font-medium ml-5 pt-5 text-gray-600">$7.99 / kg</h2>
                                    <button type="button" className="border border-1 border-orange-400 mt-5 px-4 py-1 ml-5 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[60vh] w-[20vw] product mt-[4vh] ml-6 box">
                        <div className="organic4 border border-1 border-x-lime-500 border-t-lime-500">
                        <button type="button" className="bg-lime-600 h-8 w-28 rounded-lg my-3 ml-[12vw] text-white text-lg">Vegetable</button>
                        </div>
                        <div className="w-full">
                            <div className="h-[30vh] w-20vw text-start border border-1 border-x-lime-500 border-b-lime-500 rounded-b-lg">
                                <h1 className="text-3xl pt-5 text-gray-600 ml-5">Bell Papper</h1>
                                <p className="text-gray-400 text-md px-4 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <div className="flex">
                                    <h2 className="text-xl font-medium ml-5 pt-5 text-gray-600">$7.99 / kg</h2>
                                    <button type="button" className="border border-1 border-orange-400 mt-5 px-4 py-1 ml-5 rounded-[30px] text-lime-500 font-medium hover:bg-orange-400 hover:text-white "><i className="fa-solid fa-bag-shopping text-lg text-lime-500 pr-4"></i>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         <Exotic/>
        </>
    )
}

export default Organic;
