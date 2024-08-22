'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Slider from '@/components/slider';
import { useRouter } from 'next/navigation';
import { useAPI } from '@/components/apiProvider';

export default function Home() {

  const { handleChange, inputValues, formatDate, latestBlog, pinBlogs, allBlogs, icoCalendar, mostReadBlog, pressReleases, ads200x200 } = useAPI();  

  const router = useRouter();

  const handleClick = (articleId) => {
    router.push(`/article/${articleId}`);
  };

  const [displayedData, setDisplayedData] = useState(allBlogs?.slice(0, 2));
  const [allDataLoaded, setAllDataLoaded] = useState(false);

  useEffect(() => {
    setDisplayedData(allBlogs?.slice(0, 2));
    setAllDataLoaded(false);
  }, [allBlogs]);

  const handleLoadMore = () => {
    setDisplayedData(allBlogs);
    setAllDataLoaded(true);
  };

  return (
    <>
      <div id="content" className="page-content-wrap2 no-tps">
        <div className="container">
          <div className="content-element5">
            <div className="row">
              <aside id="sidebar" className="sticky-bar col-lg-2 col-md-12">
                <div className="widget">
                  <h6 className="widget-title">Latest</h6>
                  <div className="entry-box">
                    {latestBlog?.slice(0, 4).map((entry, key) => (
                      <div class="entry entry-small" key={key}>
                        <div class="thumbnail-attachment">
                          <a onClick={() => handleClick(entry._id)}>
                            <img
                              src={`https://backapi.bitcoinworld.news/api/media/${entry.blog_img}`}
                              alt=""
                            />
                          </a>
                          <a href="" class="entry-label">
                            {entry.tag}
                          </a>
                        </div>
                        <div class="entry-body">
                          <h6 class="entry-title">
                            <a onClick={() => handleClick(entry._id)}>
                              {entry.title}
                            </a>
                          </h6>
                          <div class="entry-meta">
                            <time class="entry-date" datetime="">
                              {formatDate(entry.updatedAt)}
                            </time>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="widget">
                  <h6 className="widget-title">Press Releases</h6>
                  <div className="entry-box" id="PressReleases">
                    {pressReleases?.map((elem, index) => (
                      <div class="entry entry-small" key={index}>
                        <div class="entry-body">
                          <h6 class="entry-title">
                            <a onClick={() => handleClick(elem._id)}>
                              {elem.title}
                            </a>
                          </h6>
                          <div class="entry-meta">
                            <time class="entry-date" datetime="2018-12-21">
                              {formatDate(elem.updatedAt)}
                            </time>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="widget">
                  <div className="banner-title">Advertisement</div>
                  <div id="ads200x200">
                    <a onClick={() => handleClick(ads200x200.redirect_link)} class="banner"><img src={`https://backapi.bitcoinworld.news/api/media/${ads200x200?.image}`} alt="" /></a>
                  </div>
                </div>
              </aside>
              <main id="main" className="col-lg-10 col-md-12">
                <div className="news-holder">
                  <Swiper
                    pagination={{ dynamicBullets: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    className="mySwiper"
                  >
                    {pinBlogs?.map((slide, index) => (
                      <SwiperSlide
                        key={index}
                        onClick={() => handleClick(slide._id)}
                      >
                        <Slider slide={slide} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="row no-gutters">
                  <div className="main col-lg-8 col-md-12 lside">
                    <div className="content-element2">
                      <div className="banner-title">Advertisement</div>
                      <div id="ads728x90"></div>
                    </div>
                    <div className="content-element4">
                      <div className="entry-box row" id="main-blogs">
                        {displayedData?.map((elem, index) => (
                          <div class="col-md-6" key={index}>
                            <div class="entry entry-small">
                              <div class="thumbnail-attachment">
                                <a href="#">
                                  <img
                                    src={`https://backapi.bitcoinworld.news/api/media/${elem.blog_img}`}
                                    alt=""
                                  />
                                </a>
                                <a href="#" class="entry-label">
                                  {elem.tag}
                                </a>
                              </div>
                              <div class="entry-body">
                                <h5 class="entry-title">
                                  <a href="#">{elem.title}</a>
                                </h5>
                                <div class="entry-meta">
                                  <time class="entry-date" datetime="">
                                    {formatDate(elem.updatedAt)}
                                  </time>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="align-center">
                      {allDataLoaded ? (
                        <></>
                      ) : (
                        <button className="btn" onClick={handleLoadMore}>
                          Load More Posts
                        </button>
                      )}
                    </div>
                  </div>

                  <aside className="sidebar sticky-bar col-lg-4 col-md-12 sbr">
                    <div className="widget">
                      <h6 className="widget-title">Calculator</h6>

                      <div className="calc-section">
                        <div className="calc-item">
                          <div className="currency">
                            <div className="flex-justify">
                              <input type='text'
                                value={inputValues.tonValue}
                                onChange={handleChange}
                                name="tonValue"
                              />
                              <span>TON</span>
                            </div>
                          </div>
                          <span>=</span>
                          <div className="quantity">
                            <input type='text'
                              value={inputValues.tonUsdValue}
                              onChange={handleChange}
                              name="tonUsdValue"
                            />
                          </div>
                          <div className="custom-select price-check">
                            <div className="select-title">USD</div>
                            <ul id="menu-type4" className="select-list"></ul>
                            <select id="TON_currency" className="hide">
                              <option value="USD">USD</option>
                              <option value="EUR">EUR</option>
                              <option value="RUR">RUR</option>
                            </select>
                          </div>
                        </div>

                        <div className="calc-item">
                          <div className="currency">
                            <div className="flex-justify">
                              <input type='text'
                                value={inputValues.btcValue}
                                onChange={handleChange}
                                name="btcValue"
                              />
                              <span>BTC</span>
                            </div>
                          </div>
                          <span>=</span>
                          <div className="quantity">
                            <input type='text'
                              value={inputValues.btcUsdValue}
                              onChange={handleChange}
                              name="btcUsdValue"
                            />
                          </div>
                          <div className="custom-select price-check">
                            <div className="select-title">USD</div>
                            <ul id="menu-type2" className="select-list"></ul>
                            <select id="BTC_currency" className="hide">
                              <option value="USD">USD</option>
                              <option value="EUR">EUR</option>
                              <option value="RUR">RUR</option>
                            </select>
                          </div>
                        </div>

                        <div className="calc-item">
                          <div className="currency">
                            <div className="flex-justify">
                              <input type='text'
                                value={inputValues.ethValue}
                                onChange={handleChange}
                                name="ethValue"
                              />
                              <span>ETH</span>
                            </div>
                          </div>
                          <span>=</span>
                          <div className="quantity">
                            <input type='text'
                              value={inputValues.ethUsdValue}
                              onChange={handleChange}
                              name="ethUsdValue"
                            />
                          </div>
                          <div className="custom-select price-check">
                            <div className="select-title">USD</div>
                            <ul id="menu-type3" className="select-list"></ul>
                            <select id="ETH_currency" className="hide">
                              <option value="USD">USD</option>
                              <option value="EUR">EUR</option>
                              <option value="RUR">RUR</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="widget">
                      <h6 className="widget-title">ICO Calendar</h6>

                      <div className="entry-box" id="ICO-Calendar">
                        {icoCalendar?.slice(0, 4).map((ico, index) => (
                          <div class="entry entry-ico" key={index}>
                            <div class="thumbnail-attachment">
                              <a href="#">
                                <img
                                  src={`https://backapi.bitcoinworld.news/api/media/${ico.logo}`}
                                  alt=""
                                />
                              </a>
                            </div>

                            <div class="entry-body">
                              <div class="entry-meta">
                                <time class="entry-date" datetime="">
                                  {formatDate(ico.end_date)}
                                </time>
                              </div>
                              <h6 class="entry-title">
                                <a href="#">{ico.title}</a>
                              </h6>
                              <p>{ico.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <a href="/ico" className="btn btn-small">
                        View All ICOs
                      </a>
                    </div>

                    <div className="widget">
                      <div className="banner-title">Advertisement</div>
                      <div id="ads250x250"></div>
                    </div>

                    <div className="widget">
                      <h6 className="widget-title">Most read</h6>
                      <ul className="most-read" id="most-read">
                        {mostReadBlog?.map((elem, index) => (
                          <li key={index}>
                            <h6>
                              <a onClick={() => handleClick(elem._id)}>
                                {elem.title}
                              </a>
                            </h6>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </aside>
                </div>
              </main>
            </div>
          </div>

          <div className="align-center">
            <div className="banner-wrap m-banner-bottom" id="ad-bottom">
              <div className="banner-title banner-bottom">
                <span>Advertisement</span>
                <i id="close-ad" className="bi bi-x-lg"></i>
              </div>
              <div id="ads970x90"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
