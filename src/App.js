import logo from './logo.svg';
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import React from "react";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      tasks: [],

    }
    this.addTask = this.addTask.bind(this);

    console.log(this.state.tasks);

    this.removeTask = this.removeTask.bind(this);
    this.enterText = this.enterText.bind(this);
   // this.editText = this.editText.bind(this);
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


  enterText(text, id){
    /*const editText = this.state.tasks.filter(element => (element.text !== text));
    this.setState(
        { tasks: tasks },
    );*/

    const newTasks = this.state.tasks.map(item => {
      if(item.id === id) {
        return {
          ...item,
          text: text
        }
      } else {
        return item;
      }
    })
    this.setState(
        { tasks: newTasks },
    );
    console.log('ss' + text + id);
  }
  render() {
    return(
        <div className="App">
          <Form addTask={this.addTask} />
          <TodoList tasks={this.state.tasks} removeTask={this.removeTask} enterText={this.enterText}/>
        </div>
    )
  }
}

export default App;
