import React, { Component } from "react";
import  NotesList from "./components/NotesList";
import FormRegister from "./components/FormRegister";
import "./assets/App.css"
import "./assets/index.css"

class App extends Component {
  constructor(){
    super();
    this.notes = [];
    this.state = {
      notes: []
    }
  }

  createCard(title, text){
    const newNote = {title, text};
    const newArrayNotes = [...this.state.notes, newNote]
    const newState = {
      notes: newArrayNotes
    }
    this.notes.push(newNote);
    this.setState(newState);
  }

  render(){
    return (
    <section className="content">
      <FormRegister createCard={this.createCard.bind(this)}/>
      <NotesList notes={this.state.notes}/>
    </section>
    );
  }
}

export default App;
