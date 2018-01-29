import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css';
import Counters from './Counters'
import MoviesList from './MoviesList'
import MoviesStorage from './MoviesStorage'
import Form from './Form'

class App extends Component {

  constructor (props) {
    super(props)

    this.myMoviesStorage = new MoviesStorage()
    this.state = {
        movies: this.myMoviesStorage.get()
    }

    this.updateSeen = this._updateSeen.bind(this)
    this.addMovie = this._addMovie.bind(this)
  }
  render() {
    return (
      <div>
        <Counters movies={this.state.movies}/>
        <Form addMovie={this.addMovie} movies={this.state.movies}/>
        <MoviesList movies={this.state.movies} updateSeen={this.updateSeen} />
      </div>
    )
  }

  _updateSeen (id) {
    const movies = this.state.movies.slice()
    const movie = movies.find(movie => movie.id === id)
    if (movie.seen === "T") {
      movie.seen = "F"
    } else {
      movie.seen = "T"
    }
  
    this.setState({movies: movies})
    this.myMoviesStorage.set(id, movie)
  }

  _addMovie (movie) {
    this.myMoviesStorage.set(movie)
    const movies = this.myMoviesStorage.get()
    this.setState({movies: movies})
  }
}
export default App;
