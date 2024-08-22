"use client";
import { usePathname } from "next/navigation";
import { useAPI } from "./apiProvider";

export default function Navbar() {
  const { handleChange, inputValues, navCurrVal } = useAPI();
  
  const pathname = usePathname()
  return (
    <>
      <nav id="mobile-advanced" className="mobile-advanced"></nav>

      <div className="market-info">
        <div className="container top-market">
          <a href="/">
            <img className="Brand-logo" alt="" id="brandLogo" />
          </a>
          <div className="market-items">
            <div className="market-item">
              <div className="market-inner">
                <span>TON</span>
                <div id="TON">${navCurrVal?.tonUsdValue}</div>
              </div>
            </div>

            <div className="market-item">
              <div className="market-inner">
                <span>BTC</span>
                <div id="BTC">${navCurrVal?.btcUsdValue}</div>
              </div>
            </div>

            <div className="market-item">
              <div className="market-inner">
                <span>ETH</span>
                <div id="ETH">${navCurrVal?.ethUsdValue}</div>
              </div>
            </div>

            <div className="market-item">
              <div className="market-inner">
                <span>XRP</span>
                <div id="XRP">${navCurrVal?.xrpUsdValue}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header id="header" className="header sticky-header">
        {/* <div className="searchform-wrap">
            <div className="vc-child h-inherit">
            <form className="search-form">
                <button type="submit" className="bi bi-search"></button>
                <div className="wrapper">
                <input type="text" name="search" placeholder="Start typing...">
                </div>
            </form>
            <button className="close-search-form"></button>
            </div>
        </div> */}

        <div className="menu-holder">
          <div className="container">
            <div className="menu-wrap">
              <div className="nav-item">
                <nav id="main-navigation" className="main-navigation">
                  <ul id="menu" className="clearfix">
                    <li className={pathname === "/" ? "current" : ""}>
                      <a href="/">Home</a>
                    </li>
                    <li className={pathname === "/ico" ? "current" : ""}>
                      <a href="/ico">ICO Calender</a>
                    </li>
                    <li className={pathname === "/airdrop" ? "current" : ""}>
                      <a href="/airdrop">Airdrop Calender</a>
                    </li>
                    <li className={pathname === "/event" ? "current" : ""}>
                      <a href="/event">Events</a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <div className="search-holder">

                    <button type="button" className="search-button"></button>

                </div> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
