import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

async function getData() {
  const response = await fetch("/api/notion-data", {
    method: "GET",
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch notion data: ${response.status}`);
  }

  return (await response.json()) as number;
}

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["notion-data"],
    queryFn: getData,
    staleTime: 3600 * 1000,
    gcTime: 3600 * 1000,
  });

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (isError) {
    return <div>Failed to load data: {error.message}</div>;
  }

  return <div>Data: {data}</div>;
}
