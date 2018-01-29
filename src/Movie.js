import React, { Component } from 'react';
import MoviesList from './MoviesList';

class Movie extends Component {
    constructor (props) {
        super (props)
    }
      render () {
        return (

            <li>
                id: {this.props.id} <br/> 
                title: {this.props.title} <br/>
                year: {this.props.year} <br/>
                genre: {this.props.genre} <br/>
                summary: {this.props.summary} <br/>
                <span id={this._getSpanId()}>seen: {this.props.seen}</span>
                {this._getCheckbox()}
            </li>
        )
      }

      _getSpanId () {
          return "seen_" + this.props.id
      }
      _getCheckbox () {
        return (<input type="checkbox" id={this.props.id} defaultChecked={this.props.seen === "T"} onChange={this.change.bind(this)}/>)
          
      }
      change () {
        this.props.updateSeen(this.props.id)
      }
    }
    
    export default Movie;
    