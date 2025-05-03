"use client";

const TrendingSection = ({trendingArticles}) => {
 

  return (
    <section id="trend" className="bg-gray-100 ">
      <div className="container mx-auto p-5">
        <div className="mb-6">
          <span className="inline-block p-2 uppercase text-sm text-white bg-orange-500 font-bold">
            Trending News
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {trendingArticles.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <div className="relative">
                {item.image_url ? (
                  <img
                    src={item.image_url}
                    alt="Trending"
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
                <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-3 py-1 rounded uppercase font-semibold">
                  {item.category?.[0] || "General"}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm text-gray-700 font-semibold mb-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-500"
                  >
                    {item.title}
                  </a>
                </h3>
                <div className="text-xs text-gray-500 font-semibold uppercase flex items-center gap-4">
                  <span className="flex items-center">
                    <i className="bi bi-calendar text-orange-500 mr-1"></i>{" "}
                    {item.pubDate?.split(" ")[0]}
                  </span>
                  <span className="flex items-center">
                    <i className="bi bi-heart text-orange-500 mr-1"></i>{" "}
                    {Math.floor(Math.random() * 100)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
