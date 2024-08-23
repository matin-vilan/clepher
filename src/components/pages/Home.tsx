import { ChangeEvent } from "react";
import { TimeSeriesContext } from "../../pages/HomePage";
import Filters from "../common/Filters";
import Table from "../common/Table";
import { FiltersType } from "../../types/timeSeries";
import MetaData from "../common/MetaData";
import { formatRowsTable } from "../../utils/table/formatRows";

const headers = ["Date", "Open", "High", "Low", "Close", "Volume"];
export default function Home() {
  const { timeSeries, changeFilters } = TimeSeriesContext.useContext();

  const rows = formatRowsTable(timeSeries);

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
