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
import Loading from "../components/common/Loading";
import PageLayout from "../components/common/PageLayout";
import LinkButton from "../components/common/LinkButton";

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
    <PageLayout>
      {!timeSeries ? (
        <Loading />
      ) : (
        <TimeSeriesInterdayContext.ContextProvider
          timeSeries={timeSeries}
          changeFilters={changeFilters}
          filters={filters}
        >
          <LinkButton to="/">Go back to Daily Page</LinkButton>
          <Intraday />
        </TimeSeriesInterdayContext.ContextProvider>
      )}
    </PageLayout>
  );
}
