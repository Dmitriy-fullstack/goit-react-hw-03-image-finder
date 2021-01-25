// import React, { Component } from 'react'
// import Fetch from '../Fetch/Fetch'
// import PropTypes from 'prop-types'
// import swal from 'sweetalert';

// export default class ImageInfo extends Component {
//     state = {
//        name: '',
//        images: null, 
//        status: 'Idle',

//     }

//     componentDidUpdate(prevProps, prevState) {
//         const prevName = prevProps.name;
//         const nextName = this.props.name;
//         if(prevName !== nextName){
//             fetch(nextName).then(res => res.json).then(images => this.setState({images}))

//             //     if(data.hits.length === 0){
//             //         swal('Нет данных по Вашему запросу')
//             //     };
//             //     if(data.hits.length > 0) {
//             //         this.setState({ images: data.hits, status: 'Resolved' })
//             //     }
//             // }).catch(error => this.setState({ status: 'Rejected' })).finally(() => {
//             //     window.scrollTo({
//             //         top: document.documentElement.scrollHeight,
//             //         behavior: 'smooth',
//             //     });
//             // });
        
//         }
//         // if(prevState.page !== this.state.page) {
//         //     this.setState({status: 'Pending'})
//         //     Fetch(nextName, this.state.page).then(data => {
//         //         this.setState(prev => ({
//         //             images: [...prev.images, ...data.hits],
//         //             status: 'Resolved',
//         //         }));
//         //     }).catch(error => this.setState({ status: 'Rejected' })).finally(() => {
//         //         window.scrollTo({
//         //             top: document.documentElement.scrollHeight,
//         //             behavior: 'smooth',
//         //         });
//         //     })    
            
//         // }
//     }

//     onIncrementPage = () => {
//        this.setState({ page: this.state.page + 1 }) 
//     }



//     render() {
//         // const {images, status} = this.state;

//         return (
//             <div>
//                 {this.state.images && <div>{this.state.images}</div>}
//             </div>
//         )
//     }
// }
