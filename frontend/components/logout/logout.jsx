import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Logout extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        return (
            <div className='splash-main'>
                <div className='logout-carousel'>
                    <h1>You've signed out, so what's next?</h1>
                    <br />
                    <p>
                        Well, my name is Spencer and I want to thank you for checking out ToneVault.
                        While I still have you, please take a moment to look
                        at what I've been up to and if you'd like to connect I'd be happy to chat!
                    </p>
                    <br />
                    <a href="mailto:spencer.iascone@gmail.com?subject=Let's talk about a job!" className='splash-upload email'>Reach out today</a>
                </div>

                <div className='splash-spotlight'>
                    <h2>Here's some of what I've been working on</h2>
                    <div className='trending-songs'>
                        <div className='trend-set1'>
                            <div className='trending-song'>
                                <h3>ToneVault</h3>
                                <p>A SoundCloud Clone</p>
                            </div>
                            <div className='trending-song'>
                                <h3>Makeables</h3>
                                <p>An Instructables Clone</p>
                            </div>
                            <div className='trending-song'>
                                <h3>GrooveMachine</h3>
                                <p>A Realtime Step Sequencer</p>
                            </div>
                            <div className='trending-song'>
                                <h3>ThoughtBoard</h3>
                                <p>A Visual Organization Tool</p>
                            </div>
                            <div className='trending-song'>
                                <h3>LearnMorseCode</h3>
                                <p>A Morse Code Trainer</p>
                            </div>
                        </div>
                    </div>
                    <a href='https://github.com/siascone' className='explore github-anchor'>Explore my projects</a>
                </div>

                <div className='logout-creators-cta'>
                    <h1>Calling all recruiters</h1>
                    <p>
                        I am a programer consumed by nature and music. I have a 
                        background in contemporary composition and a passion for
                        the environment. Let's work together!
                    </p>
                    <a href='https://calendly.com/spencer-iascone/30min' className='creators-cta-button calendly'>Schedule an Interview</a>
                </div>

                <div className='splash-thankyou'>
                    <h1>Thanks for reading. Now let's connect!</h1>
                    <h2>Review my skills, reach out on <a href="https://www.linkedin.com/in/spencer-iascone-56b28b62/" className='linkedin'>LinkedIn</a> and checkout my resume.</h2>
                    <a href='http://spenceriascone.com/assets/spencer_iascone_resume.pdf'  className='signup-button resume'>Download Resume</a>
                    <div className='splash-signup'>
                        <p>Already have have my resume?</p>
                        <a href="mailto:spencer.iascone@gmail.com?subject=Let's talk about a job!" className='splash-login-button email'>Email me</a>
                    </div>
                </div>
            </div>
        )
    };
};

export default withRouter(Logout);