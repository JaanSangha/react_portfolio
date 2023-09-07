import React from "react";
import Footer from "./Footer";
import SmallHeader from "./SmallHeader";

function Cardemon() {

return (
    <div>
    <SmallHeader name="Flooded Fox" />
        <div class="container text-center">
            <div class="col-lg-10 mx-auto">
                <h1>Flooded Fox</h1>
                <iframe className="basicpadding" title="Flooded Fox Demo Video" width= "80%" height="400"
				    src="https://www.youtube.com/embed/BanOcFkxQsY?si=-D-mZbtNvFATS6qk">
				</iframe>
            </div>
        </div>

        <div class="container text-left">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <h3>Introduction</h3>
                    <p class="lead mb-5">I created a game using Unity with the theme "Running out of space" for a game jam in one day. The player must avoid the rising water level and make it to the rescue vehicle.</p>
                    <h3>Unlocking Doors</h3>
                    <p class="lead mb-5">In order to progress to the next floor and get further away from the rising water, the player must unlock the doors which block their path. This is done by interacting with switches that are randomly hidden throuout the level.</p>
                    <h3>Running Out Of Space (Gamejam theme)</h3>
                    <p class="lead mb-5">If the player cannot find all the switches and reach the escape vehicle on the roof by the time the water level reaches whatever floor they are on, they will be submerged in it and lose the game.</p>
                </div>
            </div>
        </div>

        <Footer />
    </div>
    );

}


export default Cardemon;