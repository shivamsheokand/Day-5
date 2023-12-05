import React from 'react'
import nav from '../assets/nav.png'
const Nav = () => {
    return (
        <div className='flex justify-center items-center relative'>
            <img className=' h-10 absolute left-4 top-0' src={nav} alt="" />
            <ul className='flex justify-center items-center gap-14 mt-5'>
                <li className='bg-[#dea828] py-sm px-2 rounded-2xl text-xl font-bold text-white uppercase'>Home</li>
                <li className=' uppercase text-xl font-bold'>Contact</li>
                <li className=' uppercase text-xl font-bold'>About Us</li>
            </ul>
        </div>
    )
}

export default Nav