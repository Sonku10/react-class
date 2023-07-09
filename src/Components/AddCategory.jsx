import React, { useState } from "react"
import { PropTypes } from "react";


export function AddCategory({thing}) {

    const [InputValue, setInputValue] = useState("example")

    function onInputChange(event) {
        setInputValue(event.target.value);
    }

    function onSubmit(event){
        event.preventDefault();
        if( InputValue.trim().length <= 1)return;
        thing(InputValue)
        setInputValue('')
    }

    return (
        <>
            <form onSubmit={ (event) => onSubmit(event)}>
                <input
                type="text"
                placeholder="Suck it"
                value={InputValue}
                onChange={ (event) => onInputChange(event)}
                />
            </form>
        </>
    )
}