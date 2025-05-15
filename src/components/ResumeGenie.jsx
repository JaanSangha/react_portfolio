import React from "react";
import Footer from "./Footer";
import SmallHeader from "./SmallHeader";
import CustomCursor from './CustomCursor';

function ResumeGenie() {

return (
    <div>
    <SmallHeader name="Resume Genie" />
        <div class="container text-center">
            <div class="col-lg-10 mx-auto">
                <h1>Resume Genie</h1>
            </div>
        </div>

        <div class="container text-left">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <h3>Introduction</h3>
                    <p class="lead mb-3">Resume Genie is a full-stack web application I designed and built to help job seekers instantly assess and improve their resumes based on the specific job postings they’re applying to. By combining document processing, AI analysis, cloud storage, and a clean frontend interface, users receive personalized, actionable feedback on their resumes in just a few seconds.You can test it out <a href="https://resumegeniemac.netlify.app/" data-custom-cursor>here.</a></p>
                    <h3>Project Overview</h3>
                    <h4>Problem:</h4>
                    <p class="lead mb-3">Job seekers often struggle to tailor their resumes effectively to each job posting, missing critical opportunities to align their qualifications with employer expectations.</p>
                    <h4>Solution:</h4>
                    <p class="lead mb-3">Resume Genie allows users to upload their resume and paste a job posting, then receive AI-generated, point-form feedback highlighting strengths, gaps, and improvement suggestions, tailored to that job description.</p>
                    <h3>Key Features</h3>
                    <ul>
                        <li class="lead">PDF Resume Upload: Users can securely upload their resume in PDF format.</li>
                        <li class="lead">AI-Powered Analysis: Integrates OpenAI’s GPT-4o model to compare the resume content against the job posting and generate structured, human-readable feedback.</li>
                        <li class="lead">Supabase Storage Integration: Resumes are uploaded to a Supabase Storage bucket, with URLs generated for access.</li>
                        <li class="lead">Persistent Database Storage: Analysis results and resume URLs are saved to a PostgreSQL database hosted on Supabase.</li>
                        <li class="lead">React Frontend: Clean, centered UI built with React and deployed on Netlify for a seamless user experience.</li>
                        <li class="lead">Flask API Backend: RESTful backend built with Flask, handling file uploads, AI API requests, and database operations, deployed on Heroku.</li>
                        <li class="lead">CORS-Enabled Communication: Secure, cross-origin communication between frontend and backend.</li>
                    </ul>
                    <h3>Technical Highlights</h3>
                    <p class="lead">Languages & Tools: Python, JavaScript (React), HTML/CSS, Flask, OpenAI API, Supabase, PostgreSQL, Heroku, Netlify, PyMuPDF.</p>
                    <ul>
                        <li class="lead">Facade: In the backend upload_resume() function, coordinating file extraction, AI analysis, storage upload, and database entry in one simplified interface.</li>
                        <li class="lead">Singleton: Single instantiated clients for Supabase and OpenAI connections to manage resources efficiently.</li>
                        <li class="lead">Adapter: Using PyMuPDF to standardize PDF text extraction into plain text for AI processing.</li>
                    </ul>
                    <h3>Development Workflow</h3>
                    <ul>
                        <li class="lead">Set up the Flask backend to handle file uploads, AI requests, and database interactions.</li>
                        <li class="lead">Integrated Supabase Storage to securely store uploaded PDF resumes and generate public URLs for access.</li>
                        <li class="lead">Configured a PostgreSQL database on Supabase to store resume URLs, job postings, and AI-generated feedback records.</li>
                        <li class="lead">Built the AI integration using OpenAI’s GPT-4o API to analyze and compare resumes against job descriptions.</li>
                        <li class="lead">Developed a React frontend to allow users to upload resumes, enter job details, and receive AI feedback.</li>
                        <li class="lead">Styled the frontend for a clean, centered, and responsive user interface.</li>
                        <li class="lead">Implemented CORS configuration to enable secure communication between the frontend and backend services.</li>
                        <li class="lead">Deployed the Flask backend to Heroku and the React frontend to Netlify for full cloud-based deployment.</li>
                    </ul>
                    <h3>Learning Outcomes</h3>
                    <ul>
                        <li class="lead">Deepened understanding of building scalable, cloud-deployed full-stack apps.</li>
                        <li class="lead">Gained practical experience integrating AI APIs with web services.</li>
                        <li class="lead">Hands-on experience implementing design patterns in backend service architectures.</li>
                        <li class="lead">Strengthened deployment workflows using Netlify, Heroku, and cloud database/storage solutions.</li>
                    </ul>
                </div>
            </div>
        </div>

        <Footer />
        <CustomCursor />
    </div>
    );

}


export default ResumeGenie;