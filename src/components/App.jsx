import React from "react";
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
import CoachK from "./projects/CoachK";
import Home from "./home/Home";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ScrollToTop from "./common/ScrollToTop";

function App() {

return (
    <div>
        <Router>
        <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects-cardemon" element={<Cardemon />} />
                <Route path="/projects-rolycontroly" element={<RolyControly />} />
                <Route path="/projects-floodedfox" element={<FloodedFox />} />
                <Route path="/projects-carbattle" element={<CarBattle />} />
                <Route path="/projects-recklessrubber" element={<RecklessRubber />} />
                <Route path="/projects-arapp" element={<ArApp />} />
                <Route path="/projects-notesapp" element={<NotesApp />} />
                <Route path="/projects-petstagram" element={<Petstagram />} />
                <Route path="/projects-twitterapibots" element={<TwitterAPIBots />} />
                <Route path="/projects-resumegenie" element={<ResumeGenie />} />
                <Route path="/projects-coachk" element={<CoachK />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    </div>
    );

}


export default App;