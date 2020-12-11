import React from 'react';
import './Footer.css';
import { Link, withRouter } from 'react-router-dom';


class Footer extends React.Component {

    render () {
    return (
        <div>
            
 
<footer className="page-footer font-small white">
  <div className="container">
    <div className="row text-center d-flex justify-content-center pt-5 mb-3">
      <div className="col-md-2 mb-3">
        <p className="text-uppercase">
          <Link to={"/about-us"} className="footer-link"> About us </Link>
        </p>
      </div>
      <div className="col-md-2 mb-3">
        <p className="text-uppercase">
          <Link to={"/signup"} className="footer-link"> Sign Up </Link>
        </p>
      </div>
      <div className="col-md-2 mb-3">
        <p className="text-uppercase">
          <Link to={"/"} className="footer-link"> Home </Link>
        </p>
      </div>
      <div className="col-md-2 mb-3">
        <p className="text-uppercase">
          <Link to={"/login"} className="footer-link"> Login</Link>
        </p>
      </div>
      <div className="col-md-2 mb-3">
        <p className="text-uppercase">
          <Link to={"/contact-us"} className="footer-link"> Contact us </Link>
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

export default withRouter(Footer);