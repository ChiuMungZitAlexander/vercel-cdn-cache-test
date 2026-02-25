import { createServerFn } from "@tanstack/react-start";
import { setResponseHeaders } from "@tanstack/react-start/server";

export const getData = createServerFn().handler(async () => {
  const data = await new Promise<number>((resolve) =>
    setTimeout(() => resolve(888), 1000)
  );

  console.log("data", data);

  setResponseHeaders(
    new Headers({
      "Cache-Control": "public, max-age=3600",
      "CDN-Cache-Control": "max-age=3600, stale-while-revalidate=600",
      "Vercel-CDN-Cache-Control": "max-age=3600, stale-while-revalidate=600",
    })
  );

  return data;
});
