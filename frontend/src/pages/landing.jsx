import React from 'react';
import './Landing.css';

const Landing = () => {
    return (
        <div className="landing-container">
            {/* Navigation */}
            <nav className="landing-nav">
                <div className="nav-brand">
                    <svg className="nav-brand-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 7l-7 5 7 5V7z"></path>
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                    </svg>
                    BuddyCall
                </div>
                <div className="nav-links">
                    <a href="#features" className="nav-link">Features</a>
                    <a href="#how-it-works" className="nav-link">How it works</a>
                    <a href="#testimonials" className="nav-link">Testimonials</a>
                </div>
                <div className="nav-actions">
                    <button className="btn-secondary" style={{ marginRight: '1rem', border: 'none', background: 'transparent' }}>Log in</button>
                    <button className="btn-primary">Sign up free</button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="hero-section">
                <div className="hero-content">
                    <div className="hero-badge">
                        🚀 BuddyCall v2.0 is now live
                    </div>
                    <h1 className="hero-title">
                        Connect instantly with <br /> crystal clear video.
                    </h1>
                    <p className="hero-subtitle">
                        Experience high-quality video calling and messaging built for modern teams and friends. No downloads required, just share a link and start talking.
                    </p>
                    <div className="hero-cta">
                        <button className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>Start a meeting</button>
                        <button className="btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>View Pricing</button>
                    </div>
                </div>

                {/* Dashboard/App Mockup UI */}
                <div className="hero-mockup-wrapper">
                    <div className="hero-mockup">
                        <div className="mockup-inner">
                            <div className="mockup-header">
                                <div className="mockup-dot red"></div>
                                <div className="mockup-dot yellow"></div>
                                <div className="mockup-dot green"></div>
                            </div>
                            <div className="mockup-body">
                                <div className="mockup-sidebar">
                                    <div className="mockup-sidebar-item">
                                        <div className="mockup-sidebar-icon"></div>
                                        <div className="mockup-sidebar-text"></div>
                                    </div>
                                    <div className="mockup-sidebar-item active">
                                        <div className="mockup-sidebar-icon" style={{ background: '#c084fc' }}></div>
                                        <div className="mockup-sidebar-text" style={{ background: 'rgba(255,255,255,0.4)', width: '80%' }}></div>
                                    </div>
                                    <div className="mockup-sidebar-item">
                                        <div className="mockup-sidebar-icon"></div>
                                        <div className="mockup-sidebar-text" style={{ width: '40%' }}></div>
                                    </div>
                                </div>
                                <div className="mockup-main">
                                    <div className="mockup-video-grid">
                                        <div className="mockup-video-card active"></div>
                                        <div className="mockup-video-card"></div>
                                        <div className="mockup-video-card"></div>
                                        <div className="mockup-video-card"></div>
                                    </div>
                                </div>
                                <div className="mockup-chat">
                                    <div className="mockup-chat-bubble"></div>
                                    <div className="mockup-chat-bubble right"></div>
                                    <div className="mockup-chat-bubble"></div>
                                    <div className="mockup-chat-input"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Features Section */}
            <section id="features" className="features-section">
                <h2 className="section-title">Everything you need for perfect calls</h2>
                <p className="section-subtitle">
                    We built BuddyCall with performance and security in mind, giving you the best communication experience possible.
                </p>

                <div className="features-grid">
                    {/* Feature 1 */}
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M23 7l-7 5 7 5V7z"></path>
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                            </svg>
                        </div>
                        <h3 className="feature-title">HD Video Calls</h3>
                        <p className="feature-desc">Experience ultra low latency 1080p video calling. Our optimized engine ensures your calls remain stable even on poor connections.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                <line x1="12" y1="19" x2="12" y2="23"></line>
                                <line x1="8" y1="23" x2="16" y2="23"></line>
                            </svg>
                        </div>
                        <h3 className="feature-title">Crystal Clear Audio</h3>
                        <p className="feature-desc">AI-powered background noise suppression and echo cancellation means you'll always be heard loud and clear.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                        </div>
                        <h3 className="feature-title">End-to-End Encrypted</h3>
                        <p className="feature-desc">Your privacy is our priority. Every video call and direct message is secured with state-of-the-art end-to-end encryption.</p>
                    </div>

                    {/* Feature 4 */}
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                            </svg>
                        </div>
                        <h3 className="feature-title">Instant Messaging</h3>
                        <p className="feature-desc">Share files, links, and messages in real-time while you're on a call. Chats are persistent and always available.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-box">
                    <h2 className="cta-title">Ready to elevate your communication?</h2>
                    <p className="cta-desc">
                        Join thousands of teams and friends who use BuddyCall every day. Create your free account in seconds.
                    </p>
                    <div className="cta-buttons">
                        <button className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>Create Account</button>
                        <button className="btn-secondary" style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>Join Meeting</button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="landing-footer">
                <div className="footer-brand">
                    <svg className="nav-brand-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 7l-7 5 7 5V7z"></path>
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                    </svg>
                    BuddyCall
                </div>
                <div className="footer-text">
                    &copy; {new Date().getFullYear()} BuddyCall. All rights reserved.
                </div>
                <div className="footer-links">
                    <a href="#" className="footer-link">Privacy</a>
                    <a href="#" className="footer-link">Terms</a>
                    <a href="#" className="footer-link">Contact</a>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
