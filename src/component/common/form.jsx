import { Component } from 'react'
import Joi from 'joi-browser'
import Input from '../utils/input'
export default class Form extends Component {
  state = {
    data: {},
    errors: {},
  }
  validate = () => {
    const errors = {};
    const { data } = this.state;
    const { error } = Joi.validate(data, this.schema ,{ abortEarly: false });
    if (error?.details)
      error.details
        .reverse()
        .forEach(({ path, message }) => (errors[path[0]] = message));
    return Object.keys(errors).length > 0 ? errors : null;

    // const errors = {};
    // const {username, password } = this.state.data;
    // if (username.trim() === "") errors.username = "Username kiritilmagan!";
    // if (password.length < 6)
    //   errors.password =
    //     "Uzur oka siz hozir kamida 6 ta belgi kiritishingiz kerak";
    // if (password === "") errors.password = "Password kiritilmagan!";
    // return Object.keys(errors).length > 0 ? errors : null;
  }
  handleSubmit = (e) => {
   e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit()
  }
  validateProparty = (name, value) => {
    let message;
    const object = { [name]: value };
    const { error } = Joi.validate(object, { [name]: this.schema[name] });
    if (error?.details) message = error.details[0].message;
    return message ?? null;
    // let message;
    // if (value.trim() === "" && name === "username") message = name  + " kiritilmagan";
    // if(value.length < 6 && name === "password") message = name + "ning qiymati kamida 6 ta belgidan iborat bo'lishi kerak";
    // if (value === "" && name === "password") message = name  + " kiritilmagan";
    // return message ? message : null;
  }

  handleChange = ({ currentTarget: { name, value } }) => {
    const errors = { ...this.state.errors };
    const { data } = this.state;
    const errorsMessage = this.validateProparty(name, value);
    if (errorsMessage) errors[name] = errorsMessage;
    else delete errors[name];
    this.setState({
      data: { ...data, [name]: value },
      errors,
    })
  }
  renderInput = ({ name, label, ...args }) => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        errors={errors[name]}
        {...args}
      />
    )
  }
  renderSubmit = ({ label }) => {
    return (
      <button
        className="btn btn-primary float-right"
        onClick={this.handleSubmit}
      >
        {label}
      </button>
    )
  }
  renderTitle = () => {
    const { title } = this.state
    return <h1 className="mt-3">{title}</h1>
  }
 }