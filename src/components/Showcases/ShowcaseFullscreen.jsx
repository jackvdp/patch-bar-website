'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Navigation, Mousewheel } from 'swiper';
//= Scripts
import removeSlashFromBagination from "@/common/removeSlashpagination";
//= Static Data
import showcasse1Data from "@/data/showcase1.json";
import CapsuleButton from '@/components/Common/CapsuleButton';

function ShowcaseFullscreen({ onSliderChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const swiperRef = React.useRef(null);

  useEffect(() => {
    removeSlashFromBagination();
  }, []);

  const swiperOptions = {
    modules: [Parallax, Navigation, Mousewheel],
    speed: 1000,
    slidesPerView: 1,
    mousewheel: true,
    parallax: true,
    navigation: {
      prevEl: ".txt-botm .swiper-button-prev",
      nextEl: ".txt-botm .swiper-button-next",
    },
    onSwiper: (swiper) => {
      swiperRef.current = swiper;
      setTimeout(() => {
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].childNodes[0].setAttribute(
            "data-swiper-parallax",
            0.75 * swiper.width
          );
        }
      });
    },
    onSlideChange: (swiper) => {
      setCurrentIndex(swiper.realIndex);
      onSliderChange(swiper.realIndex);
    }
  }

  return (
    <header className="slider showcase-full">
      <div className="swiper-container parallax-slider" >
        <Swiper {...swiperOptions} className="swiper-wrapper">
          {showcasse1Data.map((slide, index) => (
            <SwiperSlide key={slide.id} className="swiper-slide">
              <div className="bg-img valign" style={{ backgroundImage: slide.video ? "" : `url(${slide.image})` }} data-overlay-dark="4">
                {slide.video && <VideoComponent slide={slide} />}
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="caption">
                        {
                          index === 0 ?
                            (<>
                              <img src="/custom-content/logo-white.svg" alt="logo" className={currentIndex === 0 ? "logo logo-entering" : "logo logo-leaving"} />
                              <ExploreMore slide={slide} />
                            </>)
                            :
                            (<>
                              <Title slide={slide} />
                              <ExploreMore slide={slide} />
                            </>)
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <SliderButtons swiper={swiperRef} currentIndex={currentIndex} />
      </div>
    </header>
  )
}

function VideoComponent({ slide }) {
  return (
    <video className='bg-image'
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: 'absolute',
        width: '100%',
        left: '50%',
        top: '50%',
        height: '100%',
        objectFit: 'cover',
        transform: 'translate(-50%, -50%)',
        zIndex: '-1',
      }}
      src={slide.image}
    ></video>
  )
}

function Title({ slide }) {
  return (
    <h1 className='header-font'>
      <div className="stroke header-font" data-swiper-parallax="-2000" dangerouslySetInnerHTML={{ __html: slide.title.first }}>
      </div>
      <span className="header-font" data-swiper-parallax="-5000" dangerouslySetInnerHTML={{ __html: slide.title.second }}>
      </span>
    </h1>
  )
}

function ExploreMore({ slide }) {
  return (
    <div className='custom-gap'>
      {slide.links.map((link, index) => (
        <CapsuleButton key={index} text={link.title} link={link.url} topMargin />
      ))}
    </div>
  );
}

function SliderButtons({ swiper, currentIndex }) {
  const goToSlide = (index) => {
    if (swiper && swiper.current) {
      swiper.current.slideTo(index);
    }
  };

  return (
    <div className="txt-botm">
      {showcasse1Data.map((slide, index) => (
        <div
          key={slide.id}
          className="cursor-pointer"
          onClick={() => goToSlide(index)}
        >
          <div>
            <span className={currentIndex === index ? "nav-button-selected" : "nav-button-faded"}>{slide.caption}</span>
          </div>
        </div>
      ))}

      <div className="swiper-pagination dots"></div>
    </div>
  );
}

export default ShowcaseFullscreen;