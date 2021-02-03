import { Component } from "react";
import { Character } from "./Character";

export default class CharacterList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map((item, index) => (
          <Character
            key={index}
            name={item.name}
            species={item.species}
            gender={item.gender}
          />
        ))}
      </div>
    );
  }
}
