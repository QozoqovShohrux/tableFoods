import Joi from "joi-browser";
import Form from "../common/form.jsx";

export default class Register extends Form {
  state = {
    data: {
      username: "",
      email : "",
      password: "",
    },
    errors: {},
    title : "Register"
  };
  schema = {
    username: Joi.string().min(6).max(18).required().label("Username"),
    email: Joi.string().min(10).required().label("Email"),
    password: Joi.string().min(6).required().label("Password"),
  };
  doSubmit = () => {
    console.log("Success Operation Register ....");
  };
  render() {
   
    return (
      <div className="container">
        <this.renderTitle />
        <form>
          <this.renderInput name="username" label="Username" type="text" />
          <this.renderInput name="email" label="Email" type="email" />
          <this.renderInput name="password" label="Password" type="password" />
          <this.renderSubmit label="Submit"/>  
        </form>
      </div>
    );
  }
}
