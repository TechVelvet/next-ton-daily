"use client";
import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";

const APIContext = createContext("");

export const APIProvider = ({ children }) => {
  const [pinBlogs, setPinblogs] = useState();
  const [latestBlog, setLatestBlog] = useState();
  const [pressReleases, setPressReleases] = useState();
  const [allBlogs, setAllblogs] = useState();
  const [icoCalendar, setIcoCalendar] = useState();
  const [mostReadBlog, setMostReadBlog] = useState();
  const [ads200x200, setAds200x200] = useState();

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  // currency calculator

  const fetchData = async (symbol) => {
    try {
      const response = await fetch(
        `https://api-cloud.bitmart.com/spot/quotation/v3/trades?symbol=${symbol}&limit=1`
      );
      const data = await response.json();
      return data.data[0][2];
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  // State to store default prices and input values
  const [prices, setPrices] = useState({
    eth: "",
    btc: "",
    ton: "",
  });
  const [inputValues, setInputValues] = useState({
    ethValue: "1",
    ethUsdValue: "",
    btcValue: "1",
    btcUsdValue: "",
    tonValue: "1",
    tonUsdValue: "",
    // xrpUsdValue: "",
  });
  const [navCurrVal,setnavCurrVal]= useState({
    ethUsdValue: "...",
    btcUsdValue: "...",
    tonUsdValue: "...",
    xrpUsdValue: "...",
  })

  // Fetch prices for all cryptocurrencies
  useEffect(() => {
    const updatePrices = async () => {
      const [ethPrice, btcPrice, tonPrice, xrpPrice] = await Promise.all([
        fetchData("ETH_USDT"),
        fetchData("BTC_USDT"),
        fetchData("TON_USDT"),
        fetchData("XRP_USDT"),
      ]);

      setPrices({
        eth: ethPrice,
        btc: btcPrice,
        ton: tonPrice,
        xrp: xrpPrice,
      });

      setnavCurrVal((prevValues) => ({
        ...prevValues,
        ethUsdValue: ethPrice,
        btcUsdValue: btcPrice,
        tonUsdValue: tonPrice,
        xrpUsdValue: xrpPrice,
      }));

      setInputValues((prevValues) => ({
        ...prevValues,
        ethUsdValue: ethPrice,
        btcUsdValue: btcPrice,
        tonUsdValue: tonPrice,
        xrpUsdValue: xrpPrice,
      }));
    };

    updatePrices();
    const interval = setInterval(updatePrices, 60000);
    return () => clearInterval(interval);
  }, []);

  // Handle changes in input fields
  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      const re = /^[0-9\b]+$/;
      if (e.target.value === '' || re.test(e.target.value)) {
        const sanitizedValue = e.target.value;
        switch (name) {
          case "ethValue":
            setInputValues((prevValues) => ({
              ...prevValues,
              ethUsdValue: sanitizedValue * prices.eth,
              [name]: value,
            }));
            break;
  
          case "ethUsdValue":
            setInputValues((prevValues) => ({
              ...prevValues,
              ethValue: sanitizedValue / prices.eth,
              [name]: value,
            }));
            break;
  
          case "btcValue":
            setInputValues((prevValues) => ({
              ...prevValues,
              btcUsdValue: sanitizedValue * prices.btc,
              [name]: value,
            }));
            break;
  
          case "btcUsdValue":
            setInputValues((prevValues) => ({
              ...prevValues,
              btcValue: sanitizedValue / prices.btc,
              [name]: value,
            }));
            break;
  
          case "tonValue":
            setInputValues((prevValues) => ({
              ...prevValues,
              tonUsdValue: sanitizedValue * prices.ton,
              [name]: value,
            }));
            break;
  
          case "tonUsdValue":
            setInputValues((prevValues) => ({
              ...prevValues,
              tonValue: sanitizedValue / prices.ton,
              [name]: value,
            }));
            break;
  
          default:
            break;
        }
      }
      // 


    },
    [prices]
  );


  // 
  const getPinnedBlog = () => {
    axios
      .get(
        `https://backapi.bitcoinworld.news/api/blog/info?&domain=TON Daily&pin=true`
      )
      .then((resp) => {
        const apiResp = resp.data;
        if (apiResp.success === 200) {
          setPinblogs(apiResp.data);
        } else {
          console.log("server error while fetching Pinned blogs");
        }
      })
      .catch((error) => {
        console.log("error in Pinned blog------>",error);
      });
  };

  const getLatestBlog = () => {
    axios
      .get(
        `https://backapi.bitcoinworld.news/api/blog/info?domain=TON Daily&latest=true`
      )
      .then((resp) => {
        const apiResp = resp.data;
        if (apiResp.success === 200) {
          setLatestBlog(apiResp.data);
        } else {
          console.log("server error while fetching latest blogs");
        }
      })
      .catch((error) => {
        console.log("error in latest blog------>",error);
      });
  };
  
  const getPressReleases = () => {
    axios
      .get(`https://backapi.bitcoinworld.news/api/blog/info?&domain=TON Daily&category=Press Releases`)
      .then((resp) => {
        const apiResp = resp.data;
        if (apiResp.success === 200) {
          setPressReleases(apiResp.data);
        } else {
          console.log("server error while fetching Press Releases");
        }
      })
      .catch((error) => {
        console.log("error in Press Releases------>",error);
      });
  };

  const getAllBlog = () => {
    axios.get(`https://backapi.bitcoinworld.news/api/blog/info?domain=TON Daily`)
    .then((resp) => {
      const apiResp = resp.data;
      if(apiResp.success === 200){
        setAllblogs(apiResp.data);
      }
      else{
        console.log("server error while fetching All blogs");        
      }
    })
    .catch((error) => {
      console.log("error in all blog------>",error);
    });
  }

  const getIcoCalendar = () => {
    axios.get(`https://backapi.bitcoinworld.news/api/calender/?domain=TON Daily&type=ICO`)
    .then((resp) => {
      const apiResp = resp.data;
      if(apiResp.success === 200){
        setIcoCalendar(apiResp.data);
      }
      else{
        console.log("server error while fetching Ico Calendar");        
      }
    })
    .catch((error) => {
      console.log("error in Ico Calendar------>",error);
    });
  }

  const getMostReadBlog = () => {
    axios.get(`https://backapi.bitcoinworld.news/api/blog/info?domain=TON Daily&most_view=true`)
    .then((resp) => {
      const apiResp = resp.data;
      if(apiResp.success === 200){
        setMostReadBlog(apiResp.data);
      }
      else{
        console.log("server error while fetching most_view");        
      }
    })
    .catch((error) => {
      console.log("error in most_view------>",error);
    });
  }

  const getAdvertisement = () => {
    axios.get(`https://backapi.bitcoinworld.news/api/advertisment/type-wise?domain=TON Daily`)
    .then((resp) => {
      const apiResp = resp.data
      console.log("apiResp=========>", apiResp);
      if(apiResp.success === 200){
        setAds200x200(apiResp.data);
      }
    })
    .catch((error) => {
      console.log("error in getAdvertisement------>", error);
      
    })
  }

  useEffect(() => {
    getPinnedBlog();
    getPressReleases();
    getLatestBlog();
    getAllBlog();
    getIcoCalendar();
    getMostReadBlog();
    getAdvertisement();
  }, []);

  const defaultAPI = {
    handleChange,
    inputValues,
    navCurrVal,
    formatDate,
    latestBlog,
    pressReleases,
    pinBlogs,
    allBlogs,
    icoCalendar,
    mostReadBlog,
    ads200x200
  };

  return (
    <APIContext.Provider value={defaultAPI}>{children}</APIContext.Provider>
  );
};

export const useAPI = () => useContext(APIContext);
