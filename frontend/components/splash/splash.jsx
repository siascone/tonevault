import React from "react";

class Splash extends React.Component {
    constructor(props) {
        super(props)

        this.upload = this.upload.bind(this);
    }

    upload(e) {
        e.preventDefault();
        this.props.history.push('/upload');
    }

    render() {
        return (
            <div className='splash-main'>
                <div className='splash-carousel'>
                    <h1>What's next in music is first on ToneVault</h1>
                    <br />
                    <p>
                        Upload your first track and begin your journey. ToneVault gives
                        you space to create, find your fans, and connect with other
                        artists.
                    </p>
                    <br />
                    <button className='splash-upload' onClick={this.upload}>Start uploading today</button>
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
                    <button className='splash-upload' onClick={this.upload}>Upload your own</button>
                </div>

                <div className='splash-spotlight'>
                    <h2>Here what's trending for free in the ToneVault community</h2>
                    <div className='trending-songs'>
                        <div className='trend-set1'>
                            <div className='trending-song'>
                                <h3>Awesome Song 1</h3>
                                <p>Awesome Artist</p>
                            </div>
                            <div className='trending-song'>
                                <h3>Awesome Song 2</h3>
                                <p>Awesome Artist</p>
                            </div>
                            <div className='trending-song'>
                                <h3>Awesome Song 3</h3>
                                <p>Awesome Artist</p>
                            </div>
                            <div className='trending-song'>
                                <h3>Awesome Song 4</h3>
                                <p>Awesome Artist</p>
                            </div>
                            <div className='trending-song'>
                                <h3>Awesome Song 5</h3>
                                <p>Awesome Artist</p>
                            </div>
                            <div className='trending-song'>
                                <h3>Awesome Song 6</h3>
                                <p>Awesome Artist</p>
                            </div>
                        </div>
                        <div className='trend-set2'>
                            <div className='trending-song'>
                                <h3>Awesome Song 7</h3>
                                <p>Awesome Artist</p>
                            </div>
                            <div className='trending-song'>
                                <h3>Awesome Song 8</h3>
                                <p>Awesome Artist</p>
                            </div>
                            <div className='trending-song'>
                                <h3>Awesome Song 9</h3>
                                <p>Awesome Artist</p>
                            </div>
                            <div className='trending-song'>
                                <h3>Awesome Song 10</h3>
                                <p>Awesome Artist</p>
                            </div>
                            <div className='trending-song'>
                                <h3>Awesome Song 11</h3>
                                <p>Awesome Artist</p>
                            </div>
                            <div className='trending-song'>
                                <h3>Awesome Song 12</h3>
                                <p>Awesome Artist</p>
                            </div>
                        </div>
                    </div>
                    <button className='explore'>Explore trending playlists</button>
                </div>

                <div className='splash-creators-cta'>
                    <h1>Calling all creators</h1>
                    <p>Get on ToneVault to connect with fans, share your sounds, 
                        and grow your audience. What are you waiting for?
                    </p>
                    <button className='creators-cta-button'>Find out more</button>
                </div>

                <div className='splash-thankyou'>
                    <h1>Thanks for listening. Now join in.</h1>
                    <h2>Save tracks, follow artists and build playlists. All for free.</h2>
                    <button className='signup-button'>Create account</button>
                    <div className='splash-signup'>
                        <p>Already have an account?</p>
                        <button className='splash-login-button'>Sign in</button>
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