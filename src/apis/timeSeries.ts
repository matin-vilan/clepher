import { fetchRequest } from "../services/fetchReq";
import { TimeSeriesIntraday } from "../types/timeSeries";
import {
  DefaultRequest,
  GetApiInterval,
  GetApiSymbol,
  GetApiTypes,
} from "./../types/req";

export async function getTimeSeries(
  args: {
    type: GetApiTypes;
    symbol: GetApiSymbol;
    interval: GetApiInterval;
  } & DefaultRequest
): Promise<TimeSeriesIntraday> {
  return await fetchRequest(`?function=${args.type}&symbol=${args.symbol}`, {
    method: "GET",
    headers: args.headers,
  });
}
