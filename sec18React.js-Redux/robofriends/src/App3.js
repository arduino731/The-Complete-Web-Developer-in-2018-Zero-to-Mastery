import React, {Component } from 'react';
import CardList2 from './CardList2';
import SearchBox3 from './SearchBox3';
import { robots } from './robots';

class App3 extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = ((event) => {
    this.setState({ searchfield: event.target.value })
  })

  render(){
    const filteredRobots = this.state.robots.filter(robots => {
      return (
        robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
        robots.email.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
        robots.username.toLowerCase().includes(this.state.searchfield.toLowerCase())
      )
    })
    
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox3 searchChange={ this.onSearchChange } />
        <CardList2 robots={ filteredRobots } />
      </div>
    );

  }
}
export default App3;
