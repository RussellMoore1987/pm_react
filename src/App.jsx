






// make fake data page


import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.jsx';

class App extends Component {
  state = {
    persons: [
      {
        data: {
          id: 1,
          name:"Abd al Matin", 
          type:"developer", 
          address:"New York - New York, USA",
          about: {
            projects: "545", 
            reviews: {reviews: "316", stars:"4.8"}, 
            posts: "101"
          }
        },
        description: "In the very skilled builder with over 12 years experience. I am from the New York area and have worked for several of the largest companies here such as. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus hic vel quia dignissimos laboriosam natus ea molestias officia minima illum, rem, excepturi aut accusantium quod enim harum ipsam maxime necessitatibus!"
      },
      {
        data: {
          id: 2,
          name:"Shay Martin", 
          type:"photographer", 
          address:"Rexburg - Idaho, USA",
          about: {
            projects: "94", 
            reviews: {reviews: "10", stars:"4.2"}, 
            posts: "24"
          }
        },
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus hic vel quia dignissimos laboriosam natus ea molestias officia minima illum, rem, excepturi aut accusantium quod enim harum ipsam maxime necessitatibus!"
      },
      {
        data: {
          id: 3,
          name:"Stephanie Warhol", 
          type:"designer", 
          address:"Salt Lake City - Utah, USA",
          about: {
            projects: "134", 
            reviews: {reviews: "97", stars:"4.6"}, 
            posts: "29"
          }
        },
        description: "This is used as a prop, which will populate in the area you decide using props.children."
      },
      {
        data: {
          id: 4,
          name:"Stephanie Warhol", 
          type:"designer", 
          address:"Salt Lake City - Utah, USA",
          about: {
            projects: "134", 
            reviews: {reviews: "97", stars:"4.6"}, 
            posts: "29"
          }
        },
        description: ""
      },
      {
        data: {
          id: 5,
          name:"Stephanie Warhol", 
          type:"designer", 
          address:"Salt Lake City - Utah, USA",
          about: {
            projects: "134", 
            reviews: {reviews: "97", stars:"4.6"}, 
            posts: "29"
          }
        },
        description: ""
      }
    ]  
  }

  switchNameHandler = () => {
    console.log("switchNameHandler was clicked");
    // this.setState({persons:});
  }

  nameChangedHandler = (event, id) => {
    // console.log("I was changed to " + event.target.value);
    const personIndex = this.state.persons.findIndex(p => {
      return p.data.id === id;
    });
    // make a copy of the data
    // const person = Object.assign({}, this.state.persons[personIndex]);
    //or 
    const person = {
      ...this.state.persons[personIndex]
    };
    // change the data with new values
    person.data.name = event.target.value;
    // make a copy of the data
    const persons = [...this.state.persons];
    // update the copy of the array
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // make a new copy of the state array
    // const persons = this.state.persons.slice();
    // or
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  // show hide edit container
  editPersonHandler = (event) => {
    console.log(event);
    console.log(event.target.parentElement);
    console.log(event.Handler);
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is a prototype for part of a project management system!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
          <div className="container">
            <div className="personContainer" >
              {/* loop over array of data*/}
              {this.state.persons.map((person, index) => {
                return <Person data={person} key={person.data.id} click={this.deletePersonHandler.bind(this, index)} changed={(event) => this.nameChangedHandler(event, person.data.id)} edit={(event) => this.editPersonHandler(event)}/>
              })}
            </div>
          </div>
      </div>
    );
  }
}

export default App;
