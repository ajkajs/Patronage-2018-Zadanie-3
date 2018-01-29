import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

constructor (props) {
    super(props)  

    this.onSubmit = this.onSubmit.bind(this)
    this.initialState = {
        year: "",
        genre: "",
        title: "",
        summary: "",
        seen: "F"
    }

    this.state = Object.assign({},this.initialState)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        
        
        this.setState({
        [name]: value
        })
    }

    handleSubmit(e) {
       this.setState(Object.assign({}, this.initialState))
    }

  render() {
    return (
        <div id="formContainer">
			<form onSubmit={this.onSubmit.bind(this)}>
				<h1 className="heading">Add a movie</h1>
				<div className="container row">
					<label for="year">Year:</label><input type="text" name="year" id="year" value={this.state.year}  onChange={this.handleInputChange}/>
					<label for="genre">Genre:</label><input type="text" name="genre" id="genre" value={this.state.genre}  onChange={this.handleInputChange}/>
				</div>
				<div className="row">
					<label for="title">Title:</label><input type="text" name="title" id="title" value={this.state.title}  onChange={this.handleInputChange}/>
				</div>
				<div className="row">
					<label for="summary">Summary:</label><textarea type="text" name="summary" id="summary" value={this.state.summary}  onChange={this.handleInputChange}></textarea>
				</div>
				<div className="row withRadios">
					<span className="radioLabel">Seen: </span>
					<label for="true">
						<input type="radio" name="seen" className="seen" value="T" checked={this.state.seen==="T"} onChange={this.handleInputChange}/>True
					</label>
					<label for="false">
						<input type="radio" name="seen" className="seen" value="F" checked={this.state.seen==="F"} onChange={this.handleInputChange}/>False
					</label>
				</div>	
				<div className="row withSubmit">
					<input type="submit" name="add" value="Add movie" className="add"  />
				</div>
			</form>
        </div>
    )
  }

  onSubmit (e) {
    e.preventDefault()
    let myErrorMessages = []

    function generateId () {
        return Math.floor(Math.random()*1000)
    }

    const yearPattern = /^[0-9]{4}$/
    if(!yearPattern.test(this.state.year)){
        myErrorMessages.push("Enter four digits")
    }

    if (this.state.genre == "") {
        myErrorMessages.push("Please fill the genre field.")
    }
    this.state.title = this.state.title.trim()
    if (this.state.title !== "") {
        let filteredTable = this.props.movies.filter((movie) => {
            return movie.title === this.state.title
        })
        let alreadyExist = filteredTable.length > 0

        if (alreadyExist) {
            myErrorMessages.push("This title is already used.")
        }
	} else {
        myErrorMessages.push("Please fill the title field.")
    }
    
    if(myErrorMessages.length > 0) {
        alert(myErrorMessages.join(" "));
        myErrorMessages = [];
    } else {
        this.props.addMovie({
            "id": generateId(),
            "title": this.state.title,
            "year": this.state.year,
            "genre": this.state.genre,
            "summary": this.state.summary,
            "seen": this.state.seen     
    })
        this.handleSubmit(e)
    }


  }
}

export default Form;