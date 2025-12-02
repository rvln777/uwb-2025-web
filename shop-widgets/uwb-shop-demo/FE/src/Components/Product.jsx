import { useEffect, useState } from "react";

const Product = ({
    product
}) => {
    const [addQty, setAddQty] = useState(0);

    const changeAddQty = (e) => {
        setAddQty(e.target.value);
    }

    const saveProductInCart = (value) => {
        if (addQty > 0) {
            const cartProducts = localStorage.getItem("cart-products") ?? '[]';
            const cartProductsParsed = JSON.parse(cartProducts);
            cartProductsParsed.push({
                ...value,
                Qty: addQty
            });
            localStorage.setItem("cart-products", JSON.stringify(cartProductsParsed));
            window.location.reload();
        }
    };

    return (
        <>
            <div className="product" key={product.Id}>
                <div>Name: {product.Name}</div>
                <div>Cena: {product.Price}</div>
                <div>Ilosc: {product.Qty}</div>

                <div 
                    dangerouslySetInnerHTML={{ __html: product.Image }}
                    style={{ width: 50, height: 50 }}>{}</div>

                <input onChange={changeAddQty} value={addQty} type='number'/>
                <button onClick={() => saveProductInCart(product)}>
                    Add To Cart
                </button>
            </div>
        </>
    );
};

export { Product };
