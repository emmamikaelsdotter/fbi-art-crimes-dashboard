import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { artCrimesApi, type ListParams } from "../api/artCrimesApi";

export function useArtCrimes(params: ListParams) {
  return useQuery({
    queryKey: ["artcrimes", params],
    queryFn: () => artCrimesApi.list(params),
    placeholderData: keepPreviousData,
  });
}