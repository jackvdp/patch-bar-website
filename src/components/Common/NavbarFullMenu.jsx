'use client';
import React, { useEffect, useState } from 'react';
//= Scripts
import initFullNavbarMenu from "@/common/initFullNavbarMenu";
import NavbarToggleButton from "@/components/Common/Hamburger";
import CapsuleButton from './CapsuleButton';

function NavbarFullMenu({ theme, hideLogo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    initFullNavbarMenu(setIsMenuOpen);
  }, []);

  const logoClass = (hideLogo && !isMenuOpen) ? 'logo-leaving' : 'logo-entering';

  const startMusic = () => {
    alert("Music started");
  }

  return (
    <>
      <div id="navi" className={`topnav ${theme ? (theme === 'light' ? 'light' : '') : ''}`}>
        <div className="container-fluid">
          <div className="logo">
            <a href="#0" className={logoClass}>
              <img src="/custom-content/logo-white.svg" alt="logo" />
            </a>
          </div>
          <div className='valign menu-items'>
            <CapsuleButton text={""} link={"/book"} icon={"fa-headphones"} iconCallback={startMusic} rightMargin small />
            <CapsuleButton text={"Book"} link={"/book"} rightMargin small />
            <div className="menu-icon valign">
              <NavbarToggleButton />
              <span className="text" data-splitting>
                <span className="menu-text">Menu</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <MenuItems />
            </div>
            <div className="col-lg-3 col-md-4">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function MenuItems() {

  const menuItems = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Reservations', link: '/book' },
    { id: 3, name: 'Cocktails', link: '/cocktails' },
    { id: 4, name: 'Corporate Events', link: '/events' },
    { id: 5, name: 'Video Tour', link: '/tour' },
    { id: 6, name: 'Gallery', link: '/gallery' },
    { id: 7, name: 'Contact', link: '/contact' },
  ];

  return (
    <div className="menu-links">
      <ul className="main-menu">
        {menuItems.map(item => (
          <li>
            <div className="o-hidden">
              <a className="link" href={item.link}>
                <span className="nm">0{item.id}.</span>{item.name}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ContactInfo() {

  const contactInfo = [
    { id: 1, name: 'Phone', value: '020 7236 4466' },
    { id: 2, name: 'Patch St Paul\'s', value: '58 - 60 Carter Lane, London, EC4V 5EA' },
    { id: 3, name: 'Patch East', value: '80 - 84 Leadenhall Street, London, EC3A 3DH' },
    { id: 4, name: 'Email', value: 'enquiries@patch-bar.co.uk', link: "mailto:" }
  ]

  return (
    <div className="cont-info">
      {contactInfo.map(item => (
        <div className="item">
          <h6>{item.name} :</h6>
          <p>
            {item.link ? <a href={item.link + item.value}>{item.value}</a> : item.value}
          </p>
        </div>
      ))}
    </div>
  )
}

export default NavbarFullMenu