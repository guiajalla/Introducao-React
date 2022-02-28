import React, { Component } from "react";
import "./style.css";
class CardNota extends Component {
  render() {
    return (
      <section className="note-card">
        <header className="note-card_header">
          <h3 className="card-nota_titulo">{this.props.title}</h3>
        </header>
        <p className="note-card_title">{this.props.text}</p>
      </section>
    );
  }
}

export default CardNota;