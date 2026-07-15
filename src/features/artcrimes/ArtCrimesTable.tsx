import { Link } from "react-router-dom";
import type { ArtCrime } from "../../types/artcrime";

interface Props {
  items: ArtCrime[];
}

export function ArtCrimesTable({ items }: Props) {
  if (items.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Maker</th>
          <th scope="col">Category</th>
          <th scope="col">Materials</th>
          <th scope="col">Period</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.uid}>
            <td>
              <Link to={`/artcrimes/${item.uid}`}>{item.title}</Link>
            </td>
            <td>{item.maker ?? "—"}</td>
            <td>{item.crimeCategory ?? "—"}</td>
            <td>{item.materials ?? "—"}</td>
            <td>{item.period ?? "—"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}