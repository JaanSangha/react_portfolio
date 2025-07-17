import React from "react";
import Footer from "../common/Footer";
import SmallHeader from "../common/SmallHeader";
import CustomCursor from '../common/CustomCursor';

function RolyControly() {

return (
    <div>
    <SmallHeader name="Roly Controly" />
        <div className="container text-center">
            <div className="col-lg-10 mx-auto">
                <h1>Roly Controly</h1>
                <iframe className="basicpadding" title="Roly Controly Demo Video" width= "80%" height="400"
				    src="https://www.youtube.com/embed/dArwUA-roxw?si=N2SYGQikfWTMa3Qr">
				</iframe>
            </div>
        </div>

        <div className="container text-left">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <h3>Introduction</h3>
                    <p className="lead mb-5">I am currently working on creating a mobile game focused on tilt-controls. This game is expected to release this fall on the Play Store. This game is being created using Unity 3D and C#.</p>
                    <h3>Endless Level Possibilities</h3>
                    <p className="lead mb-5">I have tried to keep the player mechanics basic so anyone can pick it up and play while also allowing to make many different level combinations. The main control feature is used by tilting your device and there is only 1 tap needed to perform jumps. With these mechanics I plan to make a bunch of complicated levels that the player can explore and will be challenging to beat. The video shown is displaying some basic levels so the player can get a hang of the controls.</p>
                    <h3>Interactive Level Select</h3>
                    <p className="lead mb-5">The level select menu was made to be fun and interactive, it is almost like a level itself. When the player approaches a level they can see all the info about it and the actual objective. This makes it more engaging and fun to explore.</p>
                    <h3>Unlockable Chapters</h3>
                    <p className="lead mb-5">The player must get a certain amount of stars in a chapter to unlock the next one. The next chapter will be through a gate that the player can easily go through and explore a whole new set of levels. This makes the game more challenging and gives the player a sense of progression.</p>
                </div>
            </div>
        </div>

        <Footer />
        <CustomCursor />
    </div>
    );

}


export default RolyControly;