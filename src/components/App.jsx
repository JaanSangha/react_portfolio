import React from "react";
import Home from "./Home";
import Cardemon from "./Cardemon";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/projects-cardemon" element={<Cardemon />} />
            </Routes>
        </Router>
    </div>
    );

}


export default App;