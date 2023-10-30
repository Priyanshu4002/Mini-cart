import React from 'react';
import toast from 'react-hot-toast';
import {useDispatch} from "react-redux"

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png";
const img3 =
    "https://m.media-amazon.com/images/I/61SSVxTSs3L._SX679_.jpg";
const img4=
    "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/g/b/g54-5g-payw0008in-motorola-original-imagt3md9swqcyr3.jpeg?q=70";


const Home = () => {
    const productarr=[
        {
            name:'Laptop',
            price:'20,000',
            img:img1,
            id:'nehaaaaaa'
        },

        {
            name:'Black Shoes',
            price:'450',
            img:img2,
            id:'anjaliiiii'
        },
        {
            name:'Noise Smart Watch',
            price:'1,999',
            img:img3,
            id:'prince'
        },
        {
            name:'Moto G54 5G',
            price:'15,999',
            img:img4,
            id:'aman'
        },
    ]

    const dispatch= useDispatch();

    const addToCartHandler=(options)=>{
        dispatch({type:'addToCart',payload:options})
        toast.success("Added to Cart")

        dispatch({type:'calculateTotal'})
    }

  return (
    <div className="home">
        {
        productarr.map((i)=>(
            <ProductItem key={i.id} 
                id={i.id} 
                price={i.price} 
                img={i.img} 
                name={i.name} 
                handler={addToCartHandler}
                />
        ))
    }
    </div>
  )
}

const ProductItem =({name , id , handler , price , img})=>(
    <div className='productCard'>
        <img src={img} alt="" />
        <p>{name}</p>
        <h4>₹{price}</h4>
        <button onClick={()=>handler({name, price,img, quantity:1,id})}>Add to Cart</button>
    </div>

)

export default Home
