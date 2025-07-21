import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    
    <div className="social-menu">
        <ul>
            <li><a href="https://github.com/nikitasthakur" target="blank" rel="noopener noreferrer"><FaGithub /></a></li>
            <li><a href="https://www.instagram.com/llnikitathakurll/" target="blank" rel="noopener noreferrer"><AiOutlineInstagram /></a></li>
            <li><a href="https://www.linkedin.com/in/nikita-thakur-b5420ab9/" target="blank" rel="noopener noreferrer"><BsLinkedin /></a></li>
        </ul>
    </div>
  )
}

export default HeaderSocials;