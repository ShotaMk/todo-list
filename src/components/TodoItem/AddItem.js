import React from "react";


class AddItem extends React.Component{
    constructor(props){
        super(props);

        this.removeTask = this.removeTask.bind(this);
        this.markDone = this.markDone.bind(this);

        this.state = {
            backgroundColor: ''
        }

    }

    removeTask(){
        this.props.removeTask(this.props.id);
    }

    markDone(){
        if (this.state.backgroundColor === ''){
            this.setState({ backgroundColor: 'rgb(144,238,144, 0.5)' },
                ()=>{localStorage.setItem('background', this.state.backgroundColor)}
                );
        } else {
            this.setState({backgroundColor: ''});
        }
    }

    render(){
        return (
            <div className='task-container mt-4 bg-light rounded-3 '>
                <div className=' py-2 px-3 task-container-background d-flex flex-wrap align-items-center justify-content-between' style={{backgroundColor: this.state.backgroundColor}}>
                    <div className='task-term-container'>
                        <h3 className='task-term text-secondary'>{this.props.text}</h3>
                    </div>
                    <div className='buttons-container d-flex gap-2'>
                        <button className='done-button btn btn-success' onClick={this.markDone}>v</button>
                        <button className='delete-button btn btn-danger' onClick={this.removeTask}>x</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default AddItem