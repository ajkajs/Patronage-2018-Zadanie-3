import React, { Component } from 'react';
import './Counters.css';

class Counters extends Component {

  constructor (props) {
    super(props)

  }

  
  render() {
    return (
      <div id="moviesCountersContainer">
        <p>All: <span className="moviesCounter" id="moviesCounterAll">{this.props.movies.length}</span></p>
        <p>Viewed: <span className="moviesCounter" id="moviesCounterSeen">{this.counterMoviesSeen()}</span></p>
      </div>
    )
  }

  counterMoviesSeen (movie) {
    let moviesSeen = this.props.movies.filter((movie) => {
      return movie.seen === "T"
    })
    return moviesSeen.length
  }
}

export default Counters;