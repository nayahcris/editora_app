import React from "react"

import { FaHeart } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

import  './style.css'

const Footer: React.FC = () => {

    return (
        <footer className="footer">
        <div className="social">
            <a href="https://www.instagram.com/">
            <FaInstagram size="40"  color="pink"/>
            </a>
            <a href="https://www.youtube.com">
            <FaYoutube size="40"  color="pink"/>
            </a>  
        </div>
        <p className="copyright">Sense Garden <FaHeart color="#B51942"/> 2021</p>
        </footer>
      )
}

export default Footer