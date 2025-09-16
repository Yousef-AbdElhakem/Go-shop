import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


import './footer.css'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
        <div className="footer">
            <div className="content-footer">
                <div className="ul-footer">
                    <ul>
                        <Link className='link links' to =''><FaFacebookF className='icons'/></Link>
                        <Link className='link links' to =''><IoLogoYoutube className='icons'/></Link>
                        <Link className='link links' to =''>< FaTwitter className='icons'/> </Link>
                        <Link className='link links' to =''><FaLinkedin  className='icons'/></Link>
                        <Link className='link links' to =''><FaGoogle  className='icons'/></Link>
                        <Link className='link links' to =''><FaInstagram  className='icons'/></Link>

                    </ul>
                </div>
                <p>© 2026 . all right reserved by colorlib</p>
            </div>
        </div>
     </>
  )
}

export default Footer