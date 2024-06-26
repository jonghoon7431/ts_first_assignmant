export type Countries = {
  altSpellings: string[];
  area: number;
  capital: string[];
  capitalInfo: {
    latlng: number[];
  };
  car: {
    side: string;
    signs: string[];
  };
  cca2: string;
  cca3: string;
  ccn3: string;
  coatOfArms?: {
    png: string;
    svg: string;
  };
  continents: string[];
  currencies: {
    XPF: {
      name: string;
      symbol: string;
    };
  };
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
  };
  flag: string;
  flags: {
    png: string;
    svg: string;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  independent: boolean;
  landlocked: boolean;
  languages: {
    [key: string]: string;
  };
  latlng: number[];
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  name: {
    common: string;
    nativeName: {
      fra: {
        common: string;
        official: string;
      };
    };
    official: string;
  };
  population: number;
  postalCode: {
    format: string;
    regex: string;
  };
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: {
    [key: string]: {
      common: string;
      official: string;
    };
  };
  unMember: boolean;
  isSelect: boolean;
};
