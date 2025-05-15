import React from "react";
import Home from "./Home";
import Cardemon from "./Cardemon";
import RolyControly from "./RolyControly"
import FloodedFox from "./FloodedFox"
import CarBattle from "./CarBattle";
import RecklessRubber from "./RecklessRubber"
import ArApp from "./ArApp";
import NotesApp from "./NotesApp"
import Petstagram from "./Petstagram";
import TwitterAPIBots from "./TwitterAPIBots";
import ResumeGenie from "./ResumeGenie";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ScrollToTop from './ScrollToTop';

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