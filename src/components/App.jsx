import React from "react";
import Home from "./home/Home";
import Cardemon from "./projects/Cardemon";
import RolyControly from "./projects/RolyControly";
import FloodedFox from "./projects/FloodedFox";
import CarBattle from "./projects/CarBattle";
import RecklessRubber from "./projects/RecklessRubber";
import ArApp from "./projects/ArApp";
import NotesApp from "./projects/NotesApp";
import Petstagram from "./projects/Petstagram";
import TwitterAPIBots from "./projects/TwitterAPIBots";
import ResumeGenie from "./projects/ResumeGenie";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ScrollToTop from "./common/ScrollToTop";

function App() {

return (
    <div>
        <Router>
        <ScrollToTop />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/projects-cardemon" element={<Cardemon />} />
                <Route exact path="/projects-rolycontroly" element={<RolyControly />} />
                <Route exact path="/projects-floodedfox" element={<FloodedFox />} />
                <Route exact path="/projects-carbattle" element={<CarBattle />} />
                <Route exact path="/projects-recklessrubber" element={<RecklessRubber />} />
                <Route exact path="/projects-arapp" element={<ArApp />} />
                <Route exact path="/projects-notesapp" element={<NotesApp />} />
                <Route exact path="/projects-petstagram" element={<Petstagram />} />
                <Route exact path="/projects-twitterapibots" element={<TwitterAPIBots />} />
                <Route exact path="/projects-resumegenie" element={<ResumeGenie />} />
            </Routes>
        </Router>
    </div>
    );

}


export default App;