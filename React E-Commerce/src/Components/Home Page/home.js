import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { MdArrowOutward } from "react-icons/md";
const Home = () => {

    return (
        <>
            <main>
                <div className="home">
                    <div className="top-banner">
                        <div className="content">
                            <Link to='/#' className="top-crumps">Furniture Home</Link>
                            <h3> Embrace</h3>
                            <h3>Peaceful</h3>
                            <h3>Oasis</h3>
                            <Link to='/collection' className="link">Shop Now <MdArrowOutward /></Link>
                        </div>
                    </div>
                    <div className="about">
                        <div className="wwd">
                            <h1>What We Do</h1>
                            <p>
                                Our Focus: Crafting Inspiring Living Spaces.At <b>Furniture home,</b> we're dedicated to turning ordinary spaces into visual masterpieces.
                                With a passion for design, we collaborate closely with you to bring your unique vision to life. From color palettes to furniture arrangement,
                                our decor experts ensure each corner tells a captivating story.
                            </p>
                            <p>
                                Whether your style is contemporary, classic, or eclectic, let us expertly transform your dreams into stunning reality.
                                Discover the art of creating lovely environments that truly resonate and inspire, as we skillfully turn houses into homes and rooms into reflections of you.
                            </p>
                        </div>
                        <Link to='/#' className="link">Learn More</Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;