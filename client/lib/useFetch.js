import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useFetch(endpoint) {
  const { data, error, isLoading } = useSWR(endpoint, fetcher);
  return { data, error, isLoading };
}