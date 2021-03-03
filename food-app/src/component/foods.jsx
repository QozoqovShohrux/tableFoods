import React, { Component } from "react";
import { getCategories } from "../services/fakeCategories";
import { getFoods } from "../services/fakeFoods";
import Like from "./like";
import ListGroup from "./list-group";
import { paginate } from "./paginate";
import Paginate from "./pagination";
class Foods extends Component {
  state = {
    foods: getFoods(),
    currentPage: 1,
    pageSize: 4,
    categories: getCategories(),
    selectCategory: null,
  };
  
  handleDelete = (foodId) => {
    const { foods } = this.state;
    const orginalFoods = foods.filter((food) => food._id !== foodId);
    this.setState({ foods: orginalFoods });
  };
  handleLike = (likeId) => {
    const { foods } = this.state;
    const food = foods.find((item) => item._id === likeId);
    food.liked = food.liked ? false : true;
    this.setState({ foods });
  };
  handlePageOnchange = (currentPage) => {
    this.setState({
      currentPage,
    });
  };
  handleSelectCategory = (selectCategory) => {
    this.setState({ selectCategory, currentPage: 1 });
  };
  componentDidMount() {
      const foods = getFoods();
    const categories = getCategories();
    this.setState({
      foods, categories : [{name: "Barchasi"} , ...categories]
    })
  }
  

  render() {
    const {
      foods,
      currentPage,
      pageSize,
      selectCategory,
      categories,
    } = this.state;
    let { length: count } = foods;
    const filtered = selectCategory?._id ? foods.filter((food) => food.category?._id === selectCategory._id):foods;
    const paginated = paginate(filtered, currentPage, pageSize);
    count = filtered.length;
    return (
      <div className="container">
        <div className="row my-2">
          <div className="col-md-2 mt-3">
            <span className="badge my-4 mb-3 badge-success lg-badge">
              Categories
            </span>
            <ListGroup
              selectCategory={selectCategory}
              categoryItems={categories}
              onSelectChange={this.handleSelectCategory}
            />
          </div>
          <div className="col">
            {count === 0 ? (
              <h5>Bizda buyurtma qolmagan</h5>
            ) : (
              <h5>Bizda hozrcha {count} ta buyurtma bor</h5>
            )}
            <table className="table my-3 table-hover table-bordered text-center">
              <thead className="bg-success text-white">
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>Unit</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {paginated.map(
                  ({
                    _id,
                    title,
                    category: { name },
                    price,
                    unit,
                    amount,
                    liked,
                  }) => (
                    <tr key={_id}>
                      <td>{title}</td>
                      <td>{name}</td>
                      <td>{price}</td>
                      <td>{amount}</td>
                      <td>{unit}</td>
                      <td>
                        <Like
                          liked={liked}
                          onToggleLike={() => this.handleLike(_id)}
                        />
                        <button
                          onClick={() => this.handleDelete(_id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <Paginate
              countItems={count}
              currentPage={currentPage}
              pageSize={pageSize}
              onChangePage={this.handlePageOnchange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Foods;
