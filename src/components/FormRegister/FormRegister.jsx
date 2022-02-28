import React, { Component } from "react";
import "./style.css";

export default class FormRegister extends Component{
    constructor(props) {
        super(props);
        this.title = "";
        this.text = "";
    }

    _createCard(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.createCard(this.title, this.text)
    }

    _handleChangeTitle(event){
        event.stopPropagation();
        this.title = event.target.value;
    }

    _handleChangeText(event){
        event.stopPropagation();
        this.text = event.target.value;
    }

    render(){
        return (
            <form className="form-register"
                onSubmit={this._createCard.bind(this)}
            >
                <input 
                    type="text" 
                    placeholder="title" 
                    className="form-register_input"
                    onChange={this._handleChangeTitle.bind(this)}
                />
                <textarea 
                    rows={15} 
                    placeholder="Write a note..." 
                    className="form-register_input" 
                    onChange={this._handleChangeText.bind(this)}
                    />
                <button className="form-register_input form-register_submit">New note</button>
            </form>
        );
    }
}