interface IKeyValuePair {
  [key: string]: number;
}

interface IMarketData {
  market_cap: IKeyValuePair;
}

interface ILinks {
  homepage: string[];
}

interface ICryptocurrencyDetails {
  market_cap_rank: number;
  name: string;
  symbol: string;
  hashing_algorithm: string;
  market_data: IMarketData;
  description: IKeyValuePair;
  genesis_date: Date;
  links: ILinks;
}

export default ICryptocurrencyDetails;
