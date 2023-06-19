import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {remove} from '../Store/cartSlice'

const Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector(state => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId))
  }

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {
          products.map(product => (
            <div className="cartCard">
              <img src={product.image} alt="" />
              <h4>{product.title} </h4>
              <h5>{product.price}</h5>
              <button className='btn' onClick={() => handleRemove(product.id)}>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart
