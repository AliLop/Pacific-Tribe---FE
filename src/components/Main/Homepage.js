import React from 'react';
import './Homepage.css';


class Homepage extends React.Component {

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
                <video autoPlay loop muted className="header-video" src="https://res.cloudinary.com/dtu8rcnmp/video/upload/v1607453622/project3/Pexels_Videos_2335977_hki0kt.mp4" type="video/mp4" alt="Homepage-visual" />
            </div>
        </div>
       </div>

      
        <div className="baseline-container container">
            <div className="tribal-pitch">
       
                <h1> A tribe called Pacific... </h1>
                <h5>Restore ancestral widsom in modern daily lives</h5>
                    <p className="concept-pitch">
                        <br/>
                       This safe space is your daily go-to resource for inspiration, respiration & meditation. <br/>
                       In our fast-paced environment, these ancestral practises can help to quiet your mind, protect your body and strenghen your inner peace.  <br/> 
                        <br/>
                        Women, everywhere on Earth, are always the first to suffer from stress, anxiety, heavy mental load. <br/>
                        This tribe is their tribe. A digital hub where they can connect & disconnect. <br/>
                        Made by Women, for Women.    <br/>
                        Love & Light    <br/>
                        <i className="fas fa-heart"></i><i className="fas fa-heart"></i><i className="fas fa-heart"></i>

                    </p>
            </div>
        </div>

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
    </div>  
        )
}
}

export default Homepage; 