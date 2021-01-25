import React, { Component } from 'react'
import PropTypes from 'prop-types';
import swal from 'sweetalert';

export default class Searchbar extends Component {
    state = {
      name: ''  
    }

    handleNameChange = event =>{
        this.setState({name: event.currentTarget.value.toLowerCase()})
    }

    handleSubmit = event => {
        event.preventDefault();

        if(this.state.name.trim() === '') {
            return swal('введите данные, пожалуйста')
        }
        this.props.onSubmit(this.state.name);
        this.setState({ name: '' });
    }


    render() {
        return (
            
                <header className="Searchbar">
                    <form className="SearchForm" onSubmit={this.handleSubmit}>
                        <button type="submit" className="SearchForm-button">
                            <span className="SearchForm-button-label">Search</span>
                        </button>

                        <input className="SearchForm-input" type="text" value={this.state.name} onChange={this.handleNameChange} autoComplete="off" placeholder="Search images and photos"/>
                    </form>
                </header>
        ) 
    }
}
