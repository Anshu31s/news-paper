import axios from "axios";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "top";
  const country = searchParams.get("country") || "in";
  const language = searchParams.get("language") || "hi";
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return Response.json({
      success: false,
      data: [],
      message: "Missing API key.",
    });
  }

  try {
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=${country}&language=${language}&category=${category}`;
    const response = await axios.get(url);

    const results = response.data.results || [];

    return new Response(
      JSON.stringify({
        success: true,
        data: results,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("API error:", error);
    return Response.json({
      success: false,
      data: [],
      message: "Failed to fetch news.",
    });
  }
}
