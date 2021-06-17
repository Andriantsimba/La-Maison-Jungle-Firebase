import React, { useContext } from 'react';
import { CartContext } from '../global/CartContext';
import { ProductsContext } from '../global/ProductsContext';

export const Products = () =>{

    const {products} = useContext(ProductsContext);
    // console.log(products);

    // const data = useContext(CartContext);
    // console.log(data);
    const {dispatch} = useContext(CartContext);

    return(
        <>
        {products.length !==0 && <h1>La Maison jungle </h1>} 
        <div className="products-container">
            {products.length ===0 && <div>slow internet ... no product to display</div>}
            {products.map(product =>(
                <div className="product-card" key={product.ProductID}>
                    <div className="product-img">
                        <img src={product.ProductImg} alt="not found" />
                    </div>
                    <div className="product-name">
                        {product.ProductName}
                    </div>
                    <div className="product-price">
                        $  {product.ProductPrice}.00
                    </div>
                        <button className="addCart-btn" onClick={()=>dispatch({type: "ADD_TO_CART", id: product.ProductID, product}) }> Add To Cart</button>
                </div>
            ))}
            
        </div>
        </>
    )
}
