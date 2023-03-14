
export default function WomenProduct(props){
  return(
    <>
      <div className="collection-wrapper">
        <div className="product-div">
          <img className="women-product-image" src={props.image} alt="img one" />
          <h5 className="women-product-name">{props.name}</h5>
          <p className="women-product-price">{props.price}</p>
         </div>
      </div>
    </>
  )
}