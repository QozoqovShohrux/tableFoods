import Joi from "joi-browser";
import Form from "../common/form.jsx";

export default class Login extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
    title : "Login"
  };
  schema = {
    username: Joi.string().min(6).max(18).required().label("Username"),
    password: Joi.string().min(6).required().label("Password"),
  };
  doSubmit = () => {
    console.log("Success Operation Login ....");
  };
  render() {
   
    return (
      <div className="container">
        <this.renderTitle />
        <form>
          <this.renderInput name="username" label="Username" />
          <this.renderInput name="password" label="Password" type="password" />
          <this.renderSubmit label = "Submit" />  
        </form>
      </div>
    );
  }
}
