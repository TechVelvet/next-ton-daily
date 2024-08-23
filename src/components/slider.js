"use client";

import { useAPI } from "../contexts/apiProvider";

export default function Slider({ slide }) {
  const { formatDate } = useAPI();
  return (
    <>
      <div class="owl-item">
        <div class="owl-item">
          <a href={`article/${slide._id}`}>
            <img src={`https://backapi.bitcoinworld.news/api/media/${slide.blog_img}`} alt=""/>
          </a>
        </div>
      </div>
      <div
        style={{ background: `url${slide.blog_img}` }}
        className="entry owl-item"
      >
        <div className="entry-body">
          <div className="entry-meta">
            <a href="#" className="entry-label">
              {slide.tag}
            </a>
            <time className="entry-date" dateTime="2024-08-11">
              {formatDate(slide.updatedAt)}
            </time>
          </div>
          <h6 className="entry-title">
            <a>{slide.title}</a>
          </h6>
        </div>
      </div>
    </>
  );
}
