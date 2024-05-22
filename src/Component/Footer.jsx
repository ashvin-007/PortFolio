import React from 'react'
// import {FaFacebook,FaInstgram,FaLinkDinIn,FaGithub} from  "react-icons/fa6"
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
function Footer() {
  return (
   <>
        <hr />
    <footer className='py-10'>
        <div className='max-w-screen-2xl container mx-auto  px-4 md:px-20'>
            <div className='flex flex-col justify-center items-center'>
                <div className=''>
                <ul className="flex space-x-4">
             <li>
                <a href="https://www.instagram.com/ashvin_parmar_007/" target="blank">
                <FaInstagram className="text-2xl cursor-pointer" />
                </a>
             </li>
             <li>
               
               <a href="https://t.me/Mr_Ashvin_007" target="blank">
                
                <FaTelegram className="text-2xl cursor-pointer" />
                </a>
             </li>
             <li>
              
              <a href="https://www.linkedin.com/in/ashvin-parmar-629b02280/" target="blank">
                <FaLinkedin className="text-2xl cursor-pointer" />
                </a>
             </li>  
             <li>
               <a href="https://github.com/ashvin-007/" target="blank">
                <FaGithub className="text-2xl cursor-pointer" />
                </a>
             </li>
            </ul>
                </div>
                <div className='mt-8 border-t  border-gray-700 flex flex-col items-center '>
                    <p className='text-sm mt-4'>&copy; 2024 All  rights reversed</p>
                    <p className='inline-flex items-center text-sm'>Supportive  Partner <FaHeart className='text-red-700 mx-2'    /> Maulik</p>

                </div>
            </div>

        </div>
    </footer>
   </>
  )
}

export default Footer
