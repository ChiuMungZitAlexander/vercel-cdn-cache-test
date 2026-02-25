import { createFileRoute } from "@tanstack/react-router";

import { getData } from "../api/notion-data";

export const Route = createFileRoute("/")({
  component: App,
  loader: async () => {
    const data = await getData();
    return data;
  },
});

function App() {
  const data = Route.useLoaderData();

  return <div>Data: {data}</div>;
}
