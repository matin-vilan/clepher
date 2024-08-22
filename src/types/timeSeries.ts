import { GetApiInterval, GetApiSymbol, GetApiTypes } from "./req";

export type MetaDataType = {
  "1. Information": string;
  "2. Symbol": string;
  "3. Last Refreshed": string;
  "4. Output Size": string;
  "5. Time Zone": string;
};

export type TimeSeriesIntraday = {
  "Meta Data": MetaDataType;
  "Time Series (Daily)": {
    [timestamp: string]: {
      "1. open": string;
      "2. high": string;
      "3. low": string;
      "4. close": string;
      "5. volume": string;
    };
  };
};

export type FiltersType = {
  function: GetApiTypes;
  symbol: GetApiSymbol;
  interval: GetApiInterval;
  adjusted?: boolean;
  extended_hours?: boolean;
  month?: string;
  outputsize?: "compact" | "full";
};

export type ChangeFilterProps = {
  filter: {
    name: keyof FiltersType;
    value: FiltersType[keyof FiltersType];
  };
};
