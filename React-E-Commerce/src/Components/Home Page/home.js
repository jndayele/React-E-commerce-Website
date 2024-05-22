import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { MdArrowOutward } from "react-icons/md";
import Product from "./product";

const Home = () => {

    return (
        <>
            <main>
                <div className="home">
                    <div className="top-banner">
                        <div className="content">
                            <Link to='/#' className="top-crumps">Furniture Home</Link>
                            <div className="contentLeft">
                            <p> Embrace</p>
                            <p>Peaceful</p>
                            <p>Oasis</p>
                            </div>
                            <Link to='/collection' className="link">Shop Now <MdArrowOutward /></Link>
                        </div>
                    </div>
                    <div className="about">
                        <div className="wwd">
                            <h1>What We Do</h1>
                            <p>
                                Our Focus: Crafting Inspiring Living Spaces.At <b>Furniture home,</b> we're dedicated to turning ordinary spaces into
                                <br/>  visual masterpieces.With a passion for design, we collaborate closely with you to bring your unique vision to life. 
                                 <br/> From color palettes to furniture arrangement,
                                <br/>our decor experts ensure each corner tells a captivating story.
                            </p>
                            <p>
                                Whether your style is contemporary, classic, or eclectic, let us expertly transform your dreams into stunning reality.
                                <br/>Discover the art of creating lovely environments that truly resonate and inspire, as we skillfully turn houses into
                                <br/> homes and rooms into reflections of you.
                            </p>
                        </div>
                        <div className="contentButton">
                        <Link to='/#' className="link">Learn More</Link>
                        </div>
                    </div>

                    <div className="filter">
                    <h1>Popular Collection</h1>
                    <div className="detail-wrapper">
                      <Product
                      img = "image/flower-vase.png" alt="Flower Vase"
                      name= "Flower Vase"
                      price= {"$" + 29.99}
                     />
                       <Product
                      img = "image/bookshelf.png" alt="Bookshelf"
                      name= "Bookshelf"
                      price= {"$" + 119.99}
                     />

                     <Product 
                     img = "image/white-chair.png" alt="Table Chair"
                     name= "Table Chair"
                     price = {"$" + 180.34}
                     />
                     
                     <Product
                     img ="image/black-clock.png" alt="Wall Clock"
                     name = "Wall Clock"
                     price = {"$" + 20.14}
                     />
                     
                    </div>

                    <div className="detail-wrapper">
                      <Product
                      img = "image/round-table.png" alt="Round Table"
                      name= "Round Table"
                      price= {"$" + 24.99}
                     />
                       <Product
                      img = "image/pottery-vase.png" alt="Pottery Vase"
                      name= "Pottery Vase"
                      price= {"$" + 24.99}
                     />

                     <Product 
                     img = "image/wooden-sofa.png" alt="Wooden Sofa"
                     name= "Wooden Sofa"
                     price = {"$" + 140.22}
                     />
                     
                     <Product
                     img ="image/black-chair.png" alt="Black Chair"
                     name = "Black Chair"
                     price = {"$" + 160.34}
                     />
                     
                    </div>


                </div>
                </div>
            </main>
        </>
    )
}

export default Home;