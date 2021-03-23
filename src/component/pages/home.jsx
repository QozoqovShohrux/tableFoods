import React, { Component } from 'react';
import axios from "axios";
const link = "https://jsonplaceholder.typicode.com/posts";
class Home extends Component {
    state = {
     todos : [],
     title1 : "",
     body1 : ""
    }
   
    handleChange =(e)=>{
     const body1 = e.target.value;
     this.setState({body1});
    }
    handleChange1 =(e)=>{
     const title1 = e.target.value;
     this.setState({title1});
    }
    
    postData = async(post)=> {
     const {title1,body1}  = this.state;
     const body =  {title : title1, body : body1};
     const {data : todo} = await axios.post(link, body);
     this.setState(({todos}) => ({todos : [todo, ...todos],title1 : "", body1: ""}));
    }
    PutData = async(put)=>{
     const {todos,title1,body1} = this.state;
     put.title = title1;
     put.body = body1;
     const data = put;
     await axios.put(link  + `/${put.id}`, data);

     const index = todos.indexOf(put);
     todos[index] = {...put};
     this.setState({todos,title1 : "", body1: ""})
    }
    handleDelete = async(deleteId) => {
       await axios.delete(link + `/${deleteId}`);
      const {todos} = this.state;
      const orginalTodos = todos.filter((todo) => todo.id !== deleteId);
      this.setState({todos : orginalTodos});
     }
    getData = async () => {
     try{
      const {data: todos} = await axios.get(link);
      this.setState({todos});
     }catch(err){
      console.log(err.message);
     }
     // throw new Error("Qandaydir xatolik");
    }
    
    componentDidMount() {
     this.getData();
    //   axios.get(link).then((response) => {
    //   const {data} = response;
    //   this.setState({todos : data});
    // }).catch((err) => {
    //  console.log(err.message);
    // })
    }


 render() {
  const {todos,title1,body1} = this.state;
  console.log(todos);
  return (
   <div className="container" >
     <div className="mt-3 col-12 p-0 d-flex ">
    
      <button onClick={this.postData} className="btn btn-success mr-2">Add_Elem</button>
      <input value={title1} onChange={this.handleChange1} type="search" placeholder="Enter change Title" className="mx-2 form-control"/>
      <input value={body1} onChange={this.handleChange} type="search" placeholder="Enter change Body " className="mx-2 form-control"/>
     </div>
    <table className="table mt-3 text-center table-hover table-bordered">
      <thead className="bg-success text-white">
         <tr>
          <th>Id</th>
          <th>UserId</th>
          <th>title</th>
          <th>Body</th>
          <th>Action</th>
         </tr>
      </thead>
      <tbody>
         {todos.map((todo) => (
          <tr key={todo.id}>
           <td>{todo.id}</td>
           <td>{todo.userId}</td>
           <td>{todo.title}</td>
           <td>{todo.body}</td>
           <td className="d-flex border-0"> 
            <button onClick={()=> this.handleDelete(todo.id)} className=" mx-2 btn btn-danger">delete</button>
            <button  className="btn mx-2 btn-primary" onClick={()=> this.PutData(todo)}>Update</button>
           </td>
          </tr>
         ))}
      </tbody>
    </table>
   </div>
  );
 }
}

export default Home;