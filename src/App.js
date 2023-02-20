import logo from './logo.svg';
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import React from "react";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      tasks: []
    }
    this.addTask = this.addTask.bind(this);

    console.log(this.state.tasks);

    this.removeTask = this.removeTask.bind(this);
    //this.storageTasks = this.storageTasks.bind(this)

  }

  componentDidMount(){
    const listItems = JSON.parse(localStorage.getItem('list-2'));
    if(listItems){
      this.setState({
        tasks: listItems
      })
    }
  }

  addTask(task){
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.concat(task),
      }

    }, ()=>{
      localStorage.setItem('list-2', JSON.stringify(this.state.tasks))
    });
  }
  removeTask(id){
    const tasks = this.state.tasks.filter(element => (element.id !== id));
    this.setState(
        { tasks: tasks },
        ()=>{localStorage.setItem('list-2', JSON.stringify(this.state.tasks))}
    );
  }
  render() {
    return(
        <div className="App">
          <Form addTask={this.addTask} />
          <TodoList tasks={this.state.tasks} removeTask={this.removeTask}/>
        </div>
    )
  }
}

export default App;
