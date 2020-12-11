import React from 'react';
import './EvasionRoom.css';
import {NavLink} from 'react-router-dom';

class EvasionRoom extends React.Component {

    
    state = {
        
    }

    componentDidMount() {
       
                this.setState({
                  
                })
            
    }


    render() {

        return(
            <div>
            <div className="evasion-section">
           <section className="row evasion-rooms-bloc">
           <div className="evasion-room-title-pictures">
                <h6 className="evasion-mini-title"> Pachamama Celebration</h6>
                <NavLink to={`/evasion-room/room-pachamama`}> 
               <img className="evasion-room-pictures" src="/images/option-A.png" alt="jungle-evasion" />
               </NavLink> 
           </div>
           <div className="evasion-room-title-pictures">
                <h6  className="evasion-mini-title"> Bohemian Rhapsody</h6>
                <NavLink to={`/evasion-room/room-bohemian`}> 
               <img className="evasion-room-pictures" src="/images/option-J.png" alt="bohemian-evasion" />
               </NavLink> 

           </div>
           <div className="evasion-room-title-pictures">
                <h6  className="evasion-mini-title"> Inner Peace Seekers</h6>
               <NavLink to={`/evasion-room/room-jungle`}> 
               <img className="evasion-room-pictures" src="/images/option-F.png" alt="jungle-evasion" />
               </NavLink> 
           
           </div>
           <div className="evasion-room-title-pictures">
                <h6  className="evasion-mini-title"> Time travel</h6>
               <NavLink to={`/evasion-room/room-sea`}> 
               <img className="evasion-room-pictures" src="/images/option-I.png" alt="room-sea" />
               </NavLink> 
           </div>
           </section>
            </div> 
            </div>
        )
    }
}

export default EvasionRoom;

