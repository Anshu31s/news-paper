import React, { useEffect, useState } from "react";
import axios from "axios";

const SportsSection = ({sportsArticles}) => {

  const [loading, setLoading] = useState(false);

  
  return (
    <section id="sports-section" className="pt-10 pb-10 bg-white">
      <div className="container mx-auto px-4">
      <span className="inline-block p-1 px-3 uppercase text-sm text-white bg-orange-500 mt-10">
          Sports News
        </span>
        <hr className="border-t-2 border-orange-500 mt-0 mb-4" />

        {loading ? (
          <p>Loading news...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured News */}
            {sportsArticles.length > 0 && (
              <div className="bg-white p-4 rounded shadow text-black">
                <a href={sportsArticles[0].link} target="_blank" rel="noreferrer">
                  <img
                    src={sportsArticles[0].image_url || "/placeholder.jpg"}
                    alt="News"
                    className="w-full h-64 object-cover rounded"
                  />
                </a>
                <div className="mt-4 text-sm text-gray-500 uppercase">
                  {sportsArticles[0].pubDate}
                </div>
                <h3 className="text-2xl font-semibold mt-2">
                  <a href={sportsArticles[0].link} target="_blank" rel="noreferrer" className="hover:underline">
                    {sportsArticles[0].title}
                  </a>
                </h3>
                <p className="mt-2 text-gray-700 line-clamp-4">{sportsArticles[0].description}</p>
              </div>
            )}

            {/* Side News List */}
            <div className="space-y-6">
              {sportsArticles.slice(1, 4).map((item, index) => (
                <div key={index} className={`flex gap-4 ${index > 0 ? "pt-4 border-t" : ""}`}>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1 text-black">
                      <a href={item.link} target="_blank" rel="noreferrer" className="hover:underline">
                        {item.title}
                      </a>
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
                    <span className="text-xs text-gray-400 block mt-2 uppercase">
                      {item.pubDate}
                    </span>
                  </div>
                  {item.image_url && (
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <img src={item.image_url} alt="news" className="w-32 h-20 object-cover rounded" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SportsSection;
