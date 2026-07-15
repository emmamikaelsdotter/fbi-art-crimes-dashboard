import type { ArtCrime, ArtCrimesResponse } from "../types/artcrime";
import sample from "../mocks/artcrimes.sample.json";

export interface ListParams {
  page?: number;
  pageSize?: number;
  title?: string;
  category?: string;
}

export interface ArtCrimesApi {
  list: (params: ListParams) => Promise<ArtCrimesResponse>;
  get: (uid: string) => Promise<ArtCrime>;
}

const BASE_URL = "https://api.fbi.gov/artcrimes";

const realApi: ArtCrimesApi = {
  async list({ page = 1, pageSize = 20, title, category }) {
    const query = new URLSearchParams();
    query.set("page", String(page));
    query.set("pageSize", String(pageSize));
    if (title) query.set("title", title);
    if (category) query.set("crimeCategory", category);

    const response = await fetch(`${BASE_URL}?${query.toString()}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch art crimes (${response.status})`);
    }
    return response.json();
  },

  async get(uid) {
    const response = await fetch(`https://api.fbi.gov/@artcrimes/${uid}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch art crime (${response.status})`);
    }
    return response.json();
  },
};

const mockApi: ArtCrimesApi = {
  async list({ page = 1, pageSize = 20, title, category }) {
    const all = (sample as ArtCrimesResponse).items;
    const filtered = all.filter((item) => {
      const matchesTitle = title
        ? item.title.toLowerCase().includes(title.toLowerCase())
        : true;
      const matchesCategory = category ? item.crimeCategory === category : true;
      return matchesTitle && matchesCategory;
    });
    const start = (page - 1) * pageSize;
    const items = filtered.slice(start, start + pageSize);
    return { total: filtered.length, page, items };
  },

  async get(uid) {
    const all = (sample as ArtCrimesResponse).items;
    const item = all.find((i) => i.uid === uid);
    if (!item) {
      throw new Error("Art crime not found");
    }
    return item;
  },
};

const useMock = import.meta.env.VITE_USE_MOCK === "true";

export const artCrimesApi: ArtCrimesApi = useMock ? mockApi : realApi;