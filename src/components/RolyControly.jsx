import React from "react";
import Footer from "./Footer";
import SmallHeader from "./SmallHeader";
import CustomCursor from './CustomCursor';

function Cardemon() {

return (
    <div>
    <SmallHeader name="Roly Controly" />
        <div class="container text-center">
            <div class="col-lg-10 mx-auto">
                <h1>Roly Controly</h1>
                <iframe className="basicpadding" title="Roly Controly Demo Video" width= "80%" height="400"
				    src="https://www.youtube.com/embed/dArwUA-roxw?si=N2SYGQikfWTMa3Qr">
				</iframe>
            </div>
        </div>

        <div class="container text-left">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <h3>Introduction</h3>
                    <p class="lead mb-5">I am currently working on creating a mobile game focused on tilt-controls. This game is expected to release this fall on the Play Store. This game is being created using Unity 3D and C#.</p>
                    <h3>Endless Level Possibilities</h3>
                    <p class="lead mb-5">I have tried to keep the player mechanics basic so anyone can pick it up and play while also allowing to make many different level combinations. The main control feature is used by tilting your device and there is only 1 tap needed to perform jumps. With these mechanics I plan to make a bunch of complicated levels that the player can explore and will be challenging to beat. The video shown is displaying some basic levels so the player can get a hang of the controls.</p>
                    <h3>Interactive Level Select</h3>
                    <p class="lead mb-5">The level select menu was made to be fun and interactive, it is almost like a level itself. When the player approaches a level they can see all the info about it and the actual object changes to different coloureed trophies or a not completed object. The player will be able to explore and find all the levels while being able to tell which ones they have already fully completed.</p>
                    <h3>Unlockable Chapters</h3>
                    <p class="lead mb-5">The player must get a certain amount of stars in a chapter to unlock the next one. The next chapter will be through a gate that the player can easily go through and explore a whole new areas with more levels to find and complete.</p>
                </div>
            </div>
        </div>

        <Footer />
        <CustomCursor />
    </div>
    );

}


export default Cardemon;