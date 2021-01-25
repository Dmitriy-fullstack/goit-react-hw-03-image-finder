import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './modal.module.css'

export default class Modal extends Component {
    static propTypes = {
        onBackdropClick: PropTypes.func,
        image: PropTypes.string.isRequired,
         }

    render() {
        const { onBackdropClick, image } = this.props;
        return (
            <>                     
               <section className={style.backdrop} onClick={onBackdropClick}>
                    <div className={style.backdropInner}>
                        <img className={style.backdropimg} src={image} alt="backdropImage" />
                    </div>
                </section>                       
            </>
        )
    }
}
