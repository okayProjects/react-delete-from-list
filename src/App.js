import React, { Component } from 'react';
import './App.css';
import Person from './Person';


class App extends Component {

  state = {
    people: [
      { id: 1, name: "John" },
      { id: 2, name: "Sara" },
      { id: 3, name: "Elton" },
      { id: 4, name: "Barbara" },
      { id: 5, name: "Evan" }
    ]
  }

  deletePersonHandler(id) {
    const people = [...this.state.people];
    const index = people.findIndex(person => person.id === id)
    people.splice(index, 1);
    this.setState({
      people
    })
  }

  render() {

    const team = this.state.people.map(person => {
      return (
        <Person
          key={person.id}
          name={person.name}
          delete={this.deletePersonHandler.bind(this, person.id)}
        // delete={this.deletePersonHandler}
        //   id={person.id}
        />
      )
    })

    return (
      <div className="App">
        {team}
      </div>
    );
  }
}

export default App;
