import { TableProps } from "../../types/table";

const rowClassNames = "py-2 px-4 text-center";

export default function Table(props: TableProps) {
  return (
    <table className="table-auto w-full bg-gray-100">
      <thead className="border-b-2">
        <tr>
          {props.headers.map((header, i) => (
            <th key={`${header}_${i}`} className="p-3">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="">
        {props.rows.map((row, i) => (
          <tr
            key={`row_${i}`}
            className={`border-b ${i % 2 !== 0 && "bg-gray-300"}`}
          >
            {row.map((item, i) => (
              <td key={`${item}_${i}`} className={rowClassNames}>
                {item}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
