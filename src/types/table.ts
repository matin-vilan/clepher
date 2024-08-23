export type TableProps = {
  headers: string[];
  rows: RowType[];
};

export type RowType = { row: string; value: { [key: string]: string } };
