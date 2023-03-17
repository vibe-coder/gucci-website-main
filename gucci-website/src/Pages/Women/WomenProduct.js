export default function WomenProduct(props){

  return(
    <>
      <div className="product-div">
        <img 
        className="women-product-image" 
        src={require('' + props.image)}
        loading="lazy"
        alt="product img" 
        />
        <h5 className="women-product-name">{props.name}</h5>
        <p className="women-product-price">{props.price}</p>
       </div>
    </>
  )
}