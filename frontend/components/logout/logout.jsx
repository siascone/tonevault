import React from 'react';

class Logout extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='logout-main'>
                <div className='logout-message'>
                    <h1>You've signed out. Check out these cool details!</h1>
                </div>

                <div className='logout-bio'>
                    <h2>ToneVault has been brought to you by Spencer Iascone</h2>
                    <div className='bio-and-image'>
                        <div className='bio'>
                            <div className='bio-paragraphs'>
                                <p>Spencer is a programer consumed by nature and music. 
                                He has a background in contemporary composition and a 
                                passion for the environment.
                                </p>
                                <br />

                                <p>
                                Whether making music, crafting renewable projects or 
                                repurposing electronics, Spencer has a creative solutions 
                                side that he enjoys exploring and he is
                                excited to do that with software engineering. He loves 
                                learning new technologies and the logic and creative 
                                challenges that come along with those technologies.
                                </p>
                                <br />

                                <p>
                                When working on any new project the user's experience 
                                is always of the utmost importance and he always strives 
                                to develop an interface that is appealing and intuitive for all.
                                </p>
                                <br />

                                <p>
                                As a full stack software engineer, he has enjoyed using 
                                Ruby, JavaScript, React/Redux, Rails, PostgreSQL, CSS, 
                                HTML, MongoDB, Express, and Node.js. Currently he is 
                                learning C++. He is always finding time to learn more.
                                </p>

                            </div>
                        </div>
                        
                        <div className='bio-pic'>
                            <div className='pic'>
                                <h2>Cool Bio Pic</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='logout-projects'>
                    <h2>Here are some other projects that Spencer has been involved with:</h2>
                    <div className='projects'>
                        <div>
                            Project 1
                        </div>
                        <div>
                            Project 2
                        </div>
                        <div>
                            Project 3
                        </div>
                    </div>
                </div>

                {/* <div className='logout-about'>
                    <h2>To learn more or get in touch:</h2>
                    <div className='social-media'>
                        <div>
                            LinkedIn
                        </div>
                        <div>
                            GitHub
                        </div>
                        <div>
                            Portfolio
                        </div>
                    </div>
                </div> */}
            </div>
        );
    };
};

export default Logout;