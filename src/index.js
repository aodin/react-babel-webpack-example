import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Toggle from './toggle';
import './style.css';


class User {
  constructor(data) {
    Object.assign(this, data);
  }

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let user = new User({firstName: 'Aaron', lastName: 'Ellis'});

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.user.getName()}!</h1>;
  }
}

class FakeLink extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    console.log('this link was clicked with context:', this);
  }

  render() {
    return <a href="#" onClick={this.handleClick}>
      Click Me
    </a>
  }
}

class NumberList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.numbers.map((number, index) =>
          <li key={index}>#{number}</li>
        )}
      </ul>
    );
  }
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({value: evt.target.value.toUpperCase()});
  }

  handleSubmit(evt) {
    console.log('A name was submitted: ' + this.state.value);
    evt.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class App extends React.Component {
  render() {
    return <div>
      <Welcome user={user} />
      <Clock />
      <FakeLink />
      <Toggle />
      <NumberList numbers={[1, 2, 3]} />
      <NameForm />
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
