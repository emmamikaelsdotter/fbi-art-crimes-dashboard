export const CATEGORIES: { value: string; label: string }[] = [
  { value: "paintings", label: "Paintings" },
  { value: "sculpture", label: "Sculpture" },
  { value: "tapestry", label: "Tapestry" },
  { value: "other-collectibles", label: "Other Collectibles" },
  { value: "other-assorted", label: "Other Assorted" },
];

export const CATEGORY_LABELS: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.value, c.label])
);
