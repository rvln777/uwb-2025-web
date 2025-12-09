import { useEffect, useState } from "react";

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
                products?.map((product) => <div className="product">
                        <div contentEditable='true' dangerouslySetInnerHTML={{ __html: product.image }}></div>
                        <div>{product.name}</div>
                    </div>)
            }</div>
        </>
    );
};

export { ProductsPage };