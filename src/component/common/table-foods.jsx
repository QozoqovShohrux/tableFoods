import { Link } from "react-router-dom";
import Like from "./like";
import Table from "./table.jsx";

const FoodsTable = ({
  items = [],
  handleDelete,
  handleLike,
  onSort,
  sortColumn,
}) => {
  const columns = [
    { label: "Title", path: "title", content : (food) => <Link style={{textDecoration: "none"}} to={`/foods/${food._id}`}>{food.title}</Link> },
    { label: "Category", path: "category.name" },
    { label: "Price", path: "price" },
    { label: "Amount", path: "amount" },
    { label: "Unit", path: "unit" },
    {
      label: "Action",
      content: (item) => (
        <>
          <Like liked={item.liked} onToggleLike={() => handleLike(item._id)} />
          <button onClick={() => handleDelete(item._id)} className="btn btn-danger">
            Delete
          </button>
        </>
      ),
    },
  ];
  
  return (
      <Table data={items} sortColumn={sortColumn} onSortColumn={onSort} columns={columns} />
  );
};

export default FoodsTable;
