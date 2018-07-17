






// make fake data page


import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.jsx';

class App extends Component {
  state = {
    persons: [
      {
        data: {
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
    // console.log("was clicked");
    // this.setState{}.persons[0].data.name = "Sam Gogo";
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is a prototype for part of a project management system!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
          <div className="container">
            <div className="personContainer" >
              <Person data={this.state.persons[0]} />
              <Person data={this.state.persons[1]} />
              <Person data={this.state.persons[2]} />
              <Person data={this.state.persons[3]} />
              <Person data={this.state.persons[4]} />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
