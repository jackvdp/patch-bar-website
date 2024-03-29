'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import initIsotope from "@/common/initIsotope";

function Works4({ classText }) {
  useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);

  return (
    <section className={`portfolio-cr section-padding pb-50 ${classText ? classText : ''}`}>
      <div className="container">
        <div className="row">
          <div className="filtering text-center col-12">
            <div className="filter">
              <span data-filter="*" className="active"> All </span>
              <span data-filter=".brand">Branding</span>
              <span data-filter=".web">Mobile App</span>
              <span data-filter=".graphic">Creative</span>
            </div>
          </div>

          <div className="gallery-mons full-width">
            <div className="items graphic wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <Link href="/project-details2/project-details2-dark" className="imago wow">
                  <img src="/img/portfolio/cr/1.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont flex">
                <h6 className="color-font">Creative Design</h6>
                <span>
                  <a href="#0">Graphic</a>
                </span>
              </div>
            </div>

            <div className="items web brand wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <Link href="/project-details2/project-details2-dark" className="imago wow">
                  <img src="/img/portfolio/cr/2.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont flex">
                <h6 className="color-font">Modern Design</h6>
                <span>
                  <a href="#0">Brand</a>,
                  <a href="#0">Web</a>
                </span>
              </div>
            </div>

            <div className="items width2 brand wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <Link href="/project-details2/project-details2-dark" className="imago wow">
                  <img src="/img/portfolio/cr/3.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6 className="color-font">Creative Design</h6>
                <span>
                  <a href="#0">Website</a>
                </span>
              </div>
            </div>

            <div className="items width2 graphic wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <Link href="/project-details2/project-details2-dark" className="imago wow">
                  <img src="/img/portfolio/cr/4.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6 className="color-font">Modern Design</h6>
                <span>
                  <a href="#0">Graphic</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works4