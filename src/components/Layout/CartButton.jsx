import React, {useContext, useState, useEffect} from 'react'
import cartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './CartButton.module.css'

const CartButton = (props) => {
    const cartCtx = useContext(cartContext)
    const { items } = cartCtx
    const numberOfCartItems = items.reduce((curNumber, item)=>{
        return curNumber + item.amount
    }, 0)

    const [isBumping, setIsBumping] = useState(false)
    const classesBtn = `${classes.button} ${isBumping && classes.bump}`

    useEffect(()=>{
        if(items.length===0){
            return;
        }
        setIsBumping(true)
        const timer = setTimeout(()=>{
            setIsBumping(false)
        }, 300)

        return ()=>{
            clearTimeout(timer)
        }
    }, [items])

    return (
        <button className={classesBtn} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
}

export default CartButton
