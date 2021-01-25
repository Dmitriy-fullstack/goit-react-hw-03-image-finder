import React from 'react'
import PropTypes from 'prop-types';
import style from './button.module.css';

function Button({incrementPage}) {
    return (
        <div className={style.buttonMoreContainer}>
            <button className={style.buttonMore} onClick={incrementPage}>Загрузить больше</button>
        </div>
    )
}

Button.propTypes = {
    incrementPage: PropTypes.func,
}

export default Button

