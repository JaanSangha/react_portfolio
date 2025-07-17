import React from "react";
import Footer from "../common/Footer";
import SmallHeader from "../common/SmallHeader";
import CustomCursor from '../common/CustomCursor';

function FloodedFox() {

return (
    <div>
    <SmallHeader name="Flooded Fox" />
        <div className="container text-center">
            <div className="col-lg-10 mx-auto">
                <h1>Flooded Fox</h1>
                <iframe className="basicpadding" title="Flooded Fox Demo Video" width= "80%" height="400"
				    src="https://www.youtube.com/embed/BanOcFkxQsY?si=-D-mZbtNvFATS6qk">
				</iframe>
            </div>
        </div>

        <div className="container text-left">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <h3>Introduction</h3>
                    <p className="lead mb-5">I created a game using Unity with the theme "Running out of space" for a game jam in one day. The player must avoid the rising water level and make it to the rescue vehicle. This game was created using Unity 3D and C#.</p>
                    <h3>Unlocking Doors</h3>
                    <p className="lead mb-5">In order to progress to the next floor and get further away from the rising water, the player must unlock the doors which block their path. This is done by interacting with switches and finding keys that are hidden around the map.</p>
                    <h3>Running Out Of Space (Gamejam theme)</h3>
                    <p className="lead mb-5">If the player cannot find all the switches and reach the escape vehicle on the roof by the time the water level reaches whatever floor they are on, they will be submerged in it and lose the game. The game is meant to be challenging and fun to replay to try and beat your best time.</p>
                </div>
            </div>
        </div>

        <Footer />
        <CustomCursor />
    </div>
    );

}


export default FloodedFox;