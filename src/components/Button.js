import React from 'react';

function Button ({nameButton, isDisabled}) {
    return (
            <button disabled={isDisabled} onClick={(()=> {
                console.log(nameButton)
            })}>{nameButton}</button>
    )
}
export default Button;