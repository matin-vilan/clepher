import { TimeSeriesContext } from "../../pages/HomePage";
import Table from "../common/Table";

const headers = ["Date", "Open", "High", "Low", "Close", "Volume"];
export default function Home() {
  const { timeSeries } = TimeSeriesContext.useContext();

  const rows: string[][] = Object.entries(
    timeSeries["Time Series (Daily)"]
  ).map((item) => [
    item[0],
    item[1]["1. open"],
    item[1]["2. high"],
    item[1]["3. low"],
    item[1]["4. close"],
    item[1]["5. volume"],
  ]);

  return (
    <div className="py-4">
      <Table rows={rows} headers={headers} />
    </div>
  );
}
