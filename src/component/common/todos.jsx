import React, { Component } from 'react';
import http from "./http.js";
import {toast} from "react-toastify";
const endPoint = "/todos";

class Todos extends Component {
  state = {
    todos : [],
    title1: "",
    completed1 : true
  }
  handleChange =(e) => {
    const title = e.target.value;
    this.setState({title1 : title});
  }
  handleDelete = async (deleteId) => {
    const orginalTodos = this.state.todos;
    const todos = orginalTodos.filter((todo) => todo.id !== deleteId);
    this.setState({todos});
   try{ 
    await http.delete(endPoint + `/${deleteId}`);
    toast.success("Malumotingiz Mufoqiyatli o'chirildi !");
   }catch(err){
    //  console.log("Catch block");
     console.log(err.message);
     this.setState({ todos : orginalTodos})
   }
  }
  handleAdd = async(post) => {
    const{ title1,completed1} = this.state; 
    const body = {title : title1, completed : completed1};
    const {data} = await http.post(endPoint,body);
    this.setState(({todos}) => ({todos : [data  , ...todos]}));
    // toast.primary("Malumotingiz Mufoqiyatli Qushildi !");
  }
  handleUpdate =  async (putId) => {
    const{ title1,completed1,todos} = this.state; 
    putId.title = title1;
    putId.completed = completed1;

    // const data = putId;
    await http.put(endPoint + `/${putId.id}`, putId);
    const index = todos.indexOf(putId);
    todos[index] = {...putId};
    this.setState({todos}) 
  }
  getData = async () => {
     try{
      await http.get(endPoint).then((response) => {
        const {data} = response;
        this.setState({todos : data});
      })
     }catch(err){
       console.log(err.response);
       if(err.response && err.response.status === 404)
       return toast.error("Malumot topilmadi");
     }
  }
  componentDidMount() {
   this.getData();
  }
  render() {
    const {todos} = this.state;
    return ( 
      <div className="container">
        <div className="col-12 p-0 d-flex">
          <button className="btn btn-primary mt-2 mr-2" onClick={this.handleAdd}>Add_Api</button>
          <input type="search" placeholder="Enter your title" className="form-control mt-2 mx-2" onChange={this.handleChange}/>
        </div>
        <table className="table-hover mt-3 text-center table-bordered table">
          <thead className="bg-success text-white">
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>  
              <th>Body</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo)=> (
              <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.userId}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "true" : "false"}</td>
              <td className="d-flex justify-content-center align-items-center">
                <button className="btn btn-danger btn-md mx-2" onClick={()=> this.handleDelete(todo.id)}>delete</button>
                <button className="btn btn-primary btn-md mx-2" onClick={()=>this.handleUpdate(todo)}>update</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
      );
  }
}

export default Todos;