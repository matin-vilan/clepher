import { TableProps } from "../../types/table";

const rowClassNames = "py-2 px-4 text-center";

export default function Table(props: TableProps) {
  return (
    <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr className="text-center">
          {props.headers.map((header, i) => (
            <th key={`${header}_${i}`} className="px-6 py-3">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="">
        {props.rows.map((row, i) => (
          <tr
            key={`row_${i}`}
            className={`border-b ${
              i % 2 !== 0 &&
              "bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            }`}
          >
            <td className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {row.row}
            </td>
            {Object.keys(row.value).map((item, i) => (
              <td
                key={`${item}_${i}`}
                className={
                  rowClassNames +
                  " px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                }
              >
                {row.value[item]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
