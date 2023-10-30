import React from 'react'
import {AiFillDelete} from 'react-icons/ai';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

const Cart = () => {

    const {cartItems,subTotal,shipping,tax,total}= useSelector((state)=>state.cart);
    const dispatch = useDispatch((state)=>state.cart);


    const increment=(id)=>{
      dispatch({type:'addToCart', payload:{id}})

      dispatch({type:'calculateTotal'})
    }

    const decrement=(id)=>{
      dispatch({type:'decrement', payload:id})

      dispatch({type:'calculateTotal'})
    }

    const deleteHandler=(id)=>{
      dispatch({type:'deleteItem', payload:id})

      dispatch({type:'calculateTotal'})
    }

  return (
    <div className='cart'>
      <main>
       {
        cartItems.length>0 ? (
            cartItems.map((i)=>(
                <CartItem 
                  name={i.name}
                  id={i.id}
                  imgSrc={i.img}
                  price={i.price}
                  qty={i.quantity}
                  key={i.id}
                  increment={increment}
                  decrement={decrement}
                  deleteHandler={deleteHandler}
                />
            ))
        ) :
        (
            <h1>"Items not added yet"</h1>
        )
       }
      </main>
      <aside>
        <h2>Subtotal:₹{subTotal}</h2>
        <h2>Shipping:₹{shipping}</h2>
        <h2>Tax: ₹{tax}</h2>
        <h2>Total:₹{total}</h2>
      </aside>
    </div>
  )
}

const CartItem=({name,id,imgSrc,price,increment,decrement,deleteHandler,qty})=>(
    <div className="cartItem">
        <img src={imgSrc} alt="" />
        <article>
            <h3>{name}</h3>
            <p>₹{price}</p>
        </article>
        <div>
            <button onClick={()=>decrement(id)}>-</button>
            <p>{qty}</p>
            <button onClick={()=>increment(id)}>+</button>
        </div>
        <AiFillDelete onClick={()=>deleteHandler(id)}/>
    </div>
)

export default Cart
