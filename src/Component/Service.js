import Product from "./Product"

const Service = () => {
    return (
      <>
        <div className="flex flex-wrap justify-center h-[70vh] w-full ">
          <div className="bg-gray-50 h-[38vh] w-[80vw] sm:w-[40vw] md:w-[20vw] lg:mt-[15vh] sm:mt-[15vh] md:mt-0 mx-2 md:mx-0 mt-[15vh] ml-[7vw] rounded-md ">
            <i className="fa-solid fa-car-side  bg-orange-400 text-white text-5xl rounded-[50%] p-10 mt-7 ml-[5.5vw] "></i>
            <h1 className="text-center text-2xl mt-5 font-sans">Free Shipping</h1>
            <h2 className="text-center text-gray-500 text-lg mt-3 font-sans">Free on order over $300</h2>
          </div>
  
          <div className="bg-gray-50 h-[38vh] w-[80vw] sm:w-[40vw] md:w-[20vw] lg:mt-[15vh] sm:mt-[15vh] md:mt-0 mx-2 md:mx-0 mt-[15vh] ml-[7vw] rounded-md lg:ml-[2vw]">
            <i className="fa-solid fa-user-shield  bg-orange-400 text-white text-5xl rounded-[50%] p-10 mt-7 ml-[5.5vw] "></i>
            <h1 className="text-center text-2xl mt-5 font-sans">Security Payment</h1>
            <h2 className="text-center text-gray-500 text-lg mt-3 font-sans">100% security payment</h2>
          </div>
  
          <div className="bg-gray-50 h-[38vh] w-[80vw] sm:w-[40vw] md:w-[20vw] lg:mt-[15vh] sm:mt-[15vh] md:mt-0 mx-2 md:mx-0 mt-[15vh] ml-[7vw] rounded-md lg:ml-[2vw]">
            <i className="fa-solid fa-arrow-right-arrow-left  bg-orange-400 text-white text-5xl rounded-[50%] p-10 mt-7 ml-[5.5vw] "></i>
            <h1 className="text-center text-2xl mt-5 font-sans">30 Day Return</h1>
            <h2 className="text-center text-gray-500 text-lg mt-3 font-sans">30 day money guarantee</h2>
          </div>
  
          <div className="bg-gray-50 h-[38vh] w-[80vw] sm:w-[40vw] md:w-[20vw] lg:mt-[15vh] sm:mt-[15vh] md:mt-0 mx-2 md:mx-0 mt-[15vh] ml-[7vw] rounded-md lg:ml-[2vw]">
            <i className="fa-solid fa-phone  bg-orange-400 text-white text-5xl rounded-[50%] p-10 mt-7 ml-[5.5vw] "></i>
            <h1 className="text-center text-2xl mt-5 font-sans">24/7 Support</h1>
            <h2 className="text-center text-gray-500 text-lg mt-3 font-sans">Support every time fast</h2>
          </div>
        </div>
        <Product/>
      </>
    )
  }
  
  export default Service
  