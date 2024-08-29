import React from "react";
function LatestBlogs({ handleClick, formatDate, latestBlog }) {


  return (
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
                <a onClick={() => handleClick(entry._id)}>{entry.title}</a>
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
  );
}

export default LatestBlogs;
