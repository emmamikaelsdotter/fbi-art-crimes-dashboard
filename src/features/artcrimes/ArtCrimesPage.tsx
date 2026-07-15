import { useArtCrimes } from "../../hooks/useArtCrimes";
import { ArtCrimesTable } from "./ArtCrimesTable";

export function ArtCrimesPage() {
  const { data, isLoading, isError, error } = useArtCrimes({
    page: 1,
    pageSize: 20,
  });

  if (isLoading) return <p>Loading…</p>;
  if (isError) return <p role="alert">{error?.message ?? "Something went wrong"}</p>;

  return (
    <main>
      <h1>FBI Art Crimes</h1>
      <p>{data?.total} records</p>
      <ArtCrimesTable items={data?.items ?? []} />
    </main>
  );
}