import React from 'react';

function Footer({ hideBGCOLOR }) {
  return (
    <footer className={`${!hideBGCOLOR ? 'sub-bg' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <SiteColumn
              name={"St Paul's"}
              address={"58 - 60 Carter Lane, London, EC4V 5EA"}
              email={"st.pauls@patch-bar.co.uk"}
              phone={"020 7621 0850"}
            />
          </div>
          <div className="col-lg-4">
            <SiteColumn
              name={"East"}
              address={"80 - 84 Leadenhall Street, London, EC3A 3DH"}
              email={"east@patch-bar.co.uk"}
              phone={"0207 489 7777"}
            />
          </div>
          <div className="col-lg-4">
            <RightColumn />
          </div>
        </div>
      </div>
    </footer>
  )
}

function SiteColumn({ name, address, email, phone }) {
  return (
    <div className="item md-mb50">
      <div className="title">
        <h5>{name}</h5>
      </div>
      <ul>
        <li>
          <span className="icon pe-7s-map-marker"></span>
          <div className="cont">
            <h6>Address</h6>
            <p>{address}</p>
          </div>
        </li>
        <li>
          <span className="icon pe-7s-mail"></span>
          <div className="cont">
            <h6>Email Us</h6>
            <p>{email}</p>
          </div>
        </li>
        <li>
          <span className="icon pe-7s-call"></span>
          <div className="cont">
            <h6>Call Us</h6>
            <p>{phone}</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

function RightColumn() {

  return (
    <div className="item">
      <div className="logo">
        <img src="/custom-content/logo-white.svg" alt="logo" />
      </div>
      <div className="social">
        <a href="#0">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  )

}

export default Footer