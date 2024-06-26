import { Countries } from "../types/country.type";

export async function getCountries(): Promise<Countries[]> {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  if (!res.ok) {
    throw new Error();
  }
  return res.json();
}

//TODO region 별로 분리되는 로직
export function sortRegion(region: string) {}
