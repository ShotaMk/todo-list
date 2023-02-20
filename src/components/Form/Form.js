import React from "react";
import './form.css'
//import 'bootstrap/dist/css/bootstrap.min.css'

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = { tasksCount: 0, inputValue: '' };

        this.addItem = this.addItem.bind(this);
        this.onInputchange = this.onInputchange.bind(this);

    }

    addItem(e) {
        e.preventDefault();
        if (this._inputElement.value !== "") {
            let newItem = {
                text: this._inputElement.value,
                id: this.state.tasksCount,
                key: Date.now()
            };

            this.props.addTask(newItem);

            this.state.tasksCount++;
            this._inputElement.value = "";
        }


    }

    onInputchange(event){
        let newItemText = {
            text: this._inputElement.value
        }
        localStorage.setItem('new', newItemText.text);
        this.setState({
            inputValue: event.target.value
        });
    }

    componentDidMount(){

        const task = localStorage.getItem('new');
        if(task){
            this.setState({
                inputValue: task
            });
        }
    }

    render(){
        return (
            <div className='form'>
                <form onSubmit={this.addItem} className='d-flex form-block'>
                    <input className='input form-control'
                           value={this.state.inputValue}
                           onChange={this.onInputchange}
                           ref={(a) => this._inputElement = a}
                           placeholder='Add Task' />
                    <button className='add-button btn btn-primary' type='submit'>Add</button>
                </form>
            </div>
        );
    }
}

export default Form