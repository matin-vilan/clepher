import { useCallback, useEffect, useState } from "react";
import { getTimeSeries } from "../apis/timeSeries";
import { GetApiInterval, GetApiSymbol, GetApiTypes } from "../types/req";
import {
  ChangeFilterProps,
  FiltersType,
  TimeSeriesIntraday,
} from "../types/timeSeries";
import { createDynamicContext } from "../utils/dynamicContext";
import Intraday from "../components/pages/Intraday";
import { Link } from "react-router-dom";

export const TimeSeriesInterdayContext = createDynamicContext<{
  timeSeries: TimeSeriesIntraday;
  changeFilters: (props: ChangeFilterProps) => void;
  filters: FiltersType;
}>();

export default function IntradayPage() {
  const [timeSeries, setTimeSeries] = useState<TimeSeriesIntraday>();
  const [filters, setFilters] = useState<FiltersType>({
    symbol: GetApiSymbol.IBM,
    function: GetApiTypes.TIME_SERIES_INTRADAY,
    interval: GetApiInterval["5MIN"],
    adjusted: true,
  });

  const getTimeSeriesData = useCallback(async () => {
    const results = await getTimeSeries({
      function: filters.function,
      interval: filters.interval,
      symbol: filters.symbol,
      adjusted: filters.adjusted || true,
    });
    setTimeSeries(results);
  }, [filters.function, filters.interval, filters.symbol, filters.adjusted]);

  function changeFilters(props: ChangeFilterProps) {
    const { filter } = props;
    setFilters((prev) => ({ ...prev, [filter.name]: filter.value }));
  }

  useEffect(() => {
    getTimeSeriesData();
  }, [getTimeSeriesData]);

  return (
    <div className="bg-black">
      <div className="w-full container mx-auto ">
        {!timeSeries ? (
          <div>loading...</div>
        ) : (
          <TimeSeriesInterdayContext.ContextProvider
            timeSeries={timeSeries}
            changeFilters={changeFilters}
            filters={filters}
          >
            <Link to="/" style={{ color: "white" }}>
              Go back to daily page
            </Link>
            <Intraday />
          </TimeSeriesInterdayContext.ContextProvider>
        )}
      </div>
    </div>
  );
}
