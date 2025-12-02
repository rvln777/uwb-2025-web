import { useEffect, useState } from "react";
import { Product } from './Product';

const ProductsPage = () => {
    const [products, setProducts] = useState(['get']);

    useEffect(() => {
        fetch("http://localhost:5000/products")
          .then((response) => {
            return response.json()
          })
          .then((parsedData) => {
            setProducts(parsedData);
          })
    }, []);

    return (
        <>
            <h3>Producty: </h3>
            <div className='products'>{
                products?.map((product) => <Product product={product}/>)
            }</div>
        </>
    );
};

export { ProductsPage };