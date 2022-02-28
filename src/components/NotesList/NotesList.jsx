import React, { Component } from "react";
import NoteCard from "../NoteCard";
import "./style.css";

export default class NotesList extends Component {

  render() {
    return (
      <ul className="notes-list">
        {this.props.notes.map((note, index) => {
          return (
            <li className="notes-list_item" key={index}>
              <NoteCard title={note.title} text={note.text}/>
            </li>
          );
        })}
      </ul>
    );
  }
}