import React from 'react';
//import './AboutUs.css';


class AboutUs extends React.Component {

    render () {
    return (
        <div>
        <br/> 
        <br/> 

         <section>
            <div className="row container wrapping-all-section baseline-container">
                <div className="col-md-6" >
                    <img className="left-picture-homepage" src="images/LogoV11.png"/>
                </div>
            <div className="col-md-6">
                <div className="tribal-pitch right-text-homepage">
                        <h1 className="title-homepage"> About Pacific Tribe...</h1>
                        <h5 className="homepage-subtitles">Restoring ancestral widsom in modern daily lives with holistic approach</h5>
                        <p className="concept-pitch">
                        <br/>
                        Is not by chance that Pacific Tribe was created in 2020, the year of the pandemic.
                        Pacific Tribe has been thought and made with care by women for women - specially for the Covid-19 era. 
                        When the pandemic kicked in it shaken our lives, our ways. And as usual it has been harder on women. <br/>
                        <br/> 
                         This safe space is your daily go-to resource for inspiration, respiration & meditation. <br/>
                        In our fast-paced environment, these ancestral practises can help to quiet your mind, protect your body and strenghen your inner peace.  <br/>
                        <br/> 
                        Women, everywhere on Earth, are always the first to suffer from stress, anxiety, burn-out and heavy mental load. <br/>
                        And the pandemic and its consequenses like the remote work from home where we are already overloaded has only come to deppend these feelings.<br/>
                        <br/> 
                        A digital hub where we can connect & disconnect. <br/>
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