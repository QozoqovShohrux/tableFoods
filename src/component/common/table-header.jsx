import SortIcon from "./sortIcon";

const TableHeader = ({ columns, sortColumn, onSortColumn }) => {
  const brokerSort = (path) => {
    if (!path) return;
    if (sortColumn.path === path) {
      sortColumn.orderBy = sortColumn.orderBy === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.orderBy = "asc";
    }
    onSortColumn(sortColumn);
  };
  const getIcon =(path) => {
   const {path : currentPath , orderBy, columnName} = sortColumn;
   if(path !== currentPath) return null;
     return <SortIcon sorted ={ orderBy === "asc" && columnName==="title"}/>
  }
  return (
    <thead className="bg-success text-white">
      <tr>
        {columns.map((column) => (
          <th
            onClick={() => brokerSort(column.path)}
            key={column.path || column.label}
          >
            {column.label}
            {getIcon(column.path)}

          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
