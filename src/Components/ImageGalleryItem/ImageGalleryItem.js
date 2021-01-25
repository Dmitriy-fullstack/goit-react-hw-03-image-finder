import React from 'react'
import PropTypes from 'prop-types'


function ImageGalleryItem({images, onClick}) {

    return (
        <>
            {images.map(image => {
                const { id, webformatURL, largeImageURL} = image;
                return <li className="ImageGalleryItem" key={id}>
                            <img src={webformatURL} alt="" onClick={() => onClick(largeImageURL)}/>
                        </li>
                })
            }
        </>   
    )    
}

ImageGalleryItem.propTypes = {
    images: PropTypes.arrayOf(Object),
    byClick: PropTypes.func
}

export default ImageGalleryItem

