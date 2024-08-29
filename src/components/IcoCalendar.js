import React from "react";

function IcoCalendar({ formatDate, icoCalendar }) {
  return (
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
  );
}

export default IcoCalendar;
