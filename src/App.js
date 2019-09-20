import React from 'react';
import './App.css';
import RemainingCharacters from "./RemainingCharacters";
import InlineEdit from "./InlineEdit";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      title: "USC"
    };
  }
  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <input value={this.state.name} onChange={this.handleChange} />
        <br />
        <RemainingCharacters text={this.state.name} max={10} />
        <br />
        <RemainingCharacters text={this.state.name} max={10}>
          {remainingCharacters => {
            return (
              <span className={remainingCharacters < 0 ? "danger" : undefined}>
                {remainingCharacters}
              </span>
            );
          }}
        </RemainingCharacters>
        <div>
          <InlineEdit value={this.state.title} />
        </div>
      </div>
    );
  }
}
