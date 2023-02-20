import React from "react";
import AddItem from "../TodoItem/AddItem";

class TodoList extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='todo-list--container'>
                <div className="todo-list mt-5">
                    { this.props.tasks.map(task => <AddItem key={task.key} text={task.text} id={task.id} removeTask={this.props.removeTask}/>) }
                </div>
            </div>
        )
    }
}

export default TodoList