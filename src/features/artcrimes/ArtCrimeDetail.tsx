import { Link, useParams } from "react-router-dom";
import { useArtCrimeDetail } from "../../hooks/useArtCrimeDetail";

export function ArtCrimeDetail() {
  const { uid } = useParams();
  const { data, isLoading, isError, error } = useArtCrimeDetail(uid ?? "");

  if (isLoading)
    return (
      <main>
        <p>Loading…</p>
      </main>
    );

  if (isError)
    return (
      <main>
        <p role="alert">{error?.message ?? "Something went wrong"}</p>
        <Link to="/">Back to list</Link>
      </main>
    );

  if (!data) return null;

  const image = data.images?.[0];

  return (
    <main>
      <p>
        <Link to="/">← Back to list</Link>
      </p>
      <h1>{data.title}</h1>
      {image?.large && <img src={image.large} alt={image.caption || data.title} />}
      <dl className="detail-list">
        <dt>Maker</dt>
        <dd>{data.maker ?? "—"}</dd>
        <dt>Category</dt>
        <dd>{data.crimeCategory ?? "—"}</dd>
        <dt>Materials</dt>
        <dd>{data.materials ?? "—"}</dd>
        <dt>Measurements</dt>
        <dd>{data.measurements ?? "—"}</dd>
        <dt>Period</dt>
        <dd>{data.period ?? "—"}</dd>
        <dt>Reference number</dt>
        <dd>{data.referenceNumber ?? "—"}</dd>
      </dl>
      {data.description && <p>{data.description}</p>}
    </main>
  );
}