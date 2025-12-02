import { useEffect, useState, useCallback } from "react";

const CartPage = () => {
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const cartProducts = localStorage.getItem("cart-products") ?? '[]';
        const cartProductsParsed = JSON.parse(cartProducts);

        setProducts(cartProductsParsed);
    }, [reload]);

    const removeProductFromCart = (product) => {
        const cartProducts = localStorage.getItem("cart-products") ?? '[]';
        const cartProductsParsed = JSON.parse(cartProducts);
        const removeIndex = cartProductsParsed.findIndex((prod) => prod.Id === product.Id);
        cartProductsParsed.splice(removeIndex, 1);
        localStorage.setItem("cart-products", JSON.stringify(cartProductsParsed));
        setReload(!reload);
    };

    const confirmOrder = useCallback(() => {
        fetch("http://localhost:5000/orders", {
            method: 'POST',
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(products)
        })
          .then(() => {
            localStorage.setItem("cart-products", "[]");
            window.location.reload();
          })
    }, [products])
    
    return (
        <>
            <h3>Cart: </h3>
            <div className='products'>{
                products?.map((product) => <div className="product">
                    <div>{product.Name}</div>
                    <div>{product.Price}</div>
                    <div>{product.Qty}</div>
                    <div 
                        dangerouslySetInnerHTML={{ __html: product.Image }}
                        style={{ width: 50, height: 50 }}>{}</div>
                    <button onClick={() => removeProductFromCart(product)}>Remove From Cart</button>
                </div>)
            }</div>
            <button onClick={() => confirmOrder()}>Confirm Order</button>
        </>
    );
};

export { CartPage };
