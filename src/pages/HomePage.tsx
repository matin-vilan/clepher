import { useEffect, useState } from "react";
import { getTimeSeries } from "../apis/timeSeries";
import { GetApiInterval, GetApiSymbol, GetApiTypes } from "../types/req";
import { TimeSeriesIntraday } from "../types/timeSeries";
import { createDynamicContext } from "../utils/dynamicContext";
import Home from "../components/pages/Home";

export const TimeSeriesContext = createDynamicContext<{
  timeSeries: TimeSeriesIntraday;
}>();

export default function HomePage() {
  const [timeSeries, setTimeSeries] = useState<TimeSeriesIntraday>();

  async function getTimeSeriesData() {
    const results = await getTimeSeries({
      type: GetApiTypes.TIME_SERIES_DAILY,
      interval: GetApiInterval["5MIN"],
      symbol: GetApiSymbol.IBM,
    });
    setTimeSeries(results);
  }

  useEffect(() => {
    getTimeSeriesData();
  }, []);

  return !timeSeries ? (
    <div>loading...</div>
  ) : (
    <TimeSeriesContext.ContextProvider timeSeries={timeSeries}>
      <Home />
    </TimeSeriesContext.ContextProvider>
  );
}
