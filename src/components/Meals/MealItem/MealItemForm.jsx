import React, { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = (props) => {
    const amountInputRef = useRef()
    const [isValid, setIsValid] = useState(true)

    const submitHandler = (event) => {
        event.preventDefault()

        const amountInput = amountInputRef.current.value
        const amountInputNumber = +amountInput

        if(amountInput.trim().length === 0 || amountInputNumber<1 || amountInputNumber>5){
            setIsValid(false)
            return;
        }

        props.addToCart(amountInputNumber)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef} 
                label="Amount"
                input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                defaultValue: '1',
                step: '1'
                }}
            />
            <button>+ Add</button>
            {!isValid && <p>Not valid, please enter amount from 1-5</p>}
        </form>
    )
}

export default MealItemForm
