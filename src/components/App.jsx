import React from "react";
import Home from "./Home";
import Cardemon from "./Cardemon";
import RolyControly from "./RolyControly"
import FloodedFox from "./FloodedFox"

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/projects-cardemon" element={<Cardemon />} />
                <Route exact path="/projects-rolycontroly" element={<RolyControly />} />
                <Route exact path="/projects-floodedfox" element={<FloodedFox />} />
            </Routes>
        </Router>
    </div>
    );

}


export default App;