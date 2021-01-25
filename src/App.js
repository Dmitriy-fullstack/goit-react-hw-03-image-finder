import React, { Component } from 'react';
import Searchbar from './Components/Searchbar/Searchbar';
import swal from 'sweetalert';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import ImageGalleryItem from './Components/ImageGalleryItem/ImageGalleryItem';



export default class App extends Component {
  state = {
    name: ''
  }

  handleFormSubmit = name =>{
    
    this.setState({ name })
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery name={this.state.name} />
      </>
    )
  }
}

