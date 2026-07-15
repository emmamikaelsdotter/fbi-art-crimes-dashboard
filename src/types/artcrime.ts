export interface ArtCrimeImage {
  large?: string;
  thumb?: string;
  original?: string;
  caption?: string;
}

export interface ArtCrime {
  uid: string;
  title: string;
  maker: string | null;
  materials: string | null;
  measurements: string | null;
  period: string | null;
  crimeCategory: string | null;
  description: string | null;
  additionalData: string | null;
  referenceNumber: string | null;
  images: ArtCrimeImage[];
  url: string;
  modified: string;
}

export interface ArtCrimesResponse {
  total: number;
  page: number;
  items: ArtCrime[];
}