import React, { Component } from 'react';
import axios from 'axios';

export default class EditContact extends Component {

    constructor(props) {
        super(props);

       
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            number: '',
            label: '',
            completed: false
        }
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
        axios.delete('http://localhost:4000/api/remove/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Delete Contact</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <input type="submit" value="Delete Contact" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}