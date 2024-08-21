export default function Navbar() {
  return (
    <>
      <nav id="mobile-advanced" class="mobile-advanced"></nav>

      <div class="market-info">
        <div class="container top-market">
          <a href="index.html">
            <img class="Brand-logo" alt="" id="brandLogo" />
          </a>
          <div class="market-items">
            <div class="market-item">
              <div class="market-inner">
                <span>TON</span>
                <div id="TON">...</div>
              </div>
            </div>

            <div class="market-item">
              <div class="market-inner">
                <span>BTC</span>
                <div id="BTC">....</div>
              </div>
            </div>

            <div class="market-item">
              <div class="market-inner">
                <span>ETH</span>
                <div id="ETH">....</div>
              </div>
            </div>

            <div class="market-item">
              <div class="market-inner">
                <span>XRP</span>
                <div id="XRP">....</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header id="header" class="header sticky-header">
        {/* <div class="searchform-wrap">
            <div class="vc-child h-inherit">
            <form class="search-form">
                <button type="submit" class="bi bi-search"></button>
                <div class="wrapper">
                <input type="text" name="search" placeholder="Start typing...">
                </div>
            </form>
            <button class="close-search-form"></button>
            </div>
        </div> */}

        <div class="menu-holder">
          <div class="container">
            <div class="menu-wrap">
              <div class="nav-item">
                <nav id="main-navigation" class="main-navigation">
                  <ul id="menu" class="clearfix">
                    <li class="current">
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="ico_list.html">ICO Calender</a>
                    </li>
                    <li>
                      <a href="airdrop_list.html">Airdrop Calender</a>
                    </li>
                    <li>
                      <a href="event_list.html">Events</a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <div class="search-holder">

                    <button type="button" class="search-button"></button>

                </div> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
