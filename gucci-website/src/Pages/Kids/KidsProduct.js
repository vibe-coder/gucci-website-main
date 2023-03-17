export default function KidsProduct(props){
  return(
    <>
      <div className="product-div">
      <img 
      className="kids-product-image" 
      src={require('' + props.image)}
      loading="lazy"
      alt="product img" 
      />
      <h5 className="kids-product-name">{props.name}</h5>
      <p className="kids-product-price">{props.price}</p>
      </div>
    </>
  )
}