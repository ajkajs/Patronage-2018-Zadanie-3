import React, { Component } from 'react';
import './MoviesList.css';
import Movie from './Movie'



class MoviesList extends Component {

constructor (props) {
    super(props)  
}

  render() {
    return (
        <div id="moviesListContainer"> 
			<h1 className="heading">Movies list</h1>   
    		<ul id="moviesList">
                {this.props.movies.map( (movie) => {
                    return <Movie 
                    id={movie.id} 
                    title={movie.title} 
                    year={movie.year} 
                    genre={movie.genre} 
                    summary={movie.summary}
                    seen={movie.seen}
                    updateSeen={this.props.updateSeen}
                />})}
            </ul>
        </div> 
    )
  }
}

export default MoviesList;