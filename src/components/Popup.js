import React from 'react';
import { useEffect, useState } from "react";


const Popup = (props) => {
    const [showElement, setShowElement] = useState(true);
    useEffect(() => {
        setShowElement(props.show);
        setTimeout(() => {
            console.log(showElement)
            setShowElement(false);
        }, 3000);

    }, showElement,props.show)

    return (
        <div className='popup'>{showElement ? <p className='fixed-popup'>{props.error}</p> : <></>}</div>
    )
}

export default Popup