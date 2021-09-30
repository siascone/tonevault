import React from 'react';

class Logout extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        return (
            <div className='splash-main'>
                <div className='splash-carousel'>
                    <h1>You've signed out, so what's next?</h1>
                    <br />
                    <p>
                        My name is Spencer and I thank you for checking out ToneVault.
                        While I still have you, please take a moment to take a look
                        at what i've been up to and if you'd like to connect I'd be happy to chat!
                    </p>
                    <br />
                    <button className='splash-upload'>Reach out today</button>
                </div>

                {/* <div className='splash-search-upload'>
                    <form className='splash-search'>
                        <label htmlFor="splash-search"></label>
                        <input
                            id='splash-search'
                            type="text"
                            placeholder='Search for artists, bands, tracks, podcasts'
                        />
                        <button className='search-icon-button'></button>
                    </form>
                    <p>or</p>
                    <button className='splash-upload'>Upload your own</button>
                </div> */}

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
                                <p>A Morse Code Educational App</p>
                            </div>
                        </div>
                    </div>
                    <button className='explore'>Explore my projects</button>
                </div>

                <div className='splash-creators-cta'>
                    <h1>Calling all recruiters</h1>
                    <p>
                        I am a programer consumed by nature and music. I have a 
                        background in contemporary composition and a passion for
                        the environment. Let's work together!
                    </p>
                    <button className='creators-cta-button'>Schedule an interview</button>
                </div>

                <div className='splash-thankyou'>
                    <h1>Thanks for reading. Now let's connect!</h1>
                    <h2>Review my skills, reach out on LinkedIn and checkout my resume.</h2>
                    <button className='signup-button'>Download Resume</button>
                    <div className='splash-signup'>
                        <p>Already have have my resume?</p>
                        <button className='splash-login-button'>Email me</button>
                    </div>
                </div>

                {/* <div className='spalsh-footer'>
                    Footer stuff here
                </div> */}
            </div>
        )

        // return (
        //     <div className='logout-main'>
        //         <div className='logout-message'>
        //             <h1>You've signed out. Check out these cool details!</h1>
        //         </div>

        //         <div className='logout-bio'>
        //             <h2>ToneVault has been brought to you by Spencer Iascone</h2>
        //             <div className='bio-and-image'>
        //                 <div className='bio'>
        //                     <div className='bio-paragraphs'>
        //                         <p>Spencer is a programer consumed by nature and music. 
        //                         He has a background in contemporary composition and a 
        //                         passion for the environment.
        //                         </p>
        //                         <br />

        //                         <p>
        //                         Whether making music, crafting renewable projects or 
        //                         repurposing electronics, Spencer has a creative solutions 
        //                         side that he enjoys exploring and he is
        //                         excited to do that with software engineering. He loves 
        //                         learning new technologies and the logic and creative 
        //                         challenges that come along with those technologies.
        //                         </p>
        //                         <br />

        //                         <p>
        //                         When working on any new project the user's experience 
        //                         is always of the utmost importance and he always strives 
        //                         to develop an interface that is appealing and intuitive for all.
        //                         </p>
        //                         <br />

        //                         <p>
        //                         As a full stack software engineer, he has enjoyed using 
        //                         Ruby, JavaScript, React/Redux, Rails, PostgreSQL, CSS, 
        //                         HTML, MongoDB, Express, and Node.js. Currently he is 
        //                         learning C++. He is always finding time to learn more.
        //                         </p>

        //                     </div>
        //                 </div>
                        
        //                 <div className='bio-pic'>
        //                     <div className='pic'>
        //                         <h2>Cool Bio Pic</h2>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className='logout-projects'>
        //             <h2>Here are some other projects that Spencer has been involved with:</h2>
        //             <div className='projects'>
        //                 <div>
        //                     Project 1
        //                 </div>
        //                 <div>
        //                     Project 2
        //                 </div>
        //                 <div>
        //                     Project 3
        //                 </div>
        //             </div>
        //         </div>

        //         {/* <div className='logout-social'>
        //             <h2>To learn more or get in touch:</h2>
        //             <div className='social-media'>
        //                 <div>
        //                     LinkedIn
        //                 </div>
        //                 <div>
        //                     GitHub
        //                 </div>
        //                 <div>
        //                     Portfolio
        //                 </div>
        //             </div>
        //         </div> */}
        //     </div>
        // );
    };
};

export default Logout;