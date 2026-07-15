const CATEGORIES: { value: string; label: string }[] = [
  { value: "paintings", label: "Paintings" },
  { value: "sculpture", label: "Sculpture" },
  { value: "tapestry", label: "Tapestry" },
  { value: "other-collectibles", label: "Other Collectibles" },
  { value: "other-assorted", label: "Other Assorted" },
];

interface Props {
  title: string;
  category: string;
  onTitleChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

export function SearchControls({ title, category, onTitleChange, onCategoryChange }: Props) {
  return (
    <div>
      <label>
        Search title
        <input
          type="search"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="e.g. angel"
        />
      </label>
      <label>
        Category
        <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
          <option value="">All</option>
          {CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}