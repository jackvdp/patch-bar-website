'use client';
import React, { useEffect } from 'react';
//= Scripts
import initFullNavbarMenu from "@/common/initFullNavbarMenu";
import NavbarToggleButton from "@/components/Common/Hamburger";

function NavbarFullMenu({ theme, hideLogo }) {
  useEffect(() => {
    initFullNavbarMenu();
  }, []);

  const logoClass = hideLogo ? 'logo-leaving' : 'logo-entering';

  return (
    <>
      <div id="navi" className={`topnav ${theme ? (theme === 'light' ? 'light' : '') : ''}`}>
        <div className="container-fluid">
          <div className="logo">
            <a href="#0" className={logoClass}>
              <img src="/custom-content/logo-white.svg" alt="logo" />
            </a>
          </div>
          <div className="menu-icon valign">
            <NavbarToggleButton />
            <span className="text" data-splitting>
              <span className="menu-text">Menu</span>
            </span>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                    <div className="o-hidden">
                      <a className="link" href="/">
                        <span className="nm">01.</span>Home
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a className="link" href="/book">
                        <span className="nm">02.</span>Reservations
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a className="link" href="/cocktails">
                        <span className="nm">03.</span>Cocktails
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a className="link" href="/events">
                        <span className="nm">04.</span>Corporate Events
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a className="link" href="/tour">
                        <span className="nm">05.</span>Video Tour
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a className="link" href="/gallery">
                        <span className="nm">06.</span>Gallery
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a className="link" href="/gallery">
                        <span className="nm">07.</span>Contact
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <h6>Phone :</h6>
                  <p>0207 236 4466</p>
                </div>
                <div className="item">
                  <h6>Patch St Paul's:</h6>
                  <p>58 - 60 Carter Lane, London, EC4V 5EA</p>
                </div>
                <div className="item">
                  <h6>Patch East:</h6>
                  <p>80 - 84 Leadenhall Street, London, EC3A 3DH</p>
                </div>
                <div className="item">
                  <h6>Email :</h6>
                  <p>
                    <a href="#0">enquiries@patch-bar.co.uk</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarFullMenu