import  Joi  from 'joi-browser';
import { getCategories } from '../../services/fakeCategories';
import Form from '../common/form';
import {getFood, saveFood} from "../../services/fakeFoods"
class FormFood extends Form {

  state = {
   data : {
    _id :"",
    title : "",
    categoryId : "",
    price : "",
    amount : "",
    unit : "",
   },
   errors : {},
   categories : [],
   title : "Food Form"
  }

  schema = {
    _id: Joi.string(),
    title: Joi.string().min(5).max(50).required().label("Title"),
    price: Joi.number().min(0).required().label("Price"),
    amount: Joi.number().min(0).required().label("Amount"),
    categoryId : Joi.string().required(),
    unit : Joi.string().required(),
  };

  doSubmit =() => {
   const food  = saveFood(this.state.data);
   if(food) this.props.history.replace("/foods");
   else console.log("Unexepected Errors"); 

   console.log("Success Operation FoodForm .....");
  }


  componentDidMount() {
   const categories = getCategories();
   this.setState({categories});

   const {foodsId = 123} = this.props.match.params;
   if(foodsId === "new") return this.setState({status : true, data : {...this.state.data, _id : "new"}});
   
   const food = getFood(foodsId);
   if(!food) return this.props.history.replace("/not-found");
   this.setState({data : this.getFormatValues(food)});
  }
  getFormatValues =(food) => {
   return{
    _id: food._id,
    title : food.title,
    categoryId : food.category._id,
    price : food.price,
    amount : food.amount,
    unit : food.unit
   }   
  }


 render() {
  const {categories} = this.state;
  const {foodsId = 123} = this.props.match.params;
  return (
   <div className="container">
    <this.renderTitle/> #{foodsId}
    <form onSubmit={this.handleSubmit}>
    <this.renderInput  name="title" label ="Title"/>
    <this.renderSelect  name="categoryId" label ="Category" options={categories}/>
    <this.renderInput  name="price" label ="Price"/>
    <this.renderInput  name="amount" label ="Amount"/>
    <this.renderSelect  name="unit" label ="Unit" />
    <this.renderSubmit label={`${foodsId === "new" ? "Add Elements" : "Edit Save"}`}/>
    </form>
   </div>
  );
 }
}

export default FormFood;