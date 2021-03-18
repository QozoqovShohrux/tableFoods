import React, { Component } from "react";
import { getCategories } from "../services/fakeCategories";
import { getFoods } from "../services/fakeFoods";
import {FoodsTable} from "./common";
import ListGroup from "./list-group";
import { paginate } from "./paginate";
import Paginate from "./pagination";
import _ from "lodash";
class Foods extends Component {
  state = {
    foods: getFoods(),
    currentPage: 1,
    pageSize: 4,
    categories: getCategories(),
    selectCategory: {},
    sortColumn : {columnName : "title", orderBy : "asc"}
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
  handleSelectSort=(sortColumn)=>{
    
    this.setState({sortColumn})
  }
  componentDidMount() {
    const foods = getFoods();
    const categories = getCategories();
    this.setState({
      foods,
      categories: [{ name: "Barchasi" }, ...categories],
    });
  }
  getPageData=()=>{
    const {
      foods,
      currentPage,
      pageSize,
      selectCategory,
      sortColumn 
    } = this.state;
    let {length : count} = foods; 
    const filtered = selectCategory?._id
      ? foods.filter((food) => food.category?._id === selectCategory._id)
      : foods;
    const sorted = _.orderBy(filtered,sortColumn.path,sortColumn.orderBy);
    const paginated = paginate(sorted, currentPage, pageSize);
    count = filtered.length;
    return {count , data : paginated};
  }
  render() {
    const {
      currentPage,
      pageSize,
      selectCategory,
      categories,
      sortColumn 
    } = this.state;
    const {data,count} = this.getPageData();
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
            <FoodsTable
              items={data}
              handleDelete={this.handleDelete}
              handleLike={this.handleLike}
              onSort={this.handleSelectSort}
              sortColumn={sortColumn}
            />
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
