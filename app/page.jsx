"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import NewsSection from "@/components/NewsCarousel";
import TrendingSection from "@/components/TrendingSection";
import Footer from "@/components/Footer";
import SportsSection from "@/components/SportsSection";
import BusinessSection from "@/components/BusinessSection";

export default function HomePage() {
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [sportsArticles, setSportsArticles] = useState([]);
  const [businessArticles, setBusinessArticles] = useState([]);

  const fetchNewsByCategory = async (category) => {
    try {
      const res = await axios.get(`/api/get-news?category=${category}`);
      return res.data.data || [];
    } catch (err) {
      console.error(`Failed to fetch ${category} news:`, err);
      return [];
    }
  };

  useEffect(() => {
    const fetchAllNews = async () => {
      const [trending, sports, business] = await Promise.all([
        fetchNewsByCategory("top"),
        fetchNewsByCategory("sports"),
        fetchNewsByCategory("business"),
      ]);

      setTrendingArticles(trending);
      setSportsArticles(sports);
      setBusinessArticles(business);
    };

    fetchAllNews();
  }, []);

  return (
    <>
      <TopHeader />
      <Header />

      {/* Carousel or Hero News */}
      <NewsSection trendingNews={trendingArticles} />

      {/* Trending */}
      <TrendingSection trendingArticles={trendingArticles} />

      {/* Sports */}
      <SportsSection sportsArticles={sportsArticles} />

      {/* Business */}
      <BusinessSection businessArticles={businessArticles} />

      <Footer />
    </>
  );
}
