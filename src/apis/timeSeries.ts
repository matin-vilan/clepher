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
    function: GetApiTypes;
    symbol: GetApiSymbol;
    interval: GetApiInterval;
    adjusted: boolean;
  } & DefaultRequest
): Promise<TimeSeriesIntraday> {
  return await fetchRequest(
    `?function=${args.function}&symbol=${args.symbol}&interval=${args.interval}&adjusted=${args.adjusted}`,
    {
      method: "GET",
      headers: args.headers,
    }
  );
}
