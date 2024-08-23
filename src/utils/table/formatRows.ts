import { RowType } from "../../types/table";
import { TimeSeriesIntraday } from "../../types/timeSeries";

export function formatRowsTable(timeSeries: TimeSeriesIntraday) {
  const formattedResults = Object.keys(timeSeries).map((key) => ({
    key,
    value: timeSeries[key],
  }))[1].value;

  const rows: RowType[] = Object.keys(formattedResults).map((row) => ({
    row,
    value: formattedResults[row],
  }));
  return rows;
}
