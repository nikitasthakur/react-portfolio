import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    
    <div className="social-menu">
        <ul>
            <li><a href="https://github.com/nikitasthakur" target="blank"><i className="fab fa-github"></i></a></li>
            <li><a href="https://www.instagram.com/llnikitathakurll/" target="blank"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/nikita-thakur-b5420ab9/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
    </div>
  )
}

export default HeaderSocials;