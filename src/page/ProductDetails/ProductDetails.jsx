import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './productDetails.css'
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaHeart, FaShare } from "react-icons/fa";
import SlideProducts from '../../components/slideProducts/SlideProducts';
import { useCart } from '../../components/header/Cart';
import { useFav } from '../../components/header/Fav';
function ProductDetails() {

  const {id}= useParams()
  console.log(id);
  const [ product, setProduct ]= useState(null)
  const [loading, setLoading] = useState(true)
  const [ catproduct, setCatproduct ]= useState(null)
  const [catloading, setCatloading] = useState(true)
const { addToCart, isInCart } = useCart();

  const { addToFav ,removeFromFav  , isInFav} = useFav();
  useEffect(() => {

    const fetchProduct = async () => {
      try{
         const res = await fetch(`https://dummyjson.com/products/${id}`)
          const data = await res.json()
          setProduct(data)
          setLoading(false)

    
      }catch(error){
        console.error("Error Fetching", error);
      }

    }
    fetchProduct()
  }, [id])
const handleAddToCart = (product) => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) {
    navigate("/login");
    return;
  }

  if (!isInCart(product.id)) {
    addToCart(product);   // يضيف لو مش موجود
  } else {
    console.log("المنتج موجود بالفعل في الكارت");
  }
};
const handleFav = (product) => {
  if (isInFav(product.id)) {
    removeFromFav(product.id);
  } else {
    addToFav(product);
  }
};
useEffect(()=>{
  if (!product) return
  fetch(`https://dummyjson.com/products/category/${product.category}`)
  .then(res => res.json())
  .then(data => {
    setCatproduct(data.products)
  })
  .catch(error => console.error("Error fetching category products:", error))
  .finally(() => setCatloading(false))
  
}, [product])

 if (loading){
    return <p>Loading...</p>
 }
  return (
  <>
      <div className='item_details'>
      <div className='container'>
        
        <div className="imgs_item ">
          <div className="big_img">
            <img id="main img" src={product.images[0]} alt="" />
          </div>
          <div className="sm_img">
            {product.images.map((img, index) => (
              <img key={index} src={img} alt=""   onClick={ ()=> document.getElementById("main img").src = img}/>
            )
          )}
          </div>
        </div>

        <div className="details_item">

          <h1 className="name"> {product.title} </h1>
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>

          <div className="price">${product.price}</div>

          <h5> Availability: <span>{product.availabilityStatus}</span></h5>
          <h5>Brand: <span>{product.brand}</span></h5>
          <p className='desc'>{product.description}</p>
          <h5 className='stock'> <span> Hurry up only {product.stock} is in stock</span></h5>
          <Link 
  className='link btn' 
  to='/cart' 
  onClick={() => handleAddToCart(product)}
>
  Add to cart
</Link>
        <div className="icons">
          <span className={`${isInFav(product.id) ? 'active' : ''}`}>
            <FaHeart onClick={() => handleFav(product)} />
          </span>
          <span><FaShare /></span>
        </div>
        </div>
      </div>
    </div>

      {catloading? (<p>Loading...</p>):(
        <SlideProducts title={`More in ${product.category}`} data={catproduct} />
      )}

  </>
  )
}

export default ProductDetails