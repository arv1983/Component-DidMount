import "./App.css";
import { Component } from "react";
import CharacterList from "./components/CharacterList";

export default class App extends Component {
  state = {
    character: [],
  };
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/").then((response) =>
      response
        .json()
        .then((response) => this.setState({ character: response.results }))
    );
  }
  render() {
    return <CharacterList list={this.state.character} />;
  }
}
