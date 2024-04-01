'use client';
import React, { useRef, useEffect } from 'react';
import CapsuleButton from '../Common/CapsuleButton';

function CocktailsHeader() {
  const fixedSlider = useRef();

  useEffect(() => {
    if (fixedSlider.current) {
      const MainContent = document.querySelector('.main-content');
      const slideHeight = fixedSlider.current.offsetHeight;
      MainContent.style.marginTop = slideHeight + "px";
    }
  }, []);

  function scrollDown() {
    const contentSection = document.getElementById('main-content');

    if (contentSection) {
      window.scrollTo({
        top: contentSection.offsetTop,
        behavior: 'smooth',
      });
    }
  }

  return (
    <header ref={fixedSlider} className="works-header works-header-bg fixed-slider hfixd valign sub-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9 static">
            <div className="capt mt-50">
              <div className="parlx text-center">
                <h1 className="color-font">Cocktails</h1>
                <p style={{ color: "white" }}>
                  Discover our curated list of cocktails to savor the unique flavors of Patch, or bring a taste of our experience into your home with recipes perfect for crafting your own spirited creations.
                </p>
                <CapsuleButton text="See Cocktails below" internalLink={scrollDown} topMargin />
              </div>
              <div className="bactxt custom-font valign">
                <span className="full-width">Cocktails</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default CocktailsHeader