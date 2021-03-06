import React, { useContext } from 'react'
import cartContext from '../../store/cart-context'
import classes from './Cart.Module.css'
import Modal from '../UI/Modal'
import CartItem from './CartItem'

const Cart = (props) => {
    const cartCtx = useContext(cartContext)
    const hasItems = cartCtx.items.length > 0
    const totalAmount = cartCtx.totalAmount.toFixed(2)

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler = item => {
        cartCtx.addItem(item)
    }

    const CartItems = 
    <ul className={classes['cart-items']}>
    {
        cartCtx.items.map(item => 
        <CartItem 
            key={item.id} 
            name={item.name} 
            amount={item.amount} 
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null,item.id)}
            onAdd={cartItemAddHandler.bind(null,item)}
        />)
    }
    </ul>

    return (
        <Modal onClose={props.onCloseClick}>
            {CartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{`$${totalAmount}`}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseClick}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart
