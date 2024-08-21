"use client";
export default function Slider({ slide }) {
  return (
    <>
      <div style={{ background: `url${slide.blog_img}` }} className="entry owl-item">
        <div class="entry-body">
          <div class="entry-meta">
            <a href="#" class="entry-label">
              {slide.tag}
            </a>
            <time class="entry-date" datetime="2024-08-11">
              Aug 11, 2024
            </time>
          </div>
          <h6 class="entry-title">
            <a>
              {slide.title}
            </a>
          </h6>
        </div>
      </div>
    </>
  );
}
