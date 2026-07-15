import { useState } from "react";
import { useArtCrimes } from "../../hooks/useArtCrimes";
import { useDebounce } from "../../hooks/useDebounce";
import { ArtCrimesTable } from "./ArtCrimesTable";
import { Pagination } from "./Pagination";
import { SearchControls } from "./SearchControls";

const PAGE_SIZE = 20;

export function ArtCrimesPage() {
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const debouncedTitle = useDebounce(title, 300);

  const { data, isLoading, isError, error } = useArtCrimes({
    page,
    pageSize: PAGE_SIZE,
    title: debouncedTitle || undefined,
    category: category || undefined,
  });

  function handleTitleChange(value: string) {
    setTitle(value);
    setPage(1);
  }

  function handleCategoryChange(value: string) {
    setCategory(value);
    setPage(1);
  }

  return (
    <main>
      <h1>FBI Art Crimes</h1>
      <SearchControls
        title={title}
        category={category}
        onTitleChange={handleTitleChange}
        onCategoryChange={handleCategoryChange}
      />
      <p role="status">
        {isLoading ? "Loading…" : isError ? "" : `${data?.total ?? 0} records`}
      </p>
      {isError ? (
        <p role="alert">{error?.message ?? "Something went wrong"}</p>
      ) : (
        !isLoading && (
          <>
            <ArtCrimesTable items={data?.items ?? []} />
            {(data?.total ?? 0) > 0 && (
              <Pagination
                page={page}
                pageSize={PAGE_SIZE}
                total={data?.total ?? 0}
                onPageChange={setPage}
              />
            )}
          </>
        )
      )}
    </main>
  );
}