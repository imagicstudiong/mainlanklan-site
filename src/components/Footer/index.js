import React from 'react';
import  '../../css/style.css';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
 
} from 'react-icons/fa';
import {
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
   <footer className="fixed-footer">
                <div className="policy-box">
                    <span>&#169; Mainlanklan Entertaunment 2020 - 2021  /  All rights reserved. </span>
                </div>
                <SocialIcons>

                <SocialIconLink href='https://www.facebook.com/Mainlanklan/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='https://www.instagram.com/mainlanklan_/?hl=en' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                '/'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
           
                  
                </SocialIcons>
            </footer>
  );
}

export default Footer;