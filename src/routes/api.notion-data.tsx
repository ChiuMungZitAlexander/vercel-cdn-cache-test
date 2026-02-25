import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/notion-data")({
  server: {
    handlers: {
      GET: async () => {
        const data = await new Promise<number>((resolve) =>
          setTimeout(() => resolve(888), 1000)
        );

        console.log("data", data);

        return new Response(JSON.stringify(data), {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control":
              "public, max-age=3600, s-maxage=3600, stale-while-revalidate=600",
            "CDN-Cache-Control": "max-age=3600, stale-while-revalidate=600",
            "Vercel-CDN-Cache-Control":
              "max-age=3600, stale-while-revalidate=600",
          },
        });
      },
    },
  },
});
