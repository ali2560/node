import React, { Component } from 'react';
import axios from 'axios';

export default class CreateContact extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeLabel = this.onChangeLabel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            number: '',
            label: '',
            completed: false
        }
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

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Name: ${this.state.name}`);
        console.log(`Todo Number: ${this.state.number}`);
        console.log(`Todo Label: ${this.state.label}`);

        const newContact = {
            name: this.state.name,
            number: this.state.number,
            label: this.state.label,
            completed: this.state.completed
        };

        axios.post('http://192.168.1.100:4000/api/create', newContact)
            .then(res => console.log(res.data));
        
        this.setState({
            Name: '',
            Number: '',
            Label: '',
            completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Contact</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Number: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.Number}
                                onChange={this.onChangeNumber}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="LabelOptions" 
                                    id="LabelMobile" 
                                    value="Mobile"
                                    checked={this.state.label==='Mobile'} 
                                    onChange={this.onChangeLabel}
                                    />
                            <label className="form-check-label">Mobile</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="LabelOptions" 
                                    id="LabelHome" 
                                    value="Home" 
                                    checked={this.state.label==='Home'} 
                                    onChange={this.onChangeLabel}
                                    />
                            <label className="form-check-label">Home</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="LabelOptions" 
                                    id="LabelOther" 
                                    value="Other" 
                                    checked={this.state.label==='Other'} 
                                    onChange={this.onChangeLabel}
                                    />
                            <label className="form-check-label">Other</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Contact" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}