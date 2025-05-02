import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import axios from "axios";

const Page = async ({ params }) => {
  const category = params.category || "top";
  const apiKey = process.env.NEWS_API_KEY;
  const country = "in";
  const language = "hi";

  let results = [];

  try {
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=${country}&language=${language}&category=${category}`;
    const response = await axios.get(url);
    results = response.data.results || [];
  } catch (error) {
    console.error("API fetch error:", error);
  }

  return (
    <div>
      <TopHeader />
      <Header />
      <section id="center" className="pt-5 pb-5 bg-white text-black">
        <div className="container mx-auto px-4">
          {/* Main Feature Row (First news item) */}
          {results[0] && (
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="relative">
                <a href={results[0].link}>
                  <img
                    src={results[0].image_url }
                    className="w-full h-64 object-cover"
                    alt="Main news"
                  />
                </a>
                <div className="absolute top-0 p-3 flex space-x-2 text-xs uppercase">
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded">
                    New
                  </span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded">
                    {category}
                  </span>
                </div>
                <div className="absolute bottom-0 p-3 bg-opacity-50 text-black">
                  <b className="text-2xl block">
                    <a href={results[0].link || "#"}>
                      {results[0].title}
                    </a>
                  </b>
                </div>
              </div>

              <div>
                <span className="text-sm text-orange-500">
                  {results[0].creator?.[0] || "Unknown"} —{" "}
                  {new Date(results[0].pubDate).toLocaleString()}
                </span>
                <b className="text-3xl block mt-3">
                  {results[0].title}
                </b>
                <p className="mt-3 text-gray-700 line-clamp-6">{results[0].description}</p>
                <span className="text-sm">
                  <a className="text-orange-500" href={results[0].link}>
                    Read More
                  </a>
                </span>
              </div>
            </div>
          )}

          {/* Latest News Header */}
          <div className="mt-12">
            <b className="inline-block px-3 py-1 text-white text-sm uppercase bg-orange-500">
              Latest News in {category}
            </b>
            <hr className="border-orange-500 mt-2 mb-4" />
          </div>

          {/* Latest News Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {results.slice(1, 9).map((item, idx) => (
              <div key={idx}>
                <div className="relative">
                  <a href={item.link || "#"}>
                    <img
                      src={item.image_url || "/image/default.jpg"}
                      className="w-full h-48 object-cover"
                      alt={item.title}
                    />
                  </a>
                  <div className="absolute top-0 p-2">
                    <b className="bg-orange-500 text-white text-xs px-3 py-1 rounded">
                      {item.category?.[0] || category}
                    </b>
                  </div>
                </div>
                <div className="mt-3">
                  <b className="block mb-1">
                    <a href={item.link || "#"}>{item.title}</a>
                  </b>
                  <span className="text-gray-500 text-xs uppercase font-bold">
                    {new Date(item.pubDate).toLocaleDateString()} •{" "}
                    {item.source_id}
                  </span>
                  <p className="mt-2 text-sm text-gray-600">
                    {item.description?.slice(0, 100)}...
                  </p>
                  <span className="text-sm">
                    <a className="text-orange-500" href={item.link}>
                      Read More
                    </a>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
