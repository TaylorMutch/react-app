import React from 'react';


const ActivateButton = ({onClick, id, value, visible}) => {

    if (visible) {

    return (
        <input
            type="button"
            className="my-button my-button-ok"
            id={id}
            value={value}
            onClick={onClick}
        />
    )}

    return null;
}

export default ActivateButton;
