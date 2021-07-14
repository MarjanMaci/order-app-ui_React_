import React from 'react'
import meals from '../../assets/meals.jpg'
import classes from './Header.module.css'
import CartButton from './CartButton'

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Maci's Cuisine</h1>
                <CartButton onClick={props.onCartClick}/>
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="noPhoto" />
            </div>
        </React.Fragment>
    )
}

export default Header
