import {TableHeader,TableBody} from "../common";
const Table = ({ data, sortColumn, onSortColumn, columns }) => {
  return (
    <table className="table my-3 table-hover table-bordered text-center">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSortColumn={onSortColumn}
      />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
