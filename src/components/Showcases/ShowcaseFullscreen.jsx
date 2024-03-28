'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Navigation, Mousewheel } from 'swiper';
//= Scripts
import removeSlashFromBagination from "@/common/removeSlashpagination";
//= Static Data
import showcasse1Data from "@/data/showcase1.json";

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
    setTimeout(() => {
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].childNodes[0].setAttribute(
          "data-swiper-parallax",
          0.75 * swiper.width
        );
      }
    });
  }
}

function ShowcaseFullscreen() {
  useEffect(() => {
    removeSlashFromBagination();
  }, []);

  return (
    <header className="slider showcase-full">
      <div className="swiper-container parallax-slider" >
        <Swiper {...swiperOptions} className="swiper-wrapper">
          {showcasse1Data.map(slide => (
            <SwiperSlide key={slide.id} className="swiper-slide">
              <div className="bg-img valign" style={{ backgroundImage: slide.video ? "" : `url(${slide.image})` }} data-overlay-dark="4">
                {slide.video && <VideoComponent slide={slide} />}
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="caption">
                        <Title slide={slide} />
                        <ExploreMore slide={slide} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <SliderButtons />
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
      <Link href="/project-details2/project-details2-dark">
        <div className="stroke" data-swiper-parallax="-2000">
          {slide.title.first}
        </div>
        <span data-swiper-parallax="-5000">
          {slide.title.second}
        </span>
      </Link>
    </h1>
  )
}

function ExploreMore() {
  return (
    <div className="discover">
      <Link href="/project-details2/project-details2-dark">
        <span>
          Explore More
        </span>
      </Link>
    </div>
  )
}

function SliderButtons() {
  return (
    <div className="txt-botm">
      <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
        <div>
          <span>Next Slide</span>
        </div>
        <div>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
        <div>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div>
          <span>Prev Slide</span>
        </div>
      </div>

      <div className="swiper-pagination dots"></div>
    </div>
  )
}

export default ShowcaseFullscreen;