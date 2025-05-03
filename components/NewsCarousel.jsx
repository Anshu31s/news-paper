import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
const NewsSection = ({trendingNews}) => {

  const [loading, setLoading] = useState(false);


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section id="center" className="pt-5 pb-5 bg-white">
      <div className="container mx-auto">
        <div className="bg-dark mx-0 flex items-center justify-between p-5">
          <div className="flex items-center">
            <span className="bg-orange-500 text-white p-2 text-sm font-semibold uppercase">
              Breaking News
            </span>
          </div>
          <div className="flex-1 mt-1">
            <span className="text-white text-base">
              {trendingNews[0]?.title || "No breaking news available."}
            </span>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="flex mt-4">
          <div className="w-7/12 mx-auto">
            <Carousel autoplay className="rounded-lg overflow-hidden">
              {trendingNews.map((news) => (
                <div key={news.article_id}>
                  <div className="relative w-full h-[400px]">
                    <a href={news.link}>
                      <img
                        src={news.image_url}
                        alt="news"
                        className="w-full h-full object-cover" // Image fills the box without distortion
                        style={{
                          minHeight: "400px",
                          maxHeight: "400px",
                          width: "100%",
                        }}
                      />
                    </a>
                    <div className="absolute bottom-0 bg-gray-100 bg-opacity-60 w-full p-4">
                      <span className="bg-orange-500 px-2 py-1 text-xs uppercase rounded">
                        {news.category}
                      </span>
                      <h2 className=" text-lg font-bold mt-2">
                        <a
                          href={news.link}
                          className=" hover:underline"
                        >
                          {news.title}
                        </a>
                      </h2>
                      <div className="text-gray-300 text-xs mt-1">
                        <i className="bi bi-calendar text-orange-500 mr-1"></i>
                        {news.pubDate}
                        <i className="bi bi-heart text-orange-500 ml-4 mr-1"></i>
                        {news.sentiment || 0}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          <div className="w-4/12 mx-auto">
            <Carousel autoplay className="rounded-lg overflow-hidden">
              {trendingNews.map((news) => (
                <div key={news.article_id}>
                  <div className="relative w-full h-[400px]">
                    <a href={news.link}>
                      <img
                        src={news.image_url}
                        alt="news"
                        className="w-full h-full object-cover" 
                        style={{
                          minHeight: "400px",
                          maxHeight: "400px",
                          width: "100%",
                        }}
                      />
                    </a>
                    <div className="absolute bottom-0 bg-gray-100 bg-opacity-60 w-full p-4">
                      <span className="bg-orange-500 px-2 py-1 text-xs uppercase rounded">
                        {news.category}
                      </span>
                      <h2 className=" text-lg font-bold mt-2">
                        <a
                          href={news.link}
                          className=" hover:underline"
                        >
                          {news.title}
                        </a>
                      </h2>
                      <div className="text-gray-300 text-xs mt-1">
                        <i className="bi bi-calendar text-orange-500 mr-1"></i>
                        {news.pubDate}
                        <i className="bi bi-heart text-orange-500 ml-4 mr-1"></i>
                        {news.sentiment || 0}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default NewsSection;
