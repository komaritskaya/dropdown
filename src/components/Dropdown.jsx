import React, { Component } from 'react';
import DropdownList from './DropdownList';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.options[0],
      open: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  handleChange(option) {
    this.setState({
      active: option,
    });
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { options } = this.props;
    return (
      <div className="container">
        <div className={`dropdown-wrapper ${this.state.open ? 'open' : ''}`}>
          <button className={'btn'} onClick={this.toggleOpen}>
            <span>Account Settings</span>
            <i className="material-icons">public</i>
          </button>
          <DropdownList
            handleChange={this.handleChange}
            active={this.state.active}
            options={options}
          />
        </div>
      </div>
    );
  }
}

export default Dropdown;
