import React from "react";
import "./product.css";


function Product (props){
  return(
        <div className="detail-card">
            <img className="detail-img" src={props.img} />
            <div className="detail-name">
                <h4>{props.name}</h4>
                <p className="price">{props.price}</p>
            </div>
        </div>

   
  )
}

/*const Product = () => {
    return (
        <>
            <main>
                <div className="filter">
                    <h1>Popular Collection</h1>

                </div>
                <div className="detail-wrapper">
                    <div className="detail-card">
                        <img className="detail-img" src="image/flower-vase.png" alt="Flower Vase"></img>
                        <div className="detail-desc">
                            <div className="detail-name">
                                <h4>Flower Vase</h4>
                                <p className="price">$29.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="detail-card">
                        <img className="detail-img" src="image/bookshelf.png" alt="FBookshelf"></img>
                        <div className="detail-desc">
                            <div className="detail-name">
                                <h4>Bookshelf</h4>
                                <p className="price">$119.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="detail-card">
                        <img className="detail-img" src="image/white-chair.png" alt="Table Chair"></img>
                        <div className="detail-desc">
                            <div className="detail-name">
                                <h4>Table Chair</h4>
                                <p className="price">$180.34</p>
                            </div>
                        </div>
                    </div>
                    <div className="detail-card">
                        <img className="detail-img" src="image/black-clock.png" alt="Wall Clock"></img>
                        <div className="detail-desc">
                            <div className="detail-name">
                                <h4>Wall Clock</h4>
                                <p className="price">$20.14</p>
                            </div>
                        </div>
                    </div>
                    <div className="detail-card">
                        <img className="detail-img" src="image/round-table.png" alt="Round Table"></img>
                        <div className="detail-desc">
                            <div className="detail-name">
                                <h4>Round Table</h4>
                                <p className="price">$24.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="detail-card">
                        <img className="detail-img" src="image/pottery-vase.png" alt="Pottery Vase"></img>
                        <div className="detail-desc">
                            <div className="detail-name">
                                <h4>Pottery Vase</h4>
                                <p className="price">$24.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="detail-card">
                        <img className="detail-img" src="image/wooden-sofa.png" alt="Wooden Sofa"></img>
                        <div className="detail-desc">
                            <div className="detail-name">
                                <h4>Wooden Sofa</h4>
                                <p className="price">$140.22</p>
                            </div>
                        </div>
                    </div>
                    <div className="detail-card">
                        <img className="detail-img" src="image/black-chair.png" alt="Black Chair"></img>
                        <div className="detail-desc">
                            <div className="detail-name">
                                <h4>Black Chair</h4>
                                <p className="price">$160.34</p>
                            </div>
                        </div>
                    </div>
                    <div className="detail-card">
                        <img className="detail-img" src="image/green-vase.png" alt="Green Vase"></img>
                        <div className="detail-desc">
                            <div className="detail-name">
                                <h4>Green Vase</h4>
                                <p className="price">$40.13</p>
                            </div>
                        </div>
                    </div>
                    <div className="detail-card">
                        <img className="detail-img" src="image/white-chair1.png" alt="White Chair"></img>
                        <div className="detail-desc">
                            <div className="detail-name">
                                <h4>White Chair</h4>
                                <p className="price">$320.25</p>
                            </div>
                        </div>
                    </div>
                    <div className="detail-card">
                        <img className="detail-img" src="image/white-table.png" alt="White Table"></img>
                        <div className="detail-desc">
                            <div className="detail-name">
                                <h4>White Table</h4>
                                <p className="price">$279.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="detail-card">
                        <img className="detail-img" src="image/stripe-vase.png" alt="Stripe Vase"></img>
                        <div className="detail-desc">
                            <div className="detail-name">
                                <h4>Stripe Vase</h4>
                                <p className="price">39.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="detail-card">
                        <img className="detail-img" src="image/wooden-clock.png" alt="Wooden Clock"></img>
                        <div className="detail-desc">
                            <div className="detail-name">
                                <h4>Wooden Clock</h4>
                                <p className="price">$24.99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
*/
export default Product;