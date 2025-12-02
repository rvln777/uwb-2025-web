import { useEffect, useState } from "react";

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/orders")
          .then((response) => {
            return response.json()
          })
          .then((parsedData) => {
            console.log(parsedData)
            setOrders(parsedData);
          })
    }, []);

    return (
        <>
            <h3>Orders: </h3>
            <div className='orders'>{
                orders?.map((order) => <div className="order">
                    <div>#{order.id}</div>
                    <div>Date: {order.date}</div>
                    <div>Total: {order.totalSum}</div>
                    {order.products.map((product) => <div>
                        <div>Name: {product.Name}</div>
                        <div>Cena: {product.Price}</div>
                        <div>Ilosc: {product.Qty}</div>
                        <div 
                            dangerouslySetInnerHTML={{ __html: product.Image }}
                            style={{ width: 50, height: 50 }}>{}</div>
                    </div>)}
                </div>)
            }</div>
        </>
    );
};

export { OrdersPage };