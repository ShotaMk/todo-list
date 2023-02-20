import React from "react";


class AddItem extends React.Component{
    constructor(props){
        super(props);

        this.removeTask = this.removeTask.bind(this);
        this.editText = this.editText.bind(this);
        this.enterText = this.enterText.bind(this);
        this.markDone = this.markDone.bind(this);

        this.state = {
            backgroundColor: '',
            isEditOpen: false,
            inputValue:'',
        }

    }

    removeTask(){
        this.props.removeTask(this.props.id);
    }
    enterText(){
        if(this.state.inputValue) {
            this.props.enterText(this.state.inputValue, this.props.id);
        }
        this.setState({
            isEditOpen: !this.state.isEditOpen,
        })
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


    editText(){
        this.setState({
            isEditOpen: !this.state.isEditOpen,
        })
    }

    render(){
        return (
            <div className='task-container mt-4 bg-light rounded-3 '>
                <div className=' py-2 px-3 task-container-background d-flex flex-wrap align-items-center justify-content-between' style={{backgroundColor: this.state.backgroundColor}}>
                    <div className='task-term-container'>
                        <h3 className='task-term text-secondary text-break text-start'>{this.props.text}</h3>
                        {this.state.isEditOpen && <input  onChange={(e)=> this.setState({inputValue: e.target.value})  } type="text"/>}
                    </div>
                    <div className='buttons-container d-flex gap-2'>
                        <button className='edit-button btn btn-info'  onClick={this.enterText}>{this.state.isEditOpen ? 'enter' : 'edit'}</button>
                        <button className='done-button btn btn-success' onClick={this.markDone}>v</button>
                        <button className='delete-button btn btn-danger' onClick={this.removeTask}>x</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default AddItem