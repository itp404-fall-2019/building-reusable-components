import React from "react";
import PropTypes from 'prop-types';

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
  handleKeyUp = event => {
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
    const { editMode, currentValue } = this.state;

    if (this.props.children) {
      return this.props.children(
        editMode, currentValue, this.handleKeyUp, this.handleChange, this.enableEditMode
      );  
    }
    
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

InlineEdit.propTypes = {
  value: PropTypes.string.isRequired,
  onEnter: PropTypes.func.isRequired
};