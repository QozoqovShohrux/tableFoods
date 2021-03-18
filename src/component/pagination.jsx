const Paginate = ({ countItems, currentPage, pageSize, onChangePage }) => {
  const pages = [];
  const countPage = countItems / pageSize;
  if (countPage < 1 || countPage <= 1) return null;
  for (let i = 1; i < countPage + 1; i++) pages.push(i);
  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          className={"page-item" + (currentPage === page && "  active")}
          onClick={() => onChangePage(page)}
          key={page}
        >
          <a href="#1" className="page-link" >
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Paginate;
