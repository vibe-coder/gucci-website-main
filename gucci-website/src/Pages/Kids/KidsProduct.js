export default function KidsProduct(props){
  return(
    <>
      <div className="product-div">
      <img 
      className="men-product-image" 
      src={require('' + props.image)}
      loading="lazy"
      alt="product img" 
      />
      <h5 className="men-product-name">{props.name}</h5>
      <p className="men-product-price">{props.price}</p>
      </div>
    </>
  )
}