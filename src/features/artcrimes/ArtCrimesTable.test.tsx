import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ArtCrimesTable } from "./ArtCrimesTable";
import type { ArtCrime } from "../../types/artcrime";

const items: ArtCrime[] = [
  {
    uid: "1",
    title: "Requiem",
    maker: "Gib Singleton",
    materials: "Bronze",
    measurements: null,
    period: null,
    crimeCategory: "sculpture",
    description: null,
    additionalData: null,
    referenceNumber: null,
    images: [],
    url: "",
    modified: "",
  },
];

describe("ArtCrimesTable", () => {
  it("renders a row for each item", () => {
    render(
      <MemoryRouter>
        <ArtCrimesTable items={items} />
      </MemoryRouter>
    );
    expect(screen.getByText("Requiem")).toBeInTheDocument();
    expect(screen.getByText("Gib Singleton")).toBeInTheDocument();
  });

  it("shows a dash for missing values", () => {
    render(
      <MemoryRouter>
        <ArtCrimesTable items={items} />
      </MemoryRouter>
    );
    expect(screen.getAllByText("—").length).toBeGreaterThan(0);
  });

  it("links the title to the detail page", () => {
    render(
      <MemoryRouter>
        <ArtCrimesTable items={items} />
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: "Requiem" });
    expect(link).toHaveAttribute("href", "/artcrimes/1");
  });
});