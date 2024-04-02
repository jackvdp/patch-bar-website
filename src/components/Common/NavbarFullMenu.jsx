'use client';
import React, { useEffect, useState } from 'react';
//= Scripts
import initFullNavbarMenu from "@/common/initFullNavbarMenu";
import NavbarToggleButton from "@/components/Common/Hamburger";
import CapsuleButton from './CapsuleButton';
import MusicPlayer from './MusicPlayer';
import Link from 'next/link';

function NavbarFullMenu({ theme, hideLogo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    initFullNavbarMenu(setIsMenuOpen);
  }, []);

  const logoClass = (hideLogo && !isMenuOpen) ? 'logo-leaving' : 'logo-entering';

  return (
    <>
      <div id="navi" className={`topnav ${theme ? (theme === 'light' ? 'light' : '') : ''}`}>
        <div className="container-fluid valign">
          <div className="logo">
            <Link href="/" className={logoClass}>
              <img src="/custom-content/logo-white.svg" alt="logo" />
            </Link>
          </div>
          <div className='valign menu-items'>
            <MusicPlayer />
            <div className="d-none d-md-block">
              <CapsuleButton text={"Book"} link={"/book"} rightMargin small />
            </div>
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
    { id: 1, name: 'Locations', link: '/locations' },
    { id: 2, name: 'Corporate Events', link: '/events' },
    { id: 3, name: 'Cocktails', link: '/cocktails' },
    { id: 4, name: 'Video Tour', link: '/tour' },
    { id: 5, name: 'Gallery', link: '/gallery' },
    { id: 6, name: 'Contact', link: '/contact' },
  ];

  return (
    <div className="menu-links">
      <ul className="main-menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <div className="o-hidden">
              <a className="link" href={item.link}>
                <span className="nm">0{item.id}.</span>{item.name}
              </a>
            </div>
          </li>
        ))}
        <li>
          <div className="o-hidden">
            <div className="d-block d-md-none link">
              <CapsuleButton text={"Book"} link={"/book"} rightMargin small />
            </div>
          </div>
        </li>
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
      {contactInfo.map((item, index) => (
        <div key={index} className="item">
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