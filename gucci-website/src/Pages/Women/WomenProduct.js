// import image1 from "./Women-prodcut-Image/image-1.jpg"

export default function WomenProduct(props){
  console.log(props.image)
  return(
    <>
      <div className="product-div">
        <img 
        className="women-product-image" 
        src={require(`../../Women-prodcut-Image/${props.image}`)}
        alt="product img" 
        />
        <h5 className="women-product-name">{props.name}</h5>
        <p className="women-product-price">{props.price}</p>
       </div>
    </>
  )
}