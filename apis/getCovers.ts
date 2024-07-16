import { h5XgIoBaseUrl } from ".";
import { h5XgBasicHeaders } from ".";

export interface Main {
  code: number;
  data: Data[];
  message: string;
  riskControl: null;
}

export interface Data {
  tagsCds: TagsCds | null;
  h5TargetUrl: string;
  isPush: number;
  isDelete: null;
  iosTargetUrl: string;
  webTargetUrl: string;
  language: string;
  sortCode: number;
  androidTargetUrl: string;
  iosAppstoreUrl: null;
  webImage: string;
  isWeb: number;
  name: string;
  appImage: string;
  id: number;
  targetUrl: null;
  remarks: null | string;
}

export enum TagsCds {
  FeaturedGame = "featuredGame",
  Promotions = "promotions",
}

type Props = {
  lang?: string;
};
export async function getCovers({ lang }: Props): Promise<Data[]> {
  const url = new URL("/api/forward/v1/ra-hall/banner/list", h5XgIoBaseUrl)
    .href;

  // headers
  const headers = new Headers(h5XgBasicHeaders);
  lang && headers.set("Accept-Language", lang);

  const res = await fetch(url, {
    headers: headers,
    next: { revalidate: 60, tags: ["covers"] },
  });

  const data = await res.json();

  return data.data || [];
}
