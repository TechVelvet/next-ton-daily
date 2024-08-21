"use client";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';

export default function ArticlePage({params}) {
  const [fullBlog, setFullBlog] = useState();
  useEffect(() => {
    const fetchFullBlog = async () => {
      try {
        const response = await fetch(`https://backapi.bitcoinworld.news/api/blog/${params.articleID}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setFullBlog(result.data);
      } catch (error) {
       console.log("Error fettichin Pin blog----------->", error);
      } 
    };

    fetchFullBlog();
  }, []);
  
  return (
    <>
      <div class="main col-sm-8">
        <h2 class="title">
          <b id="title">{fullBlog?.title}</b>
        </h2>
        <div class="content-element2">
          <img src={`https://backapi.bitcoinworld.news/api/media/${fullBlog?.blog_img}`} alt="" />
        </div>
        <div class="content-element2">{parse(typeof fullBlog?.description === 'string' ? fullBlog.description : '...')}</div>
      </div>
    </>
  );
}
  
