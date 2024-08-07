import React, { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { VscChromeClose } from 'react-icons/vsc'
import {  FaFacebookF, FaGlobe, FaInstagram, FaPinterest, FaTiktok, FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';

import './nav.css'
import logo from '../assets/logo.png'


import { BsChevronDown, BsGlobe2 } from 'react-icons/bs'
import { CiGlobe } from "react-icons/ci";
import { motion, useCycle, useMotionValueEvent, useScroll } from 'framer-motion'
import { VscListSelection } from 'react-icons/vsc'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'


const Nav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const [showNav, setShowNav] = useState(false);
  const [changeNavColor, setChangeNavColor] = useState(false);
  const [langMobile, setLangMobile] = useState(false)
  
  const [languages, setLanguages] = useState([
    {
    name: "English",
    code: 'en',
    flag: 'gb'
    },
    {
    name: "Français",
    code: 'fr',
    flag: 'fr'
    }
  ]);


  const handleRemoveNav = (e) => {
    e.target.className === 'nav_link_n' && setShowNav(false)
  }
  const changeLang = () => {
    const lang = i18next.language
    i18next.changeLanguage(lang ==='en'? 'fr': 'en')
    window.location.reload()
  }
  const { t } = useTranslation()

  return (
    <nav>
        <div className='social_links'>
            <Link className='nav_social_link_item' to='https://www.linkedin.com/in/alexander-ramirez-1a1b1b1b1/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedinIn />
            </Link>
            <Link className='nav_social_link_item' to='https://www.facbook.com/vtc' target='_blank' rel='noopener noreferrer'>
              <FaFacebookF />
            </Link>
            <Link className='nav_social_link_item' to='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
              <FaInstagram />
            </Link>
            <div className='need_help_nav_text'>Besoin d'aide?</div>
        </div>

        <div className='non_user_nav'>
          
          <div className='mobile_nav_n'>
            <div className= {`mobile-top ${ showNav ? 'white-logo' : ''}`} >
              <div className='logo-burger'>
                <Link to='/' rel="logo">
                  <span className='logo_small'>
                    <img src={logo} alt="logo_small" />
                  </span>
                </Link>
              </div>
            </div>

            <motion.span 
              drag="x"
              dragConstraints={{ left: 0, right: 20}} 
              onDragEnd={() =>  setShowNav(!showNav)}
              className={`burger ${showNav ? 'showBurger': ''}`}
            >
                {
                  !showNav && (
                  <div className='lang_change_mobile'>
                    <div className='the_lang_btn' onClick={() => setLangMobile(!langMobile)}><CiGlobe /></div>
                    {
                      langMobile && (
                      <div className='dropdown_mobile_lang_content'>
                      <ul>
                      {
                        languages.map((language, index) => (
                        <li key={index} className="dropdownNav-item">
                          <span  onClick={(e) => changeLang(language.code, e)} className={`flag-icon flag-icon-${language.flag}`}></span>
                          <span  onClick={(e) => changeLang(language.code, e)} className='blacktext'>{language.name}</span>
                        </li>
                        ))
                      }
                      </ul> 
                      </div>
                      )
                    }
                  </div>
                  )
                }
                <span className='burger_self' onClick={() => setShowNav(!showNav)}>
                  {
                    showNav ?
                    <VscChromeClose />
                    :
                    <VscListSelection />
                  }
                </span>
              </motion.span>
              <div className={`mobile_nav_n ${showNav ? 'showNavN' : 'unclip'}`} >
                <ul className='nav_list_n_wrapper' onClick={handleRemoveNav}>
                  <li className='nav_list_n'>
                    <NavLink className='nav_link_n' to = '/' >Accueil</NavLink>
                  </li>
                  <li className='nav_list_n'>
                    <NavLink className='nav_link_n' to = '/propos' >A Propos</NavLink>
                  </li>
                  <li className='nav_list_n'>
                    <NavLink className='nav_link_n' to = '/services' >Nos Services</NavLink>
                  </li>
                  <li className='nav_list_n'>
                    <NavLink className='nav_link_n' to = '/prestataires' >Les Prestataires</NavLink>
                  </li>
                  <li className='nav_list_n'>
                    <NavLink className='nav_link_n' to = '/contacts' >Contacts</NavLink>
                  </li>
                </ul>
              </div>

          </div>


          <div className={`nav_desktop_n`}>
            <div className={`container nav_desk_n`}>
              <div className='nav_n_logo'>
                  <a href="/">
                    <span className='logo'>
                      <img src={logo} alt="logo" />
                    </span>
                  </a>
              </div>
              <ul>
                <li className='nav_list_n'>
                  <NavLink className='nav_link_n' to = '/' >Accueil</NavLink>
                </li>
                <li className='nav_list_n'>
                  <NavLink className='nav_link_n' to = '/propos' >A Propos</NavLink>
                </li>
                <li className='nav_list_n'>
                  <NavLink className='nav_link_n' to = '/services' >Nos Services</NavLink>
                </li>
                <li className='nav_list_n'>
                  <NavLink className='nav_link_n' to = '/prestataires' >Les Prestataires</NavLink>
                </li>
                <li className='nav_list_n'>
                  <NavLink className='nav_link_n' to = '/contacts' >Contacts</NavLink>
                </li>
                  <li className='nav_list_n language_drop_container'>
                    <NavLink className='nav_link_n' >FR <span  className={`flag-icon flag-icon-gb`}/> / <span className={`flag-icon flag-icon-fr`}/></NavLink>
                    <div className='language_dropdown_n'>
                        <ul>
                        {
                          languages.map((language, index) => (
                          <li key={index} className="dropdownNav-item">
                            <span  onClick={(e) => changeLang(language.code, e)} className={`flag-icon flag-icon-${language.flag}`}></span>
                            <span  onClick={(e) => changeLang(language.code, e)} className='blacktext'>{language.name}</span>
                          </li>
                          ))
                        }
                        </ul>
                    </div>
                  </li>
                  <li className='nav_list_n signup_li'>
                    <NavLink className='nav_link_n signup_btn_n' to = '/register' >Se connecter</NavLink>
                  </li>
              </ul>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Nav