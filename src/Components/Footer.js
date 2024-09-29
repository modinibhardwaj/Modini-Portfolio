import React from 'react';
import {FaLinkedin,FaGithub} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <h4 className='inline-flex items-center gap-2'>Build with <span> <FaHeart/></span> by Modini</h4>
      <h4>Copyright &copy; 2023 DS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/modinibhardwaj" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/modini-bhardwaj-7339b6311/" target='_blank'><FaLinkedin/></a>
        <a href="mailto:modini.bhardwaj@gmail.com">
      <GrMail />
    </a>
        <a href="https://leetcode.com/u/modinibhardwaj/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer