import React from "react";
import Footer from "../common/Footer";
import SmallHeader from "../common/SmallHeader";
import CustomCursor from '../common/CustomCursor';
import PetsgramLogo from "../img/petsgramlogo.png";

function Petstagram() {

return (
    <div>
    <SmallHeader name="Petsgram" />
        <div className="container text-center">
            <div className="col-lg-10 mx-auto">
                <img 
                  src={PetsgramLogo} 
                  alt="Petsgram Logo" 
                  style={{ 
                    display: 'block', 
                    margin: '0 auto 2rem auto', 
                    width: '13.3vw',
                    maxWidth: '267px',
                    minWidth: '100px',
                    height: 'auto' 
                  }}
                />
                <h1>Petsgram - Social Media for Pets</h1>
                <iframe className="basicpadding" title="Petsgram Demo Video" width= "80%" height="400"
				    src="https://www.youtube.com/embed/scTLfKa0E7g?si=UpidgwJ9yDsnK2Se">
				</iframe>
            </div>
        </div>

        <div className="container text-left">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <h3>Introduction</h3>
                    <p className="lead mb-5">Petsgram is a modern, full-stack social media platform designed specifically for pets and their owners. Built with cutting-edge technologies, this application provides a seamless experience across web and mobile platforms, allowing users to share their pets' moments, connect with other pet owners, and build a vibrant community. You can check out the app <a href="https://petsgram.ca" target="_blank" rel="noopener noreferrer" data-custom-cursor>here</a>.</p>
                    
                    <h3>Technology Stack</h3>
                    <h4>Frontend</h4>
                    <p className="lead mb-5">The frontend is built with React 19 and TypeScript for type-safe development, Next.js 15 with App Router for server-side rendering and optimal performance, and Tailwind CSS for responsive, utility-first styling. For mobile development, we use React Native with Expo for cross-platform capabilities, all organized in a Turbo monorepo architecture for efficient code sharing and development.</p>
                    
                    <h4>Backend & Database</h4>
                    <p className="lead mb-5">Supabase serves as our comprehensive backend solution, providing authentication, real-time database functionality, and file storage. We use PostgreSQL as our primary database with real-time subscriptions, implementing Row Level Security (RLS) for robust data protection. Supabase Storage handles all image and media file management efficiently.</p>
                    
                    <h4>Development Tools</h4>
                    <p className="lead mb-5">Our development environment is enhanced with TypeScript for improved developer experience and type safety, ESLint and Prettier for maintaining code quality and consistent formatting, pnpm for fast and efficient package management, and Turbopack for lightning-fast development builds.</p>
                    
                    <h3>Key Features</h3>
                    <h4>Authentication & User Management</h4>
                    <p className="lead mb-5">Petsgram integrates Supabase Auth with magic link authentication, featuring a profile setup wizard designed specifically for new users with pet-centric fields. The platform provides real-time session management across devices and ensures secure user data through comprehensive Row Level Security policies.</p>
                    
                    <h4>Cross-Platform Experience</h4>
                    <p className="lead mb-5">The application delivers a consistent experience across all platforms. The web application features responsive design with dark/light mode support, while the mobile application provides a native iOS/Android experience through React Native and Expo. The platform also includes Progressive Web App (PWA) capabilities for enhanced accessibility.</p>
                    
                    <h4>Advanced Image Handling</h4>
                    <p className="lead mb-5">Our image system supports multiple formats including JPEG, PNG, WebP, and HEIC images, with smart image conversion that automatically optimizes formats for web compatibility. Users can enjoy drag-and-drop uploads with visual feedback, image cropping with aspect ratio controls, and seamless platform-specific HEIC handling with web conversion instructions.</p>
                    
                    <h4>Pet-Centric Social Features</h4>
                    <p className="lead mb-5">The platform offers comprehensive pet profiles with customizable pet names, photos, and bios. Users can create text and image posts with built-in content moderation, access real-time feeds with both public and following-only options, and utilize a sophisticated follow system with instant UI updates. The platform includes interactive elements like likes, comments, and bookmarks, along with intelligent user suggestions for "Who to Follow" recommendations.</p>
                    
                    <h4>Content Moderation & Safety</h4>
                    <p className="lead mb-5">Petsgram implements robust content moderation with NSFW detection for automated inappropriate content filtering, spam prevention through pattern recognition and repetition detection, user-friendly error handling with clear guidance for content issues, and built-in community guidelines with content appropriateness checks.</p>
                    
                    <h4>Performance & User Experience</h4>
                    <p className="lead mb-5">The platform prioritizes performance with optimistic UI updates that provide instant feedback for user actions, real-time notifications for live social interaction updates, responsive design that ensures seamless experience across all device sizes, comprehensive accessibility features including screen reader support and keyboard navigation, and dark mode support with automatic theme detection and manual toggle options.</p>
                    
                    <h4>Advanced Features</h4>
                    <p className="lead mb-5">Petsgram includes a sophisticated bookmark system for saving favorite posts, comprehensive profile customization with banner images, bio, and location settings, powerful search functionality for finding users and content quickly, detailed settings management for user preferences and account controls, and real-time data synchronization that provides instant updates across all connected devices.</p>
                    
                    <h3>Architecture Highlights</h3>
                    <h4>Monorepo Structure</h4>
                    <p className="lead mb-5">The project utilizes a monorepo structure that enables shared components and utilities across web and mobile platforms, type-safe APIs with TypeScript interfaces, consistent styling through shared design tokens, and efficient development with Turborepo caching capabilities.</p>
                    
                    <h4>Database Design</h4>
                    <p className="lead mb-5">Our database architecture features a normalized schema optimized for performance, real-time subscriptions for live updates, efficient queries with proper indexing, and a scalable architecture designed for future growth and expansion.</p>
                    
                    <h4>Security Implementation</h4>
                    <p className="lead mb-5">Security is paramount with JWT-based authentication via Supabase, comprehensive Row Level Security policies for data protection, thorough input validation and sanitization, and secure file uploads with robust type checking throughout the system.</p>
                    
                    <h3>Development Experience</h3>
                    <h4>Modern Development Workflow</h4>
                    <p className="lead mb-5">The development experience is enhanced with hot reloading for instant feedback during development, comprehensive type checking across the entire codebase, linting and formatting for consistent code quality, and comprehensive error handling with user-friendly messages that guide users through any issues.</p>
                    
                    <h4>Deployment & Hosting</h4>
                    <p className="lead mb-5">The platform is deployed using Vercel for web application hosting, Expo for mobile app distribution, Supabase for backend services, and CDN integration for global content delivery, ensuring optimal performance and accessibility worldwide.</p>
                    
                    <h3>Technical Achievements</h3>
                    <p className="lead mb-5">This project demonstrates proficiency in modern full-stack development, cross-platform mobile development, real-time applications, and user experience design. The combination of cutting-edge technologies and thoughtful architecture makes Petsgram a showcase of contemporary web and mobile development best practices. Key achievements include cross-platform compatibility with shared codebase, real-time functionality without WebSocket complexity, advanced image processing with platform-specific optimizations, scalable architecture ready for production deployment, modern React patterns with hooks, context, and suspense, and performance optimization with code splitting and lazy loading.</p>
                </div>
            </div>
        </div>
        <Footer />
        <CustomCursor />
    </div>
    );
}

export default Petstagram;