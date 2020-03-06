import React, { Component } from 'react';
import axios from 'axios';

export default class EditContact extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeLabel = this.onChangeLabel.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            number: '',
            label: '',
            completed: false
        }
    }

    componentDidMount() {
        axios.get('http://192.168.1.100:4000/api/get/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.todos.name,
                    number: response.data.todos.number,
                    label: response.data.todos.label,
                    completed: response.data.todos.completed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeNumber(e) {
        this.setState({
            number: e.target.value
        });
    }

    onChangeLabel(e) {
        this.setState({
            label: e.target.value
        });
    }

    onChangeTodoCompleted(e) {
        this.setState({
            completed: !this.state.completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            name: this.state.name,
            number: this.state.number,
            label: this.state.label,
            completed: this.state.completed
        };
        console.log(obj);
        axios.put('http://localhost:4000/api/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Contact</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>number: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.number}
                                onChange={this.onChangeNumber}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="labelOptions" 
                                    id="labelMobile" 
                                    value="Mobile"
                                    checked={this.state.label==='Mobile'} 
                                    onChange={this.onChangeLabel}
                                    />
                            <label className="form-check-label">Mobile</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="labelOptions" 
                                    id="labelHome" 
                                    value="Home" 
                                    checked={this.state.label==='Home'} 
                                    onChange={this.onChangeLabel}
                                    />
                            <label className="form-check-label">Home</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="labelOptions" 
                                    id="labelOther" 
                                    value="Other" 
                                    checked={this.state.label==='Other'} 
                                    onChange={this.onChangeLabel}
                                    />
                            <label className="form-check-label">Other</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeTodoCompleted}
                                checked={this.state.completed}
                                value={this.state.completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Contact" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}