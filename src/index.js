import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


class User {
  constructor(data) {
    Object.assign(this, data);
  };

  getName() {
    return `${this.firstName} ${this.lastName}`;
  };
}

let user = new User({firstName: 'Aaron', lastName: 'Ellis'});

let elem = (
  <h1>
    Hello, {user.getName()}!
  </h1>
);

ReactDOM.render(
  elem,
  document.getElementById('root')
);
