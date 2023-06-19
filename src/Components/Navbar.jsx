import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const items = useSelector(state => state.cart);
  return (
    <div style={{display:'flex' , alignItems: "center" , justifyContent: 'space-between'}}>
      <Link to={'/'} className='logo'>REDUX STORE</Link>
      <nav>
        <Link className="navLink" to='/'>Home</Link>
        <Link className="navLink" to='/cart'>Cart</Link>
        <span className='cartCount'> Cart items : {items.length}</span>
      </nav>
    </div>
  )
}

export default Navbar
