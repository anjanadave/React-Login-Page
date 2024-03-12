import Seller from "./Seller"

const Exotic = () => {
    return (
      <>
        <div className="w-full h-[90vh] bg-amber-500 mt[10vh] flex justify-around">
          <div className="w-[50%] h-[90vh] text-start">
             <h1 className="text-white ml-[6vw] mt-[20vh] text-7xl font-bold leading-tight">Fresh Exotic Fruits<br></br><span className="text-gray-600 font-normal">in Our Store</span></h1>
             <p className="text-gray-600 ml-[6vw] text-lg mt-[3vh]">The generated Lorem Ipsum is therefore always free from repetition injected<br></br> humour, or non-characteristic words etc.</p>
             <button className="bg-transperent border border-2 px-11 py-4 ml-[6vw] mt-[3vh]  border-white rounded-[30px] hover:bg-lime-500 transition duration-700 ease-in-out">BUY</button>
          </div>
          <div className="w-[50%] h-[90vh]">
           <div className="absolute mt-[10vh]">
           <img src="https://themewagon.github.io/fruitables/img/baner-1.png" alt="" />
           </div>
           <div className="relative mt-[10vh] bg-white h-[18vh] w-[9vw] rounded-[50%]">
              <h1 className="text-9xl text-gray-600 text-start">1<span className="text-4xl mb-6">kg</span>
              </h1>
           </div>
          </div>
        </div>
        <Seller/>
      </>
    )
  }
  
  export default Exotic
  