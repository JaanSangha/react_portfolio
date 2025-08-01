import React from "react";
import Footer from "../common/Footer";
import SmallHeader from "../common/SmallHeader";
import CustomCursor from '../common/CustomCursor';
import CoachkLogo from "../img/coachklogo.png";

function CoachK() {

return (
    <div>
    <SmallHeader name="Coach K" />
        <div className="container text-center">
            <div className="col-lg-10 mx-auto">
                <img 
                  src={CoachkLogo} 
                  alt="Coach K Logo" 
                  style={{ 
                    display: 'block', 
                    margin: '0 auto 2rem auto', 
                    width: '20vw',
                    maxWidth: '400px',
                    minWidth: '150px',
                    height: 'auto' 
                  }}
                />
            </div>
        </div>

        <div className="container text-left">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <h3>Introduction</h3>
                    <p className="lead mb-5">Coach K is a full-stack web application designed to revolutionize personal fitness coaching. By combining seamless Strava integration with the analytical power of OpenAI, the app delivers tailored training recommendations and interactive coaching, all in real time. Whether you're a recreational runner or a competitive athlete, Coach K offers smart insights into your performance and progress while adapting to your goals and workout history. The platform was built with a strong focus on personalization, security, and scalability, ensuring that each user's journey is both unique and protected. You can check out the app <a href="https://coachk-chi.vercel.app" target="_blank" rel="noopener noreferrer" data-custom-cursor>here</a>.</p>
                    
                    <h3>Building with Modern Web Technologies</h3>
                    <p className="lead mb-5">The frontend of Coach K is built using Next.js 14 with the App Router architecture, enabling server components and modern React patterns for a high-performance, scalable user interface. TypeScript is used throughout the codebase for type safety and developer efficiency, while Tailwind CSS ensures a responsive and accessible design system. For authentication, Supabase Auth is used to implement passwordless login via magic links, creating a smooth onboarding experience without the need for traditional credentials.</p>
                    <p className="lead mb-5">On the backend, Supabase serves as the database and real-time engine, leveraging PostgreSQL and Row Level Security (RLS) to enforce strict access control at the row level. All business logic and external API integrations are handled server-side via Next.js API routes, keeping sensitive operations secure and efficient. Deployment is handled through Vercel, which enables automatic CI/CD, edge caching, and performance monitoring with built-in analytics.</p>
                    
                    <h3>Intelligent Fitness with AI Coaching</h3>
                    <p className="lead mb-5">At the heart of Coach K is its AI-powered coaching system, built using OpenAI's API. After syncing workouts from Strava, the app analyzes user data to generate context-aware training recommendations tailored to recent performance and user-defined goals. This isn't a static training plan, it evolves with the user. The AI is capable of understanding trends such as overtraining, plateaus, or gaps in recovery, and adjusts advice accordingly. Users can interact directly with their AI coach via a persistent chat interface, which retains conversational history and provides real-time feedback based on past discussions and performance metrics.</p>
                    
                    <h3>Seamless Strava Integration</h3>
                    <p className="lead mb-5">Users can securely connect their Strava accounts through OAuth2, allowing the app to import fitness data in real time. Once linked, Coach K automatically synchronizes activities including runs, rides, and other workouts. Athlete profile data such as weight, city, and performance stats are also pulled in to enrich the user profile. The connection remains persistent, requiring no reauthorization unless explicitly revoked by the user. Background jobs refresh the activity data every 24 hours, ensuring that users always have the latest metrics available when reviewing progress or receiving coaching advice.</p>
                    
                    <h3>Visualizing Progress and Tracking Performance</h3>
                    <p className="lead mb-5">A major goal of the app is to help users understand their fitness trajectory. Coach K includes a dynamic activity dashboard where users can view recent workouts, weekly mileage, elevation gain, and training intensity. Interactive charts provide a clear visual overview of trends and progress over time. The app highlights recovery periods, personal milestones, and potential risks like overexertion or undertraining. Users can also set specific fitness goals, such as increasing weekly distance or preparing for a race, and monitor their progress with visual goal tracking tools.</p>
                    
                    <h3>Designed for Experience and Accessibility</h3>
                    <p className="lead mb-5">Coach K delivers a smooth, professional user experience across devices. A persistent layout ensures that the sidebar and top navigation remain in place during transitions, creating a fast and intuitive interface. The application supports dark mode by default and uses smooth loading animations and skeleton components to improve perceived performance. Attention has also been given to accessibility, with semantic HTML, proper ARIA labels, and full keyboard navigation support, making the app usable by a broader audience.</p>
                    
                    <h3>Secure by Design</h3>
                    <p className="lead mb-5">From the start, data privacy and security were treated as top priorities. Row Level Security in Supabase ensures that each user can access only their own data, enforced at the database level. All API keys and tokens are stored securely and never exposed to the client, and server-side logic handles all authentication refreshes and external API requests. Combined with Supabase's real-time capabilities and Postgres indexing, the system remains both secure and performant at scale.</p>
                    
                    <h3>Scalable, Maintainable, and Production-Ready</h3>
                    <p className="lead mb-5">Coach K is structured as a monorepo, supporting future expansion into mobile platforms while sharing core logic and types between web and mobile codebases. The development process follows modern best practices, including Git-based version control, environment-specific configuration, and database migrations through the Supabase CLI. Error boundaries, fallback states, and comprehensive logging ensure that users encounter minimal friction and that developers can quickly respond to issues. Performance monitoring through Vercel Analytics allows for continuous improvement as the platform grows.</p>
                </div>
            </div>
        </div>

        <Footer />
        <CustomCursor />
    </div>
    );

}


export default CoachK;