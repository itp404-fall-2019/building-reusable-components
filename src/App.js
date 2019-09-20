import React from 'react';
import './App.css';
import RemainingCharacters from "./RemainingCharacters";
import InlineEdit from "./InlineEdit";
import Modal from "./Modal";

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
  handleTitleUpdate = newTitle => {
    this.setState({ title: newTitle });
  };
  openModal = () => {
    this.setState({ modalIsOpen: true });
  }
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }
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
          <h1>Title: {this.state.title}</h1>
          <InlineEdit value={this.state.title} onEnter={this.handleTitleUpdate} />
        </div>
        <div style={{ position: 'absolute', bottom: '50px', width: '100px' }}>
          <button onClick={this.openModal}>Open Modal</button>
          <Modal isOpen={this.state.modalIsOpen} onClose={this.closeModal}>
            <h2>Modal Header</h2>
            <p>This is my modal content</p>
            <button onClick={this.closeModal}>close</button>
          </Modal>
        </div>
      </div>
    );
  }
}
