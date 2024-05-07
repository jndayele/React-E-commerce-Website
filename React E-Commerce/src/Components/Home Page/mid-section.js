import React from "react";
import "./mid-section.css";

const MidSection = () => {
    return (
        <>
            <div className="mid-section">
                <div className="column">
                    <div className="image">
                        <img src="image/newsletter.png" alt="Testifier"></img>
                    </div>
                    <div className="desc">
                        <h2 className="header">Redifining Living Spaces</h2>
                        <h2 className="header">with Funrniture home</h2>
                        <p className="description"><div className="comma-top">"</div>They expertly turned my space into a haven of style and comfort. Every
                            design element seemed to reflect my vision, creating an atmosphere that
                            resonated with my dreams. The seamless blend of creativity and elegance has
                            truly made my home an inspiring sanctuary.<div className="comma">"</div>
                            <div className="btn">
                                <button type="submit">Learn More</button>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
            <div className="containe">
                <div className="item">
                    <img src="image/flower-vase.png" className="vase" alt="Flower Vase"></img>
                    <img src="image/black-clock.png" className="clock" alt="Black Clock"></img>
                    <img src="image/round-table.png" className="table" alt="Round Table"></img>
                    <img src="image/wooden-sofa.png" className="sofa" alt="Wooden Sofa"></img>
                    <img src="image/white-chair.png" className="chair" alt="White Chair"></img>
                </div>
            </div>
        </>
    )
}

export default MidSection