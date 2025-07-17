import React from "react";
import Footer from "./Footer";
import SmallHeader from "./SmallHeader";
import CustomCursor from './CustomCursor';

function RecklessRubber() {

return (
    <div>
    <SmallHeader name="Reckless Rubber" />
        <div className="container text-center">
            <div className="col-lg-10 mx-auto">
                <h1>Reckless Rubber</h1>
                <iframe className="basicpadding" title="Reckless Rubber Demo Video" width= "80%" height="400"
				    src="https://www.youtube.com/embed/oO6GE1D-9zs?si=gnHG22b-rYH1EbCh">
				</iframe>
            </div>
        </div>

        <div className="container text-left">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <h3>Introduction</h3>
                    <p className="lead mb-5">Created a game using Unity for a game jam with the theme "10 Seconds". The player must prepare thier car and then race around the track and hit each checkpoint within 10 seconds. This game was created using Unity 3D and C#.</p>
                    <h3>Preparing the Car</h3>
                    <p className="lead mb-5">The player can run around and interact with things any time when not driving the car. In this game it is required for the player to fill up the gas in the car in order to make it around the track. This is done using bools and triggers as well as Unity's new input system. I also used free animations from Mixamo.</p>
                    <h3>Entering the Car</h3>
                    <p className="lead mb-5">The player can freely enter and exit the car. When entering the car the UI switches to driving mode and the player controls the car, when exiting the car everything is returned and the player can control the human again.</p>
                    <h3>10 Second Racing (Gamejam theme)</h3>
                    <p className="lead mb-5">The player can drive onto the track to start the race and then they must reach the next checkpoint within the given 10 seconds. This time frame was chosen because the gamejam theme was 10 seconds and it made the game more challenging and fun.</p>   
                    <h3>Finishing the Race</h3>
                    <p className="lead mb-5">After reaching the final checkpoint the player will be prompted how to proceed. They can either continue driving around the track for a bit or exit the car and head to the garage which is the end of the game. The game is meant to be replayed to try and beat your best time.</p>   
                </div>
            </div>
        </div>

        <Footer />
        <CustomCursor />
    </div>
    );

}


export default RecklessRubber;