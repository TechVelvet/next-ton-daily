"use client"
import { useAPI } from "@/contexts/apiProvider";
import Pagination from "@/components/Pagination";

export default function Airdrop() {
  const { icoCalendar, formatDate } = useAPI(); 
    return (
      <div id="content" class="page-content-wrap airdrop_list">
        <div class="container">
          <main id="main">
            <h2 class="title">Airdrop Calendar</h2>

            <div
              class="table-responsive table-type-1 ico-calendar entry-box"
              id="calender-container"
            >
              <table style={{ minWidth: "850px" }}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Join Links</th>
                    <th>Winners</th>
                    <th>Qty</th>
                    <th>Ends In</th>
                  </tr>
                </thead>
                <tbody id="AirDropCaledar">
                  {
                  <tr>
                    <td>
                      <div class="entry entry-ico">
                        <div class="thumbnail-attachment">
                          <a href="#">
                            <img
                              src={`https://backapi.bitcoinworld.news/api/media/`}
                              alt=""
                            />
                          </a>
                        </div>
                        <div class="entry-body">
                          <h5 class="entry-title">
                            <a href="#">Hdac</a>
                          </h5>
                          <p>(HDAC)</p>
                        </div>
                      </div>
                    </td>
                    <td>Token</td>
                    <td>
                      <a href="">
                        <button class="btn btn-style-3 btn-small">Join</button>
                      </a>
                    </td>
                    <td>100</td>
                    <td>5000</td>
                    <td>20-09-2024</td>
                  </tr>
                  }
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
  