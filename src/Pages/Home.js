import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import img5 from '../assets/des5.png'
import img from '../assets/img.png'
import img1 from '../assets/design1.png'
import img2 from '../assets/des-2.png'
import img3 from '../assets/des3.png'
import img4 from '../assets/des4.png'
import img6 from '../assets/des6.png'
const Home = () => {
    return (
            <div className='flex items-center justify-center gap-12 h-screen'>
                <div className='flex flex-col text-right items-end w-[50%] gap-8'>
                    <h1 className='text-4xl font-bold uppercase'>Let us Guide you<h1 className='text-4xl text-[#e3b730] font-bold uppercase'>Home</h1></h1>
                    <div className='flex flex-col items-end'>
                        <p className='text-[#e3b730] font-serif flex gap-2'>Life <p className='text-black'> takes you</p>  unexpected <p className='text-black'>places,</p>  </p>
                        <p className='text-[#e3b730] font-serif flex gap-2'>love <p className='text-black'> brings you</p>  home</p>
                    </div>
                    <p className='w-[68%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    <button className=' uppercase font-bold  bg-[#e3b730] rounded-xl px-2 py-sm text-white'>Read more</button>
                    <div className='flex items-center gap-4  cursor-pointer'>
                        <span className='gap-2 flex items-center'><FaFacebook /> Your Acount</span>
                        <span className='gap-2 flex items-center'><FaInstagram /> Your Account</span>
                        <span className='gap-2 flex items-center'><FaTwitter /> Your Account</span>
                        <img className='w-16 absolute bottom-0 left-0' src={img5} alt="" />
                    </div>
                </div>
                <div className='w-[50%]'>
                    <img className='w-[268px] translate-x-20 resize relative' src={img} alt="" />
                    <img className=' absolute w-[270px] top-1/4 translate-x-20 translate-y-7 ' src={img2} alt="" />
                    <img className='w-[220px] resize absolute top-1/4 right-1/4 translate-y-4 translate-x-2' src={img1} alt="" />
                    <img className=' absolute w-[100px] top-20 right-6' src={img3} alt="" />
                    <img className=' absolute w-16 top-1/4' src={img4} alt="" />
                    <img className=' absolute bottom-20 right-1/4 w-20' src={img6} alt="" />
                </div>
            </div>
    )
}

export default Home