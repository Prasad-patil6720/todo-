import React, { Component } from "react";

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { task: "check mails", id: 1 },
        { task: "read article", id: 2 },
        { task: "do work", id: 3 },
      ],
      currtask: "",
    };
  }
  handleChange = (e) => {
    this.setState({
        currtask:e.target.value
    })
  };

  handleSubmit=()=>{
      this.setState({
          tasks:[...this.state.tasks,{task:this.state.currtask,id:this.state.tasks.length+2}],
          currtask:''
      })
  }
  handleDelete=(id)=>{
      let narr= this.state.tasks.filter((taskObj)=>{
          return taskObj.id!==id
      })
    this.setState({
        tasks:[...narr]
    })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.currtask}
          onChange={this.handleChange}
        />

        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
          {this.state.tasks.map((taskObj) => (
            <li key={taskObj.id}>
              {" "}
              <div >
                <p>{taskObj.task}</p>
                <button onClick={()=>this.handleDelete(taskObj.id)}>delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
