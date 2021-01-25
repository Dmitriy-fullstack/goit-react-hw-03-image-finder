import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import swal from 'sweetalert';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

export default class ImageGallery extends Component {
    state = {
        page: 1,
        name: '',
        images: [], 
        status: 'Idle',
        largeImageURL: '',
        showModal: false

 
     } 
     componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.name;
        const nextName = this.props.name;
        const key = '19196352-c8b59687c9ebaed16cee14214';

        if(prevName !== nextName){
          const url = `https://pixabay.com/api/?q=${nextName}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
        fetch(url).then(response => {
            if (response.ok) {
                return response.json();
            }
            }).then(data => {
                if(data.hits.length === 0){
                    swal('Нет данных по Вашему запросу')
                };
                if(data.hits.length > 0) {
                    this.setState({ images: data.hits, status: 'Resolved' })
                }
            }).catch(error => this.setState({ status: 'Rejected' })).finally(() => {
                    window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: 'smooth',
                    });
                });
        }

        if(prevState.page !== this.state.page) {
            this.setState({status: 'Pending'})
            const url = `https://pixabay.com/api/?q=${nextName}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
            fetch(url).then(response => {
            if (response.ok) {
                return response.json();
            }
            }).then(data => {
                this.setState(prev => ({
                    images: [...prev.images, ...data.hits],
                    status: 'Resolved',
                }));
            }).catch(error => this.setState({ status: 'Rejected' })).finally(() => {
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            })    
            
        }
    }

    onIncrementPage = () => {
       this.setState({ page: this.state.page + 1 }) 
    }

    handleImageClick = image => {            
        this.setState({largeImageURL: image, showModal: true});
    }

    handleBackdropCLick = evt => {
        if (evt.target.tagName === 'SECTION') {
            this.setState({ showModal: false });
            return;
        }
        if (this.state.showModal === true) {
            document.addEventListener('keydown', evt => {
                if (evt.code === 'Escape') {
                    this.setState({ showModal: false });
                    return;
                }
            })
        }
        if (this.state.showModal === false) {
            document.removeEventListener('keydown');
        }
    }


    render() {
        const { largeImageURL, images, showModal, status } = this.state;
        return (
            <>
            <ul className="ImageGallery">
               <ImageGalleryItem images={images} onClick={this.handleImageClick} />  
            </ul>
            {status === 'Pending' && (
                <div className="loaderContainer">
                    <Loader type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            timeout={3000} />
                </div>
            )}
            {(images.length > 0 || status === 'Resolved') && (
                <Button incrementPage={this.onIncrementPage} /> 
            )} 
            {showModal && <Modal image={largeImageURL} onBackdropClick={this.handleBackdropCLick}/>}               

            </>
            
        )
    }
}
