'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import initIsotope from "@/common/initIsotope";

function Works5() {
  useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);

  return (
    <section className="portfolio-frl section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">Portfolio</h6>
              <h3 className="wow color-font">
                Our Recent Web Design &amp; <br />
                Some Past Projects.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active"> All </span>
              <span data-filter=".brand">Branding</span>
              <span data-filter=".web">Mobile App</span>
              <span data-filter=".graphic">Creative</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div className="col-md-6 items graphic lg-mr wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Creative Mobile App</h6>
                  <p>Ui / Ux creative mobile app design</p>
                </div>
                <Link href="/project-details2/project-details2-dark" className="rota">
                  <img src="/img/portfolio/freelancer/1.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <a href="#0">App</a>
                  </span>
                  <span>
                    <a href="#0">Fitnes</a>
                  </span>
                  <span>
                    <a href="#0">Creative</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items web wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Creative Mobile App</h6>
                  <p>Ui / Ux creative mobile app design</p>
                </div>
                <Link href="/project-details2/project-details2-dark" className="rota">
                  <img src="/img/portfolio/freelancer/2.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <a href="#0">App</a>
                  </span>
                  <span>
                    <a href="#0">Fitnes</a>
                  </span>
                  <span>
                    <a href="#0">Creative</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items web wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Creative Mobile App</h6>
                  <p>Ui / Ux creative mobile app design</p>
                </div>
                <Link href="/project-details2/project-details2-dark" className="rota">
                  <img src="/img/portfolio/freelancer/3.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <a href="#0">App</a>
                  </span>
                  <span>
                    <a href="#0">Fitnes</a>
                  </span>
                  <span>
                    <a href="#0">Creative</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items web graphic wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Creative Mobile App</h6>
                  <p>Ui / Ux creative mobile app design</p>
                </div>
                <Link href="/project-details2/project-details2-dark" className="rota">
                  <img src="/img/portfolio/freelancer/4.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <a href="#0">App</a>
                  </span>
                  <span>
                    <a href="#0">Fitnes</a>
                  </span>
                  <span>
                    <a href="#0">Creative</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items brand wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Creative Mobile App</h6>
                  <p>Ui / Ux creative mobile app design</p>
                </div>
                <Link href="/project-details2/project-details2-dark" className="rota">
                  <img src="/img/portfolio/freelancer/5.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <a href="#0">App</a>
                  </span>
                  <span>
                    <a href="#0">Fitnes</a>
                  </span>
                  <span>
                    <a href="#0">Creative</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items brand wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Creative Mobile App</h6>
                  <p>Ui / Ux creative mobile app design</p>
                </div>
                <Link href="/project-details2/project-details2-dark" className="rota">
                  <img src="/img/portfolio/freelancer/6.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <a href="#0">App</a>
                  </span>
                  <span>
                    <a href="#0">Fitnes</a>
                  </span>
                  <span>
                    <a href="#0">Creative</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works5