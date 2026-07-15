import { useState } from "react";
import { useArtCrimes } from "../../hooks/useArtCrimes";
import { ArtCrimesTable } from "./ArtCrimesTable";
import { Pagination } from "./Pagination";

const PAGE_SIZE = 20;

export function ArtCrimesPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useArtCrimes({
    page,
    pageSize: PAGE_SIZE,
  });

  if (isLoading) return <p>Loading…</p>;
  if (isError) return <p role="alert">{error?.message ?? "Something went wrong"}</p>;

  return (
    <main>
      <h1>FBI Art Crimes</h1>
      <p>{data?.total} records</p>
      <ArtCrimesTable items={data?.items ?? []} />
      <Pagination
        page={page}
        pageSize={PAGE_SIZE}
        total={data?.total ?? 0}
        onPageChange={setPage}
      />
    </main>
  );
}