import React from 'react';


function Product({redLabel, locationImage, description, price}) {
    return (
        <article>
            <span>{redLabel}</span>
            <img src={locationImage} alt=""/>
            <p>{description}</p>
            <h4>{price}</h4>
        </article>

    )
}
export default Product;