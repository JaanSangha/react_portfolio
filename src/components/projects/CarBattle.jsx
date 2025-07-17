import React from "react";
import Footer from "../common/Footer";
import SmallHeader from "../common/SmallHeader";
import CustomCursor from '../common/CustomCursor';

function CarBattle() {

return (
    <div>
    <SmallHeader name="Car Battle" />
        <div className="container text-center">
            <div className="col-lg-10 mx-auto">
                <h1>Car Battle</h1>
                <iframe className="basicpadding" title="Car Battle Demo Video" width= "80%" height="400"
				    src="https://www.youtube.com/embed/qXkuGn6fQIs?si=iROOQAg-wNbofEeH">
				</iframe>
            </div>
        </div>

        <div className="container text-left">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <h3>Introduction</h3>
                    <p className="lead mb-5">Created a car battle game with a partner using Unreal engine. There are turrets around the map that the player must defeat to win the game. This game was created using Unreal Engine 4 and C++.</p>
                    <h3>Overview</h3>
                    <p className="lead mb-5">In class my partner and I were instructed to create a game where the player controls a car and can drive around the map that we created, trying to defeat turrets to win the game. We used the Unreal engine to create this but we were not allowed to use any preset physics. This meant we had to code everything including the physics of the car movement.</p>
                    <h3>Ramps and Terrain</h3>
                    <p className="lead mb-5">In order to create exciting gameplay we figured we had to create some jumps and have different elevation for the map. We tried to create ramps and terrain that matched the overall theme of the map and here you can see that we placed a binder to give the vehicle enough air to clear a gap.</p>
                    <h3>Detailed Assets</h3>
                    <p className="lead mb-5">We really tried to make the game visually pleasing and brightly coloured to go along with the "childrens room" theme. We found and included many different assets that could add to the overall look and feel of the game. The game is meant to be fun and challenging for all ages.</p>   
                </div>
            </div>
        </div>

        <Footer />
        <CustomCursor />
    </div>
    );

}


export default CarBattle;