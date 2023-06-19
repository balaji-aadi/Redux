import React, { useEffect, useState } from 'react'
import { add } from '../Store/cartSlice';
import { useDispatch,useSelector } from 'react-redux';
import { fetchProducts, setProducts } from '../Store/productSlice';
import {STATUSES} from '../Store/productSlice'

const Products = () => {
    const dispatch = useDispatch();
    
    const {data : products , status} = useSelector(state => state.product);

    // const [products, setProducts] = useState([]);

    useEffect(() => {

        dispatch(fetchProducts());
        
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data)
        //     setProducts(data);
        // }

        // fetchProducts();
    },[])

    const handleAdd = (product) => {
      alert('Press ok to add the product in the cart')
      dispatch(add(product));
    };

    if(status === STATUSES.LOADING){
      return <h2>loading...</h2>
    }

    if(status === STATUSES.ERROR){
      return <h2>Something went wrong!</h2>
    }

  return (
    <div className='productsWrapper'>
      {
        products.map(product => (
            <div className="card" key={product.id}>
                <img src={product.image} alt="image" />
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <h5>$ {product.price}</h5>
                <button onClick={() => handleAdd(product)} className='btn'>Add to cart</button>
            </div>
        ))
      }
    </div>
  )
}

export default Products
