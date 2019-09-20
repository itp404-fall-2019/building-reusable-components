import React from "react";

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

export default class InlineEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: props.value,
      editMode: false
    };
  }
  handleChange = event => {
    this.setState({
      currentValue: event.target.value
    });
  };
  handleKeyUp = event => {
    const { keyCode } = event;

    if (keyCode === ENTER_KEY || keyCode === ESCAPE_KEY) {
      this.setState({ editMode: false });
    }
  };
  enableEditMode = () => {
    this.setState({ editMode: true });
  };
  render() {
    const { editMode } = this.state;

    if (editMode) {
      return (
        <input
          type="text"
          value={this.state.currentValue}
          onKeyUp={this.handleKeyUp}
          onChange={this.handleChange}
        />
      );
    }

    return (
      <span onClick={this.enableEditMode}>
        {this.state.currentValue}
      </span>
    );
  }
}