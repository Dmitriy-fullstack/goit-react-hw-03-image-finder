import React from 'react'
import PropTypes from 'prop-types'

function Fetch({name = '', page = 1}) {
  console.log(name);
  console.log(page);
    const key = '19196352-c8b59687c9ebaed16cee14214';
    const url = `https://pixabay.com/api/?q=${name}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
    
    return fetch(url).then(response => {
        if (response.ok) {
          return response.json();
        }
      });
        
    
}



Fetch.propTypes = {
    name: PropTypes.string,
    page: PropTypes.number
}

export default Fetch

