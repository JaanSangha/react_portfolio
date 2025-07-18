import React from "react";
import Footer from "../common/Footer";
import SmallHeader from "../common/SmallHeader";
import CustomCursor from '../common/CustomCursor';

function Petstagram() {

return (
    <div>
    <SmallHeader name="Petsgram" />
        <div className="container text-center">
            <div className="col-lg-10 mx-auto">
                <h1>Petsgram</h1>
                <iframe className="basicpadding" title="Ar Demo Video" width= "80%" height="400"
				    src="https://www.youtube.com/embed/scTLfKa0E7g?si=UpidgwJ9yDsnK2Se">
				</iframe>
            </div>
        </div>

        

        <div className="container text-left">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <h3>Introduction</h3>
                    <p className="lead mb-5">Using Javascript, Node and HTML/CSS I created a React.js app that is basically social media for pets! The app uses MongoDB to store all the users and posts so they can be saved and retrieved when needed. The backend uses express.js, node.js and jsonwebtoken and is hosted on Heroku and can be interacted with by the front end which is hosted on Netlify. The app can be checked out <a href="https://gleaming-blancmange-1967b0.netlify.app" data-custom-cursor>here</a>. </p>
                    <h3>Logging In</h3>
                    <p className="lead mb-5">User information is saved in MongoDB Atlas and is hosted on a server. The login screen uses a form and checks the input of the email and password with thr database to see if it is a match. If it is the user is granted an authentication token and can access the rest of the website. If it is not recognized the user must sign up and input all the necessary fields then it will be pushed to the database and they can log in.</p>
                    <h3>Posts</h3>
                    <p className="lead mb-5">Similar to how users are stored, the posts are stored in their own collection in the database and they are linked to the account that posted them. When the user loads into the home screen, all the posts are loaded from the database and displayed in a feed. The user can like, comment, and add friends to interact with other users.</p>
                    <h3>Friends</h3>
                    <p className="lead mb-5">Friends are stored inside the user collection in the database and can be easily added and removed. When one user adds the friend then both users gain the other as a friend in the database. This makes it easy to keep track of your friends and interact with them in the app.</p>   
                </div>
            </div>
        </div>

        <Footer />
        <CustomCursor />
    </div>
    );

}


export default Petstagram;