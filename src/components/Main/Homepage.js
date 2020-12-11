import React from 'react';
import './Homepage.css';


class Homepage extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render () {
    return (
    <div>
       <div className="logo-homepage">
            <div>
                <img className="logo-home" src="images/LogoV11.png" alt="Homepage-visual" />
            </div>
        </div>

        <div className="header-container">
            <div className="homepage-baseline-container">
                    <h2 className="homepage-baseline"> Peaceful Inside. </h2>
            </div>
            <div className="video-header">
                <div>
                    <video autoPlay loop muted className="header-video" src="https://res.cloudinary.com/dtu8rcnmp/video/upload/v1607468610/project3/Pexels_Videos_2335977_ucxvqp.mp4" type="video/mp4" alt="Homepage-visual" />
                </div>
            </div>
       </div>


        <section>
        <div className="row container wrapping-all-section baseline-container">
            <div className="col-md-6" >
                <img className="left-picture-homepage" src="images/HomepageVisual3.png" alt='left-pic1'/>
            </div>
            <div className="col-md-6">
                <div className="tribal-pitch right-text-homepage">
                    <h1 className="title-homepage"> A tribe called Pacific... </h1>
                    <h5 className="homepage-subtitles">Restoring ancestral widsom in modern daily lives</h5>
                        <p className="concept-pitch">
                        <br/>
                        This safe space is your daily go-to resource for inspiration, respiration & meditation. <br/>
                        In our fast-paced environment, these ancestral practises can help to quiet your mind, protect your body and strengthen your inner peace.  <br/>
                        Women, everywhere on Earth, are always the first to suffer from stress, anxiety, heavy mental load. <br/>
                        This tribe is theirs. A digital hub to connect with yourself & disconnect. <br/>
                        Made by Women, for Women. <br/>
                        Love & Light <br/>
                        <i className="fas fa-heart"></i><i className="fas fa-heart"></i><i className="fas fa-heart"></i>
                        </p>
                </div>
            </div>
        </div>
        </section>

        <section>
        <div className="row container wrapping-all-section baseline-container">
            <div className="col-md-6" >
                <img className="left-picture-homepage" src="images/HomepageVisual4.png" alt='left-pic'/>
            </div>
            <div className="col-md-6">
                <div className="tribal-pitch right-text-homepage">
                    <h1 className="title-homepage"> YOGA & MEDITATION </h1>
                    <h5 className="homepage-subtitles">Tailored inner peace recipes</h5>
                        <p className="concept-pitch">
                        <br/>
                        We truly believe in the power of yoga and meditation, to improve your wellbeing, <br/> your health and your daily life. Natural beauty, minimalism, purity, <br/> simplicity…the values of these ancestral arts are also the ones shared by our community. Discover daily sources of inspiration to practise day after day and reach this wonderful status of inner peace.
                        </p>
                </div>
            </div>
        </div>
        </section>

        <section>
        <div className="row container wrapping-all-section baseline-container">
            <div className="col-md-6" >
                <img className="left-picture-homepage" src="images/HomepageVisual5.png" alt='left-pic2'/>
            </div>
            <div className="col-md-6">
                <div className="tribal-pitch right-text-homepage">
                    <h1 className="title-homepage"> INSPIRATION </h1>
                    <h5 className="homepage-subtitles">Your daily dose of inspirational ideas</h5>
                        <p className="concept-pitch">
                        <br/>
                        Our tribe is not only focused on well-being, our members can elevate their soul <br/>  by discovering new food for mind every day. Thanks to an experienced & recognised life coach, <br/>  or through nice educational videos, you can enhance your Self-consciousness, improve your relationships, or simply find comfort in listening inspirational Humans.
                        </p>
                </div>
            </div>
        </div>
        </section>

        <section>
        <h3 className="h3-homepage"> Inhale the Future.Exhale the Past.</h3>
            <div className="row">
                    <div className="col-sm-2">
                            <img src="images/homepage-thumb1.jpg" className="portrait" alt='portrait' />
                            <div className="overlay">
                        <h6 className="type-snippet">Joy</h6>
                        </div>
                    </div>
                <div className="col-sm-2 container">
                        <img src="images/homepage-thumb2.jpg" className="portrait" alt='portrait'/>
                        <div className="overlay">
                        <h6 className="type-snippet">Happiness</h6>
                        </div>  
                </div>
                <div className="col-sm-2 container">
                    <img src="images/homepage-thumb3.jpg" className="portrait" alt='portrait'/>
                        <div className="overlay">
                        <h6 className="type-snippet">Wisdom</h6>
                        </div>
                </div>
                <div className="col-sm-2 container">
                    <img src="images/homepage-thumb4.jpg" className="portrait" alt='portrait'/>
                    <div className="overlay">
                    <h6 className="type-snippet">Health</h6>
                    </div>
                </div>
                <div className="col-sm-2 container">
                <img src="images/homepage-thumb5.jpg" className="portrait" alt='portrait'/>
                    <div className="overlay">
                    <h6 className="type-snippet">Serenity</h6>
                    </div>
                </div>
                <div className="col-sm-2 container">
                <img src="images/homepage-thumb6.jpg" className="portrait" alt='portrait'/>
                    <div className="overlay">
                    <h6 className="type-snippet">Inner Peace</h6>
         </div>
    </div>
    </div>
    </section>
    </div>  
        )
}
}

export default Homepage; 