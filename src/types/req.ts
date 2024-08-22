export type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  body?: string | FormData;
  APIKey?: string;
  mode?: "no-cors" | "cors" | "same-origin"; // no-cors, *cors, same-origin
  cache?: "default" | "no-cache" | "reload" | "force-cache" | "only-if-cached";
  credentials?: "include" | "same-origin" | "omit";
  redirect?: "manual" | "follow" | "error";
  referrerPolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
};

export type DefaultRequest = {
  headers?: Record<string, string>;
};

export enum GetApiTypes {
  TIME_SERIES_INTRADAY = "TIME_SERIES_INTRADAY",
  TIME_SERIES_DAILY = "TIME_SERIES_DAILY",
  TIME_SERIES_DAILY_ADJUSTED = "TIME_SERIES_DAILY_ADJUSTED",
  // and so on ...
}

export enum GetApiSymbol {
  IBM = "IBM",
}

export enum GetApiInterval {
  "1MIN" = "1min",
  "5MIN" = "5min",
  "15MIN" = "15min",
  "30MIN" = "30min",
  "60MIN" = "60min",
}
