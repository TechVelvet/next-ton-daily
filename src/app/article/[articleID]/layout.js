export async function generateMetadata({ params }, parent) {
  // read route params
  const id = params.id
 
  // fetch data
  const product = await fetch(`https://backapi.bitcoinworld.news/api/blog/${params.articleID}`).then((res) => res.json())
 
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: product.title,

    openGraph: {
      images: [`https://backapi.bitcoinworld.news/api/media/${product.data.blog_img}`, ...previousImages],
    },
  }
}

export default function Layout({children}) {
  return (
    <>
        <div class="breadcrumbs-wrap no-title">
          <div class="container">
            <ul class="breadcrumbs">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="news_category.html">News</a>
              </li>
              <li>Single Blog Post</li>
            </ul>
          </div>
        </div>
        <div id="content" class="page-content-wrap">
          <div class="container">
            <div class="row">
              <main id="main" class="col-lg-9 col-md-12">
                <div class="content-element">
                  <div class="entry-single">
                    <div class="row">
                      <div class="sidebar col-sm-4">
                        <div class="widget">
                          <div class="entry-box">
                            <div class="entry entry-small">
                              <div class="thumbnail-attachment">
                                <div class="entry-label">Blockchain</div>
                              </div>

                              <div class="entry-body">
                                <div class="entry-meta">
                                  <p>Date:&nbsp;</p>
                                  <time class="entry-date" id="BlogDate"></time>
                                  <br />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="widget">
                          <div class="share-wrap">
                            <span class="share-title">Share this:</span>
                            <ul class="social-icons share v-type">
                              <li>
                                <a id="composeTweet" class="sh-twitter">
                                  <i class="icon-twitter"></i>Twitter
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://t.me/share/url?url=YourMessage"
                                  target="_blank"
                                  class="sh-telegram"
                                >
                                  <i class="icon-telegram"></i>Telegram
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
              <aside id="sidebar" class="col-lg-3 col-md-12 sbl">
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
                <div class="widget">
                  <h6 class="widget-title">Latest</h6>

                  <div class="entry-box" id="Latest"></div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      
    </>
  );
}
