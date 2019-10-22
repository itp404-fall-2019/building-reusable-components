import React from "react";

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

export default class InlineEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previousValue: props.value,
      currentValue: props.value,
      editMode: false
    };
  }
  handleChange = event => {
    this.setState({
      currentValue: event.target.value
    });
  };
  handleKeyDown = event => {
    const { keyCode } = event;
    const { currentValue, previousValue } = this.state;

    if (keyCode === ENTER_KEY || keyCode === ESCAPE_KEY) {
      this.setState({ editMode: false });
    }

    if (keyCode === ENTER_KEY) {
      this.setState({ previousValue: currentValue });
      this.props.onEnter(currentValue);
    } else if (keyCode === ESCAPE_KEY) {
      this.setState({ currentValue: previousValue });
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
          onKeyUp={this.handleKeyDown}
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