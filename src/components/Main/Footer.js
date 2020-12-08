import React from 'react';
import './Footer.css';


class Footer extends React.Component {

    render () {
    return (
        <div>
            

<footer className="page-footer font-small white">
  <div className="container">
    <div className="row text-center d-flex justify-content-center pt-5 mb-3">
      <div className="col-md-2 mb-3">
        <p className="text-uppercase">
          <a href="/about" className="footer-link">About us</a>
        </p>
      </div>
      <div className="col-md-2 mb-3">
        <p className="text-uppercase">
          <a href="/services" className="footer-link">Services</a>
        </p>
      </div>
      <div className="col-md-2 mb-3">
        <p className="text-uppercase">
          <a href="/h-map" className="footer-link">Evasion Room</a>
        </p>
      </div>
      <div className="col-md-2 mb-3">
        <p className="text-uppercase">
          <a href="http://localhost:3000/login" className="footer-link">Login</a>
        </p>
      </div>
      <div className="col-md-2 mb-3">
        <p className="text-uppercase">
          <a href="#" className="footer-link">Contact</a>
        </p>
      </div>
        </div>


    <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">

 
      <div className="col-md-8 col-12 mt-5">
        <p> 
          Pacific Tribe was developed with love by Alicia & Salomé 
        </p>
      </div>
   
    </div>
    
    
    <div className="row pb-3">
      <div className="col-md-12">
        <div className="mb-5 icons-social-media flex-center">
          <a className="fb-ic">
            <i className="fab social-media-i fa-facebook-f fa-lg white-text mr-4"> </i>
          </a>
          <a className="li-ic">
            <i className="fab social-media-i fa-linkedin-in fa-lg white-text mr-4"> </i>
          </a>
          <a className="ins-ic">
            <i className="fab social-media-i fa-instagram fa-lg white-text mr-4"> </i>
          </a>
        </div>
      </div>
    </div>

  </div>

  <div className="footer-copyright text-center py-3">© 2020 Copyright  </div>
</footer>
        </div>
    )
}
}

export default Footer; 