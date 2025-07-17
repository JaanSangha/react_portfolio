import React from "react";
import Footer from "./Footer";
import SmallHeader from "./SmallHeader";
import CustomCursor from './CustomCursor';

function ArApp() {

return (
    <div>
    <SmallHeader name="Ar App" />
        <div className="container text-center">
            <div className="col-lg-10 mx-auto">
                <h1>Ar App</h1>
                <iframe className="basicpadding" title="Ar Demo Video" width= "80%" height="400"
				    src="https://www.youtube.com/embed/Mx3-D-eny1k?si=9XiCedWl_5CSTVv0">
				</iframe>
            </div>
        </div>

        <div className="container text-left">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <h3>Introduction</h3>
                    <p className="lead mb-5">Created an app with AR Core that enables the user to place diferent types of 3D furniture or items in any room they want using the camera on their phone. I created this application with Android Studio.</p>
                    <h3>AR Core</h3>
                    <p className="lead mb-5">By implementing AR Core into my app it can identify walls and floors. It also keeps track of where you place items so you can look around and when you look back it will be in the same spot relative to the real world. Using Android Studio I needed to add it into the project and implement it, then it was ready to be used by the program.</p>
                    <h3>Placeable Objects</h3>
                    <p className="lead mb-5">Adding the items into the game that the user can place down virtually was the main point of the app. I can download or create any 3D model and add it to the menu for the user to be able to place it on the floor in the app. This is super cool because you can create anything you want and add it to the app, a rare personal item could be modelled and added for a personalized experience. The ones shown are downloaded from <a href="https://poly.google.com/" data-custom-cursor>here</a>.</p>
                    <h3>Transforming Objects</h3>
                    <p className="lead mb-5">Once the objects are placed on the floor the user might want to move them slightly or make them bigger/smaller to reflect where they would put them in real life or just for fun. In order for this to work I had to detect if the user is zooming or swiping on top of the object.</p>   
                </div>
            </div>
        </div>

        <Footer />
        <CustomCursor />
    </div>
    );

}


export default ArApp;