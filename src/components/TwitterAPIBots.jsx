import React from "react";
import Footer from "./Footer";
import SmallHeader from "./SmallHeader";

function TwitterAPIBots() {

return (
    <div>
    <SmallHeader name="Twitter API Bots" />
        <div class="container text-center">
            <div class="col-lg-10 mx-auto">
                <h1>Twitter API Bots</h1>
                <iframe className="basicpadding" title="Ar Demo Video" width= "80%" height="400"
				    src="https://www.youtube.com/embed/E8Q2xREdCjE?si=Ldbov4hxFBHAlVhc">
				</iframe>
            </div>
        </div>

        

        <div class="container text-left">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <h3>Introduction</h3>
                    <p class="lead mb-5">Using Node.js and the Twitter API I was able to set up two automated accounts. <a href="https://twitter.com/naturepictos">Nature Pics</a> tweets a random nature picture that is taken from the Unsplash API and then sent to the Microsoft Azure Computer Vision REST API which generates an AI caption for the image. I then connect to the Twitter API and tweet out the image with the caption. <a href="https://twitter.com/Marvinsro0om">Marvin</a> is connected to openAIs API to utilize chatGPT and tweets an ai generated tweet based on given prompts every hour.</p>
                    <h3>API Authentication</h3>
                    <p class="lead mb-5">In order to connect the Twitter account to the code I needed to create a Twitter application and enter all the verification keys into my code. I then connected to the API using my codes and was able to tweet directly from my account every time the code is run. I then connected to Unsplash API that tweets out the random picture that I retrieve from it. The ai tweets needed to be authenticated with access keys as well, similar to twitter. Once the keys were set up, my openAI account can generate a tweet given any prompt and it is directly posted onto the Twitter account.</p>
                    <h3>Scheduling the Posts</h3>
                    <p class="lead mb-5">I uploaded the projects to Github and then connected one of the repos with Heroku. This made it so any time I push a new update of the code to Github, Heroku will redeploy my app and the next automated tweet will be updated with my newest code. I have set the job of running my script every hour for my AI Twitter bot because it has endless possibilities of unique tweets. The other program is being run on my headless Raspberry Pi and is scheduled using a cron job to post every 4 hours. I also made a mini database using JSON to store the images that were tweeted already to avoid duplicate tweets. After receiving the image from the API the database is checked and if it is a unique image it is posted but if not a new image is requested from the API.  </p>
                    <h3>AI Persona</h3>
                    <p class="lead mb-5">In order to fully commit to the AI account I figured I needed to create an artificial person to put a face behind the tweets. I took to <a href="https://generated.photos/">Generated Photos</a> to generate a human based on a bunch of parameters and managed to generate one that I thought fit the part. </p>   
                </div>
            </div>
        </div>

        <Footer />
    </div>
    );

}


export default TwitterAPIBots;