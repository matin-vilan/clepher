import { ChangeEvent } from "react";
import { TimeSeriesContext } from "../../pages/HomePage";
import Filters from "../common/Filters";
import Table from "../common/Table";
import { FiltersType } from "../../types/timeSeries";
import MetaData from "../common/MetaData";

const headers = ["Date", "Open", "High", "Low", "Close", "Volume"];
export default function Home() {
  const { timeSeries, changeFilters } = TimeSeriesContext.useContext();

  if (!timeSeries) return;
  const rows: string[][] = Object.entries(
    timeSeries[`Time Series (Daily)`]
  ).map((item) => [
    item[0],
    item[1]["1. open"],
    item[1]["2. high"],
    item[1]["3. low"],
    item[1]["4. close"],
    item[1]["5. volume"],
  ]);

  function handleChangeFilters(props: ChangeEvent<HTMLSelectElement>) {
    changeFilters({
      filter: {
        name: props.target.name as keyof FiltersType,
        value: props.target.value,
      },
    });
  }

  return (
    <div className="py-4">
      <MetaData metaData={timeSeries["Meta Data"]} />
      <Filters onChange={handleChangeFilters} />
      {rows.length > 0 && <Table rows={rows} headers={headers} />}
    </div>
  );
}
