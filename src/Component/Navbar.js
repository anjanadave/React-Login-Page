import React from 'react'
import Header from './Header'
const Navbar = () => {
    return (
        <>
            <div className="bg-white py-8 px-4 lg:px-20 flex flex-col items-center lg:flex-row lg:justify-between w-full fixed top-0 z-10">
                <div>
                    <h1 className="text-5xl text-lime-500 font-bold cursor-pointer">Fruitable</h1>
                </div>
                <div className="flex space-x-4">
                    <ul className="flex flex-col items-center text-lg font-bold text-gray-600 lg:flex-row lg:justify-between space-x-4 cursor-pointer">
                        <li><span className='text-lime-500'>Home</span></li>
                        <li className="hover:text-lime-500">Shop</li>
                        <li className="hover:text-lime-500">Shop Detail</li>
                        <li className="hover:text-lime-500">Pages</li>
                        <li className="hover:text-lime-500">Contact</li>
                    </ul>
                </div>
                <div className="flex space-x-4 text-lime-500 cursor-pointer">
                    <i className="fa-solid fa-magnifying-glass border border-amber-500 rounded-full text-xl py-2 pl-3 pr-3 hover:bg-amber-500"></i>
                    <i className="fa-solid fa-bag-shopping text-3xl hover:text-lime-700"></i>
                    <i className="fa-solid fa-user text-3xl hover:text-lime-700"></i>
                </div>
            </div>
            <Header/>
        </>
    )
}

export default Navbar
