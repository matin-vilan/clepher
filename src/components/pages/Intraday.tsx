import { ChangeEvent } from "react";
import { TimeSeriesInterdayContext } from "../../pages/IntradayPage";
import { FiltersType } from "../../types/timeSeries";
import MetaData from "../common/MetaData";
import Filters from "../common/Filters";
import Table from "../common/Table";
import { formatRowsTable } from "../../utils/table/formatRows";

const headers = ["Date", "Open", "High", "Low", "Close", "Volume"];
export default function Intraday() {
  const { timeSeries, changeFilters } = TimeSeriesInterdayContext.useContext();

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
