import "./kids.css"


export default function Kids(){
  const productMap3 = MennData.map((MenData)=>{
    return (<MenProduct  
    image={MenData.image}
    name={MenData.name}
    price={MenData.price}
    />)
  })
  return(
    <>
      <div className="black-backdrop-4">.</div>
      
      <div className="kids-page-wrapper">
        
        <div className="intro-wrapper-3">
          <p>Kidsss<span className="grey-intro-3"> | Ready to Wear for Kids</span></p>
        </div>

        <div className="header-wrapper-3">
          <h2>KID'S READY-TO-WEAR</h2>
          <p>The kid's ready-to-wear collection designed by Alessandro Michele mixes silk
            <br/>dresses, tweed ensembles and embelished looks.
          </p>
        </div>

        <div className="filter-button-wrapper-3">
          <div className="filter-wrapper-3">
            <div className="left-button-3">
              <button className="button-3">Category <span className="arrow-3">›</span></button>
              <button className="button-3">Filter <span className="arrow-3">›</span></button>
            </div>

            <div className="right-button-3">
              <button className="sort-by-3">Sort by: <span className="newest-3">Newest ›</span></button>
            </div>
          </div>
        </div>

        <div className="collection-wrapper-3">
            Hey
        </div>


        <div className="load-more-wrapper-3">
          <a className="load-more-3" href="ww.gucci.com">LOAD MORE</a>
          <div className="more-pages-link-wrapper-3">
          <p>‹</p>
            <a href="ww.gucci.com">1</a>
            <a href="ww.gucci.com">2</a>
            <a href="ww.gucci.com">...</a>
            <a href="ww.gucci.com">8</a>
            <p>›</p>
          </div>
        </div>
      
      
      
      
      
      </div>
    </>
  )
}