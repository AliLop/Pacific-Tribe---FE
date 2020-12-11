import React from 'react';
//import './AboutUs.css';


class AboutUs extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render () {
    return (
        <div>
         <section>
            <div className="row container wrapping-all-section baseline-container">
                <div className="col-md-6" >
                    <img className="left-picture-homepage" src="images/LogoV11.png" alt="about-img"/>
                </div>
            <div className="col-md-6">
                <div className="tribal-pitch right-text-homepage">
                        <h1 className="title-homepage"> About Pacific Tribe...</h1>
                        <h5 className="homepage-subtitles">Restoring ancestral wisdom in modern daily lives with a holistic approach</h5>
                        <p className="concept-pitch">
                        <br/>
                        Pacific Tribe has been thought and made with care by women for women. <br/>
                        <br/>
                        Is not by chance that it was created in 2020, the year of the pandemic.
                        As when it came, it shaken our lives and our state of mind and as usual, it is being harder on women. <br/>
                        The pandemic and its consequenses add stress, anxiety and heavy mental load.<br/>
                        <br/> 
                        We intend to offer a safe space, your daily go-to resource for inspiration, respiration & meditation.
                        In our fast-paced environment, these ancestral practises can help to quiet your mind, protect your body and strengthen your inner peace.  <br/>
                        <br/> 
                        A digital hub to connect with yourself & disconnect from the outer world.<br/>
                        <br/>
                        Love & Light    <br/>
                        <i className="fas fa-heart"></i><i className="fas fa-heart"></i><i className="fas fa-heart"></i>
                        </p>
                    </div>
                </div>
            </div> 
           </section> 
        </div>
    )
}
}

export default AboutUs; 