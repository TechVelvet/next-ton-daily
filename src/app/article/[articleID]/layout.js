export async function generateMetadata({ params }, parent) {
  // read route params
  const id = params.id
 
  // fetch data
  const product = await fetch(`https://backapi.bitcoinworld.news/api/blog/${params.articleID}`).then((res) => res.json())
 
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: product.data.title,
    openGraph: {
      images: [`https://backapi.bitcoinworld.news/api/media/${product.data.blog_img}`, ...previousImages],
    },
  }
}

export default function Layout({children}) {
  return (
    <>
        <div className="breadcrumbs-wrap no-title">
          <div className="container">
            <ul className="breadcrumbs">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="news_category.html">News</a>
              </li>
              <li>Single Blog Post</li>
            </ul>
          </div>
        </div>
        <div id="content" className="page-content-wrap">
          <div className="container">
            <div className="row">
              <main id="main" className="col-lg-9 col-md-12">
                <div className="content-element">
                  <div className="entry-single">
                    <div className="row">
                      <div className="sidebar col-sm-4">
                        <div className="widget">
                          <div className="entry-box">
                            <div className="entry entry-small">
                              <div className="thumbnail-attachment">
                                <div className="entry-label">Blockchain</div>
                              </div>

                              <div className="entry-body">
                                <div className="entry-meta">
                                  <p>Date:&nbsp;</p>
                                  <time className="entry-date" id="BlogDate"></time>
                                  <br />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="widget">
                          <div className="share-wrap">
                            <span className="share-title">Share this:</span>
                            <ul className="social-icons share v-type">
                              <li>
                                <a id="composeTweet" className="sh-twitter">
                                  <i className="icon-twitter"></i>Twitter
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://t.me/share/url?url=YourMessage"
                                  target="_blank"
                                  className="sh-telegram"
                                >
                                  <i className="icon-telegram"></i>Telegram
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {children}
                    </div>
                  </div>
                </div>
              </main>
              <aside id="sidebar" className="col-lg-3 col-md-12 sbl">
                <div className="widget">
                  <h6 className="widget-title">ICO Calendar</h6>

                  <div className="entry-box" id="ICO-Calendar"></div>

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

                  <ul className="most-read" id="most-read"></ul>
                </div>
                <div className="widget">
                  <h6 className="widget-title">Latest</h6>

                  <div className="entry-box" id="Latest"></div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      
    </>
  );
}
