"use client";

import { useAPI } from "@/contexts/apiProvider";
import Pagination from "@/components/Pagination";

export default function Event() {
  
  const { eventCalendar, formatDate } = useAPI(); 
  

  return (
    <div id="content" class="page-content-wrap">
      <div class="container">
        <main id="main">
          <h2 class="title">EVENT Calendar</h2>

          <div
            class="table-responsive table-type-1 ico-calendar entry-box"
            id="calender-container"
          >
            <table style={{ minWidth: "850px" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Start</th>
                  <th>End</th>
                </tr>
              </thead>
              <tbody id="ICO_List">
                {eventCalendar?.map((event, index) => (
                  <tr key={index}>
                    <td>
                      <div class="entry entry-ico">
                        <div class="thumbnail-attachment">
                          <a href="#">
                            <img src={`https://backapi.bitcoinworld.news/api/media/${ico.logo}`} alt="" />
                          </a>
                        </div>
                        <div class="entry-body">
                          <h5 class="entry-title">
                            <a href="#">{event.title}</a>
                          </h5>
                          <p>sdvfdhk,fhgfgsgsrgrt</p>
                        </div>
                      </div>
                    </td>
                    <td>{formatDate(event.start_date)}</td>
                    <td>{formatDate(event.end_date)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul class="pagination" id="pagination-container">
            <Pagination />
          </ul>
        </main>
      </div>
    </div>
  );
  }
  