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
                <h6> Pachamama Celebration</h6>
                <NavLink to={`/evasion-room/room-pachamama`}> 
               <img className="evasion-room-pictures" src="/images/Pachama-celebration.jpg" alt="jungle-evasion" />
               </NavLink> 
           </div>
           <div className="evasion-room-title-pictures">
                <h6> Bohemian Rhapsody</h6>
                <NavLink to={`/evasion-room/room-bohemian`}> 
               <img className="evasion-room-pictures" src="/images/Bohemian-rhapsody.jpg" alt="bohemian-evasion" />
               </NavLink> 

           </div>
           <div className="evasion-room-title-pictures">
                <h6> Inner Peace Seekers</h6>
               <NavLink to={`/evasion-room/room-jungle`}> 
               <img className="evasion-room-pictures" src="/images/Jungle-evasion.jpg" alt="jungle-evasion" />
               </NavLink> 
           
           </div>
           <div className="evasion-room-title-pictures">
                <h6> Time travel</h6>
               <NavLink to={`/evasion-room/room-sea`}> 
               <img className="evasion-room-pictures" src="/images/Time-travel.jpg" alt="room-sea" />
               </NavLink> 
           </div>
           </section>
            </div> 
            </div>
        )
    }
}

export default EvasionRoom;

