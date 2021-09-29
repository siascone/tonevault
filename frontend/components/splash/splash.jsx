import React from "react";

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='splash-main'>
                <div className='splash-carousel'>
                    Carousel
                </div>

                <div className='splash-search-upload'>
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
                </div>

                <div className='splash-spotlight'>
                    <p>Here what's trending for free in the ToneVault community</p>
                    <div>
                        Collection of trending songs and artists
                    </div>
                    <button className='explore'>Explore trending playlists</button>
                </div>

                <div className='splash-creators-cta'>
                    <div>
                        <h1>Calling all creators</h1>
                        <p>Get on ToneVault to connect with fans, share your sounds, 
                           and grow your audience. What are you waiting for?
                        </p>
                        <button className='creators-cta-button'>Find out more</button>
                    </div>
                </div>

                <div className='splash-thankyou'>
                    <h1>Thanks for listening. Now join in.</h1>
                    <p>Save tracks, follow artists and build playlists. All for free.</p>
                    <button className='signup-button'>Create account</button>
                    <div>
                        <p>Already have an account?</p>
                        <button className='login-button'>Sign in</button>
                    </div>
                </div>

                {/* <div className='spalsh-footer'>
                    Footer stuff here
                </div> */}
            </div>
        )
    }
}

export default Splash;