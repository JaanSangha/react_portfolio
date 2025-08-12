import React from "react";
import Footer from "../common/Footer";
import SmallHeader from "../common/SmallHeader";
import CustomCursor from '../common/CustomCursor';

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
                    <h3>Bot 1: Picture of the Day Bot - AI-Powered Nature Photography</h3>
                    <p className="lead mb-4">A fully automated Twitter bot that curates and posts stunning nature photography with AI-generated captions. Built with modern technologies and deployed on GitHub Actions for zero hosting costs. Check out the bot in action: <a href="https://x.com/naturepictos" target="_blank" rel="noopener noreferrer" data-custom-cursor>@naturepictos</a></p>
                    
                    <h4>Key Features</h4>
                    <ul className="larger-text mb-4">
                        <li><strong>Automated Image Selection:</strong> Curates high-quality nature photos from Unsplash</li>
                        <li><strong>AI-Generated Captions:</strong> Uses OpenAI's GPT-4 Vision to create engaging, contextual descriptions</li>
                        <li><strong>Twitter Integration:</strong> Automatically posts to Twitter with media and captions</li>
                        <li><strong>Scheduled Automation:</strong> Runs every 6 hours via GitHub Actions cron jobs</li>
                        <li><strong>Secure Architecture:</strong> All API keys stored securely in GitHub Secrets</li>
                    </ul>
                    
                    <h4>Technical Stack</h4>
                    <ul className="larger-text mb-4">
                        <li><strong>Backend:</strong> Node.js with ES6 modules</li>
                        <li><strong>APIs:</strong> Twitter API v2, OpenAI GPT-4 Vision, Unsplash API</li>
                        <li><strong>Deployment:</strong> GitHub Actions with automated scheduling</li>
                        <li><strong>Security:</strong> Environment variables and GitHub Secrets</li>
                        <li><strong>Cost:</strong> Completely free hosting via GitHub Actions</li>
                    </ul>
                    
                    <h4>How It Works</h4>
                    <ul className="larger-text mb-4">
                        <li><strong>Image Curation:</strong> Bot selects random nature photos from Unsplash</li>
                        <li><strong>AI Analysis:</strong> GPT-4 Vision analyzes the image and generates engaging captions</li>
                        <li><strong>Content Creation:</strong> Combines image with AI-generated text</li>
                        <li><strong>Automated Posting:</strong> Schedules and posts to Twitter every 6 hours</li>
                        <li><strong>Error Handling:</strong> Includes fallback captions and retry logic</li>
                    </ul>
                    
                    <h4>Results & Impact</h4>
                    <ul className="larger-text mb-4">
                        <li><strong>Consistent Content:</strong> 4 high-quality posts per day</li>
                        <li><strong>Engagement:</strong> AI-generated captions increase interaction</li>
                        <li><strong>Reliability:</strong> 99.9% uptime with automated error handling</li>
                        <li><strong>Scalability:</strong> Can easily adjust posting frequency</li>
                    </ul>
                    
                    <h3>Bot 2: Human Mimic Bot - AI-Powered Personality Tweeting</h3>
                    <p className="lead mb-4">A sophisticated Twitter bot that mimics human behavior by generating contextual, personality-driven tweets using OpenAI prompts and cron job scheduling. This bot creates the illusion of a real person sharing thoughts, opinions, and engaging content. Follow the bot: <a href="https://x.com/Marvinsro0om" target="_blank" rel="noopener noreferrer" data-custom-cursor>@Marvinsro0om</a></p>
                    
                    <h4>Key Features</h4>
                    <ul className="larger-text mb-4">
                        <li><strong>Personality Simulation:</strong> Maintains consistent character traits and voice</li>
                        <li><strong>Contextual Content:</strong> Generates tweets based on current events, trends, and time of day</li>
                        <li><strong>Smart Scheduling:</strong> Uses cron jobs to post at optimal engagement times</li>
                        <li><strong>OpenAI Integration:</strong> Leverages GPT models for natural, human-like text generation</li>
                        <li><strong>Content Variety:</strong> Mixes different tweet types (opinions, questions, observations)</li>
                    </ul>
                    
                    <h4>Technical Implementation</h4>
                    <ul className="larger-text mb-4">
                        <li><strong>Cron Jobs:</strong> Scheduled posting at strategic intervals (morning, afternoon, evening)</li>
                        <li><strong>OpenAI Prompts:</strong> Carefully crafted prompts that maintain personality consistency</li>
                        <li><strong>Context Awareness:</strong> Considers time, day, and trending topics for relevant content</li>
                        <li><strong>Engagement Optimization:</strong> Posts during peak Twitter usage hours</li>
                        <li><strong>Content Filtering:</strong> Ensures generated content meets Twitter's guidelines</li>
                    </ul>
                    
                    <h4>Personality Traits</h4>
                    <ul className="larger-text mb-4">
                        <li><strong>Voice Consistency:</strong> Maintains the same tone, humor, and interests</li>
                        <li><strong>Topic Expertise:</strong> Focuses on specific areas of knowledge and interest</li>
                        <li><strong>Interaction Style:</strong> Responds to mentions and engages with followers naturally</li>
                        <li><strong>Emotional Range:</strong> Varies between informative, humorous, and thoughtful content</li>
                    </ul>
                    
                    <h3>Technical Implementation</h3>
                    <p className="lead mb-5">Both bots are built using Node.js and the Twitter API. I created Twitter applications and entered verification keys to connect the accounts to the code. The bots connect to Unsplash API for random nature pictures and OpenAI for AI-generated content. All API keys are stored securely in environment variables and GitHub Secrets.</p>
                    
                    <h3>Deployment & Scheduling</h3>
                    <p className="lead mb-5">The projects are deployed on GitHub Actions for zero hosting costs. The Picture of the Day Bot runs every 6 hours via GitHub Actions cron jobs, while the Human Mimic Bot uses strategic scheduling to post at optimal engagement times. I implemented a mini database using JSON to store tweeted images and avoid duplicates. The system includes fallback captions and retry logic for reliability.</p>
                    
                    <h3>Future Enhancements</h3>
                    <ul className="larger-text mb-4">
                        <li><strong>Multi-platform Support:</strong> Extend to Instagram, LinkedIn</li>
                        <li><strong>Content Analytics:</strong> Track engagement and optimize captions</li>
                        <li><strong>User Customization:</strong> Allow followers to request specific content types</li>
                        <li><strong>Advanced AI:</strong> Implement sentiment analysis and trending topics</li>
                        <li><strong>Interactive Features:</strong> Respond to mentions and engage with followers</li>
                    </ul>
                </div>
            </div>
        </div>

        <Footer />
        <CustomCursor />
    </div>
    );

}

export default TwitterAPIBots;