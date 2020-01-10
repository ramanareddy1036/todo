import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatcher } from 'react-redux';
import { addTodo } from '../actions';

class Addtodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
          }
    }
    changeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(addTodo(this.state.input));
        
        this.setState(
            {
                input: ''
            }
        )
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <h4>Enter todo values</h4>
                <label htmlFor="EnterTodo">Enter Todo:</label>
                <input className="ml-2" placeholder='Enter Text' type="text" value={this.state.input} name="input" onChange={this.changeInput}/>
                <button type="submit">Addtodo</button>
            </form>
            </div>
        );
    }
} 
export default connect()(Addtodo)