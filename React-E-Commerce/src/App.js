import React from "react";
import { BrowserRouter } from 'react-router-dom'
import HomePage from "./Components/Home Page/home-page";
const App = () => {
    return (
        <>
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>
        </>
    )
}

export default App;
