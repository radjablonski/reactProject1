import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
        {name: 'Rad', age:12},
        {name: 'Mildred', age:14},
        {name: 'Tom', age:16}
      ]
  }

  switchNameHandler = (newName) => {
    this.setState(
      {
        persons: [
          {name: newName, age:12},
          {name: 'Mildred', age:200},
          {name: 'Tom', age:160}
        ]
      }
    )
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          {name: 'Max', age:12},
          {name: event.target.value , age:500},
          {name: 'Tom', age:160}
        ]
      }
    )
  }

  render () {
    const style= {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',

    }
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I am here</h1>
        <p>This is really working!</p>
        <button
        onClick={() => this.switchNameHandler('Maximillina??')}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this,"rad")}
        changed={this.nameChangedHandler}> My Hobbies: Recing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'hi i am here') )
  }
}

export default App;
