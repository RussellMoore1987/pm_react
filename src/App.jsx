









import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is a prototype for part of a project management system!</p>
        <div className="personContainer" >
          <Person name="Abd al Matin" type="developer" address="New York - New York, USA" about={{projects: "545", reviews: {reviews: "316", stars:"4.8"}, posts: "101"}} >In the very skilled builder with over 12 years experience. I am from the New York area and have worked for several of the largest companies here such as. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus hic vel quia dignissimos laboriosam natus ea molestias officia minima illum, rem, excepturi aut accusantium quod enim harum ipsam maxime necessitatibus!</Person>
          <Person name="Shay Martin" type="photographer" address="Rexburg - Idaho, USA" about={{projects: "94", reviews: {reviews: "10", stars:"4.2"}, posts: "24"}} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus hic vel quia dignissimos laboriosam natus ea molestias officia minima illum, rem, excepturi aut accusantium quod enim harum ipsam maxime necessitatibus!</Person>
          <Person name="Stephanie Warhol" type="designer" address="Salt Lake City - Utah, USA" about={{projects: "134", reviews: {reviews: "97", stars:"4.6"}, posts: "29"}} >This is used as a prop, which will populate in the area you decide using props.children.</Person>
        </div>
      </div>
    );
  }
}

export default App;
