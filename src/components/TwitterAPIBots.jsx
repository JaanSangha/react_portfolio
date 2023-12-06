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
                    <p class="lead mb-5">Using Node.js and the Twitter API I was able to set up two automated accounts. <a href="https://twitter.com/DogFactos">Doge Facts</a> tweets a random fact daily about dogs that is taken from a different API and stored in a local database JSON file and is checked with previous ones to ensure the tweet is not a duplicate. <a href="https://twitter.com/Marvinsro0om">Marvin</a> is connected to openAIs API to utilize chatGPT and tweets an ai generated tweet based on given prompts every hour.</p>
                    <h3>API Authentication</h3>
                    <p class="lead mb-5">In order to connect the Twitter account to the code I needed to create a Twitter application and enter all the verification keys into my code. I then connected to the API using my codes and was able to tweet directly from my account every time the code is run. I then connected to a dog facts API that tweets out the random fact that I retrieve from it. The ai tweets needed to be authenticated with acess keys as well, similar to twitter. Once the keys were set up, my openAI account can generate a tweet given any prompt and it is directly posted onto the Twitter account.</p>
                    <h3>Scheduling the Posts</h3>
                    <p class="lead mb-5">I uploaded the projects to Github and then connected the repos with Heroku. This made it so any time I push a new update of the code to Github, Heroku will redeploy my app and the next automated tweet will be updated with my newest code. I have set the job of running my script every hour for my AI Twitter bot because it has endless possibilities of unique tweets. The API for the dog facts account has around 100 facts so I dropped that down to tweet an interesting fact once a day so it would not finish all the facts within the week. I also made a mini database using JSON to store the facts that were tweeted already to avoid duplicate tweets. After receiving the fact from the API the database is checked and if it is a unique fact it is posted but if not a new fact is requested from the API.  </p>
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