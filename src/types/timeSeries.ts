import { GetApiInterval, GetApiSymbol, GetApiTypes } from "./req";

export type MetaDataType = {
  [key: string]: string;
};

export type TimeSeriesIntraday = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  "Meta Data": MetaDataType;
  [key: string]: {
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
