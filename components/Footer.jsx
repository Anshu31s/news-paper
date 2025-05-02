import { useEffect, useState } from "react";
import {
  BsFacebook,
  BsTwitter,
  BsRss,
  BsInstagram,
  BsLinkedin,
  BsVimeo,
  BsCalendar,
  BsNewspaper,
  BsTelephone,
  BsEnvelope,
  BsClock,
  BsGeoAlt,
} from "react-icons/bs";

const Footer = () => {
  const [newsData, setNewsData] = useState([]);

    useEffect(() => {
     
    }, []);

  return (
    <>
      <section id="footer" className="pt-5 pb-5 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {/* Latest News */}
            <div>
              <b className="text-white text-lg block mb-4">Latest News</b>
              {newsData.map((news, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${
                    index !== 0 && "border-t mt-3 pt-3"
                  } text-white/50`}
                >
                  <div className="w-1/3 relative h-[100px] overflow-hidden rounded">
                    <img
                      src={
                        news.image_url ||
                        "https://via.placeholder.com/150x100?text=No+Image"
                      }
                      alt={news.title}
                      className="w-full rounded"
                    />
                    <span
                      className={`absolute top-0 left-0 text-white text-[10px] px-2 py-1 rounded bg-orange-500`}
                    >
                      {news.category?.[0] || "General"}
                    </span>
                  </div>
                  <div className="w-2/3">
                    <b className="text-sm block mb-1">
                      <a
                        href={news.link}
                        className="hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {news.title?.slice(0, 50) + "..."}
                      </a>
                    </b>
                    <span className="text-xs uppercase flex gap-4 items-center">
                      <span className="flex items-center gap-1">
                        <BsCalendar className="text-orange-500" />{" "}
                        {new Date(news.pubDate).toLocaleDateString()}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* Twitter Feed */}
            <div>
              <b className="text-white text-lg block mb-4">Twitter Feed</b>
              <ul className="text-sm text-white/50 space-y-4">
                {[
                  {
                    time: "About 2 days ago",
                    text: "Nuncekon dolor mi, accumsan quis ante id, eleifend suscipit purus. Praesent augue eros, consectetur eu eleifend inno, eget condimentum auctor",
                  },
                  {
                    time: "About 4 days ago",
                    text: "Aliquam erat volutpat. Proin rhoncus est ac ipsum varius fermentum. Integer a odio ornare mauris pharetra suscipitot. Integer vulputate elit erat.",
                  },
                  {
                    time: "About 5 days ago",
                    text: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit",
                  },
                ].map((tweet, idx) => (
                  <li key={idx} className="flex gap-3">
                    <a href="#" className="text-white text-xl">
                      <BsTwitter />
                    </a>
                    <div>
                      <span className="text-orange-500 block mb-1">
                        {tweet.time}
                      </span>
                      <span>{tweet.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              {/* About */}
              <div>
                <b className="text-white text-lg block mb-4">
                  About News Times
                </b>
                <div className="text-white text-3xl leading-tight uppercase">
                  <BsNewspaper className="inline-block text-orange-500 mr-2" />
                  News<span className="text-orange-500">Paper</span>
                  <span className="block text-sm text-center mt-1 text-gray-400">
                    Start Your News With Us
                  </span>
                </div>
                <p className="mt-3 text-sm text-white/50">
                  Aliquam erat volutpat. Proin rhoncus est ac ipsum varius
                  fermentum...
                </p>
                <ul className="text-white/50 mt-4 text-sm space-y-3">
                  <li>
                    <a href="#" className="flex items-center">
                      <BsTelephone className="text-orange-500 mr-2" /> Office:
                      +123 4567 890
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center">
                      <BsEnvelope className="text-orange-500 mr-2" />{" "}
                      info@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center">
                      <BsClock className="text-orange-500 mr-2" /> Opening
                      Hours: 10:00 - 18:00
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center">
                      <BsGeoAlt className="text-orange-500 mr-2" /> 36 Nora
                      Dreek, India
                    </a>
                  </li>
                </ul>
              </div>
              {/* Socials */}
              <div className="mt-10">
                <div className="border border-gray-700 p-3">
                  <b className="text-white text-lg block">Follow Us</b>
                  <ul className="flex flex-wrap justify-between items-center gap-2 text-white/50 text-3xl">
                    <li className="flex gap-3">
                      <a href="#">
                        <BsFacebook />
                      </a>
                      <a href="#">
                        <BsTwitter />
                      </a>
                      <a href="#">
                        <BsRss />
                      </a>
                      <a href="#">
                        <BsInstagram />
                      </a>
                      <a href="#">
                        <BsLinkedin />
                      </a>
                      <a href="#">
                        <BsVimeo />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <section id="footer_bottom" className="pt-3 pb-3 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between text-sm text-white/50">
            <div>
              <p className="mb-0">
                © 2025 NewsPaper. All Rights Reserved | Design by{" "}
                <a
                  className="text-orange-500 font-bold"
                  href="http://www.theanshu.tech"
                >
                  Anshus Sharma
                </a>
              </p>
            </div>
            <div>
              <ul className="flex flex-wrap items-center gap-2 justify-end text-xs uppercase">
                {["Facebook", "Twitter", "Pinterest", "Instagram"].map(
                  (item, i) => (
                    <li key={i} className="flex items-center">
                      <a className="text-white/50 hover:text-white" href="#">
                        {item}
                      </a>
                      {i < 3 && <span className="mx-2 text-gray-500">|</span>}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
