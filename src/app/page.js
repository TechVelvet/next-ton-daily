'use client'
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Slider from '@/components/slider';
import { useRouter } from 'next/navigation';


export default function Home() {

  const [sliderBlog, setSliderBlog] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://backapi.bitcoinworld.news/api/blog/info?&domain=TON Daily&pin=true');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setSliderBlog(result.data);
      } catch (error) {
       console.log("Error fettichin Pin blog----------->", error);
      } 
    };

    fetchData();
  }, []);

  const router = useRouter();

  const handleClick = (articleId) => {
    router.push(`/article/${articleId}`);
  };

  return (
    <>
      <div id="content" class="page-content-wrap2 no-tps">
        <div class="container">
          <div class="content-element5">
            <div class="row">
              <aside id="sidebar" class="sticky-bar col-lg-2 col-md-12">
                <div class="widget">
                  <h6 class="widget-title">Latest</h6>
                  <div class="entry-box" id="Latest"></div>
                </div>

                <div class="widget">
                  <h6 class="widget-title">Press Releases</h6>
                  <div class="entry-box" id="PressReleases"></div>
                </div>

                <div class="widget">
                  <div class="banner-title">Advertisement</div>
                  <div id="ads200x200"></div>
                </div>
              </aside>
              <main id="main" class="col-lg-10 col-md-12">
                <div class="news-holder">
                  <Swiper
                    pagination={{ dynamicBullets: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    className="mySwiper"
                  >
                    {sliderBlog?.map((slide, index) => (
                      <SwiperSlide key={index} onClick={() => handleClick(slide._id)}>
                        <Slider slide={slide} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div class="row no-gutters">
                  <div class="main col-lg-8 col-md-12 lside">
                    <div class="content-element2">
                      <div class="banner-title">Advertisement</div>
                      <div id="ads728x90"></div>
                    </div>
                    <div class="content-element4">
                      <div class="entry-box row" id="main-blogs"></div>
                    </div>
                    {/* <!-- <div class="align-center">

                    <a href="#" class="btn">Load More Posts</a>

                  </div> --> */}
                  </div>
                  <aside class="sidebar sticky-bar col-lg-4 col-md-12 sbr">
                    <div class="widget">
                      <h6 class="widget-title">Calculator</h6>

                      <div class="calc-section">
                        <div class="calc-item">
                          <div class="currency">
                            <div class="flex-justify">
                              <input
                                type="text"
                                id="TON_value"
                                placeholder="1"
                                oninput="updateCalculations('TON')"
                                onkeypress="return isNumberKey(event)"
                              />
                              <span>TON</span>
                            </div>
                          </div>
                          <span>=</span>
                          <div class="quantity">
                            <input
                              type="text"
                              id="TON_input"
                              oninput="updateFromInput('TON')"
                              onkeypress="return isNumberKey(event)"
                            />
                          </div>
                          <div class="custom-select price-check">
                            <div class="select-title">USD</div>
                            <ul id="menu-type4" class="select-list"></ul>
                            <select id="TON_currency" class="hide">
                              <option value="USD">USD</option>
                              {/* <!-- <option value="EUR">EUR</option>
                            <option value="RUR">RUR</option> --> */}
                            </select>
                          </div>
                        </div>

                        <div class="calc-item">
                          <div class="currency">
                            <div class="flex-justify">
                              <input
                                type="text"
                                id="BTC_value"
                                placeholder="1"
                                oninput="updateCalculations('BTC')"
                                onkeypress="return isNumberKey(event)"
                              />
                              <span>BTC</span>
                            </div>
                          </div>
                          <span>=</span>
                          <div class="quantity">
                            <input
                              type="text"
                              id="BTC_input"
                              oninput="updateFromInput('BTC')"
                              onkeypress="return isNumberKey(event)"
                            />
                          </div>
                          <div class="custom-select price-check">
                            <div class="select-title">USD</div>
                            <ul id="menu-type2" class="select-list"></ul>
                            <select id="BTC_currency" class="hide">
                              <option value="USD">USD</option>
                              {/* <!-- <option value="EUR">EUR</option>
                            <option value="RUR">RUR</option> --> */}
                            </select>
                          </div>
                        </div>

                        <div class="calc-item">
                          <div class="currency">
                            <div class="flex-justify">
                              <input
                                type="text"
                                id="ETH_value"
                                placeholder="1"
                                oninput="updateCalculations('ETH')"
                                onkeypress="return isNumberKey(event)"
                              />
                              <span>ETH</span>
                            </div>
                          </div>
                          <span>=</span>
                          <div class="quantity">
                            <input
                              type="text"
                              id="ETH_input"
                              oninput="updateFromInput('ETH')"
                              onkeypress="return isNumberKey(event)"
                            />
                          </div>
                          <div class="custom-select price-check">
                            <div class="select-title">USD</div>
                            <ul id="menu-type3" class="select-list"></ul>
                            <select id="ETH_currency" class="hide">
                              <option value="USD">USD</option>
                              {/* <!-- <option value="EUR">EUR</option>
                            <option value="RUR">RUR</option> --> */}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="widget">
                      <h6 class="widget-title">ICO Calendar</h6>

                      <div class="entry-box" id="ICO-Calendar"></div>

                      <a href="ico_list.html" class="btn btn-small">
                        View All ICOs
                      </a>
                    </div>

                    <div class="widget">
                      <div class="banner-title">Advertisement</div>
                      <div id="ads250x250"></div>
                    </div>

                    <div class="widget">
                      <h6 class="widget-title">Most read</h6>

                      <ul class="most-read" id="most-read"></ul>
                    </div>
                  </aside>
                </div>
              </main>
            </div>
          </div>

          <div class="align-center">
            <div class="banner-wrap m-banner-bottom" id="ad-bottom">
              <div class="banner-title banner-bottom">
                <span>Advertisement</span>
                <i id="close-ad" class="bi bi-x-lg"></i>
              </div>
              <div id="ads970x90"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
