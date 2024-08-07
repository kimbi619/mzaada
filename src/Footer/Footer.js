import React from 'react';
import {Link} from 'react-router-dom'
import './Footer.css'
import {  FaFacebookF, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { FaLinkedinIn } from 'react-icons/fa6';
import logo from '../assets/logo_footer.png'

const Footer = () => {
  
  const { t } = useTranslation();
  return(
  <div className='footerWrapper'>
      <div className="container">
        <div className="footerContent">
          <div className="about">
            <div className='logo' >
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="about">
              <div className="descTitle">À propos de nous</div>
              <Link to="/accueil"><div className="descText">Accueil</div></Link>
              <Link to="/aide/contact-support"><div className="descText">Nous contacter</div></Link>
              <a href="tell:+2376712345678"><div className="descText">Tél/Téléphone</div></a>
              <a href="mailto:contact@msaada.com"><div className="descText">Nous écrire</div></a>
          </div>
          <div className="buy">
              <div className="descTitle">Nos Services</div>
              <Link to="/magasin"><div className="descText">Magasin</div></Link>
              <Link to="/conditions-generales"><div className="descText">Politique de confidentialité</div></Link>
              <Link to="/histoires"><div className="descText">Histoires</div></Link>
              <Link to="/a-propos"><div className="descText">À propos de nous</div></Link>
              <Link to="/aide"><div className="descText">Aide</div></Link>
          </div>
          <div className="buy">
              <div className="descTitle">Autres</div>
              <Link to="/faq"><div className="descText">FAQ</div></Link>
              <Link to="/aide/signaler"><div className="descText">Rapport</div></Link>
              <Link to="/conditions-generales"><div className="descText">Termes et conditions</div></Link>
          </div>
          <div className="buy">
              <div className="descTitle">Nos Pages</div>
              <Link to="#"><div className="descText">Suivez-nous</div></Link>
              <div className='social_links' style={{ maxWidth: '7rem', marginLeft: '0px' }}>
                <Link className='nav_social_link_item' to='https://www.linkedin.com/in/alexander-ramirez-1a1b1b1b1/' target='_blank' rel='noopener noreferrer'>
                  <FaLinkedinIn />
                </Link>
                <Link className='nav_social_link_item' to='https://www.facbook.com/vtc' target='_blank' rel='noopener noreferrer'>
                  <FaFacebookF />
                </Link>
                <Link className='nav_social_link_item' to='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                  <FaInstagram />
                </Link>
              </div>

          </div>
        </div>
        <div className='company_line'>
          <h3 className='footer_name'>@Droits d'auteur, Politique</h3>
        </div>
      </div>
  </div>
  );
};

export default Footer;