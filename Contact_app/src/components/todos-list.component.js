import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td>{props.todo.name}</td>
        <td>{props.todo.number}</td>
        <td>{props.todo.label}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>&nbsp;
            <Link to={"/delete/"+props.todo._id}>Delete</Link>
        </td>
    </tr>
)

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    
    componentDidMount() {
        axios.get('http://192.168.1.100:4000/api/get')
            .then(response => {
                console.log(response.data.todos); 
                this.setState({ todos: response.data.todos });
                
            })
            .catch(function (error){
                console.log(error);
            })
    }
    
    todoList() {
       return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }


    render() {
        return (
            <div>
                <h3>Contacts List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Label</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
