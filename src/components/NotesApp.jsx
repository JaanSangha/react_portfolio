import React from "react";
import Footer from "./Footer";
import SmallHeader from "./SmallHeader";
import CustomCursor from './CustomCursor';

function NotesApp() {

return (
    <div>
    <SmallHeader name="Notes App" />
        <div class="container text-center">
            <div class="col-lg-10 mx-auto">
                <h1>Notes App</h1>
                <iframe className="basicpadding" title="Notes Demo Video" width= "80%" height="400"
				    src="https://www.youtube.com/embed/GfOSxDfbr1A?si=4863E_6dCMXahHM1">
				</iframe>
            </div>
        </div>

        <div class="container text-left">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <h3>Introduction</h3>
                    <p class="lead mb-5">Created a React app during my web development bootcamp that can keep track of notes the user adds and deletes. You can test it out <a href="https://codesandbox.io/s/keeper-part-3-completed-forked-4k6hqw" data-custom-cursor>here.</a></p>
                    <h3>Flexibility</h3>
                    <p class="lead mb-5">One of the best features of using React is that the application can be seamlessly scaled and fully responsive. It is a very smooth process to add and remove the notes and resizing the window will shrink the content in a neat way. This makes it extremely easy to cater to users with an assortment of devices and even port it over to a mobile application.</p>
                </div>
            </div>
        </div>

        <Footer />
        <CustomCursor />
    </div>
    );

}


export default NotesApp;