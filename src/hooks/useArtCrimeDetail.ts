import { useQuery } from "@tanstack/react-query";
import { artCrimesApi } from "../api/artCrimesApi";

export function useArtCrimeDetail(uid: string) {
  return useQuery({
    queryKey: ["artcrime", uid],
    queryFn: () => artCrimesApi.get(uid),
    enabled: Boolean(uid),
  });
}