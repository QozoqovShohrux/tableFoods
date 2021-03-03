const ListGroup = ({ selectCategory, categoryItems, onSelectChange }) => {
  return (
    <ul className="list-group">
      {categoryItems.map((category) => (
        <li
          onClick={() => onSelectChange(category)}
          className = {
            "list-group-item " +
            (selectCategory?._id === category._id && " active")
          }
          key={Math.random()}
        >
          {category.name}

        <span  className="badge badge-warning float-right">1</span>
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
