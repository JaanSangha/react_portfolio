import React from "react";
import Footer from "./Footer";
import SmallHeader from "./SmallHeader";
import CustomCursor from './CustomCursor';

function TwitterAPIBots() {

return (
    <div>
    <SmallHeader name="Twitter API Bots" />
        <div className="container text-center">
            <div className="col-lg-10 mx-auto">
                <h1>Twitter API Bots</h1>
                <iframe className="basicpadding" title="Ar Demo Video" width= "80%" height="400"
				    src="https://www.youtube.com/embed/E8Q2xREdCjE?si=Ldbov4hxFBHAlVhc">
				</iframe>
            </div>
        </div>

        

        <div className="container text-left">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <h3>Introduction</h3>
                    <p className="lead mb-5">Using Node.js and the Twitter API I was able to set up two automated accounts. <a href="https://twitter.com/naturepictos" data-custom-cursor>Nature Pics</a> tweets a random nature picture every 4 hours. <a href="https://twitter.com/ai_pictos" data-custom-cursor>AI Pics</a> tweets a random AI generated image every hour. Both of these are fully automated and run on a schedule.</p>
                    <h3>API Authentication</h3>
                    <p className="lead mb-5">In order to connect the Twitter account to the code I needed to create a Twitter application and enter all the verification keys into my code. I then connected to the API using my codes and was able to tweet directly from my account every time the code is run. I then connected to Unsplash API that tweets out the random picture that I retrieve from it. The ai tweets needed to be authenticated with access keys as well, similar to twitter. Once the keys were set up, my openAI account can generate a tweet given any prompt and it is directly posted onto the Twitter account.</p>
                    <h3>Scheduling the Posts</h3>
                    <p className="lead mb-5">I uploaded the projects to Github and then connected one of the repos with Heroku. This made it so any time I push a new update of the code to Github, Heroku will redeploy my app and the next automated tweet will be updated with my newest code. I have set the job of running my script every hour for my AI Twitter bot because it has endless possibilities of unique tweets. The other program is being run on my headless Raspberry Pi and is scheduled using a cron job to post every 4 hours. I also made a mini database using JSON to store the images that were tweeted already to avoid duplicate tweets. After receiving the image from the API the database is checked and if it is a unique image it is posted but if not a new image is requested from the API.  </p>
                    <h3>AI Persona</h3>
                    <p className="lead mb-5">In order to fully commit to the AI account I figured I needed to create an artificial person to put a face behind the tweets. I took to <a href="https://generated.photos/" data-custom-cursor>Generated Photos</a> to generate a human based on a bunch of parameters and managed to generate one that I thought fit the part. </p>   
                </div>
            </div>
        </div>

        <Footer />
        <CustomCursor />
    </div>
    );

}


export default TwitterAPIBots;