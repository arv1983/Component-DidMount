import { Component } from "react";

export class Character extends Component {
  render() {
    return (
      <div style={{ border: "1px solid yellow" }}>
        <div>Nome: {this.props.name}</div>
        <div>Espécie: {this.props.species}</div>
        <div>Sexo: {this.props.gender}</div>
      </div>
    );
  }
}
