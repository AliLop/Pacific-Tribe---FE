import React from 'react';
import './EvasionRoom.css';


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
            <h5 className="evasion-room-title">Evasion Spirit: Open the door, the Serenity is waiting for you</h5>
            <br/>
            <div className="evasion-section">
           <section className="roww evasion-rooms">
           <div className="evasion-room-title-pictures">
                <h6> Pachamama Celebration</h6>
               <img className="evasion-room-pictures" src="/images/Pachama-celebration.jpg" alt="jungle-evasion"/>
           </div>
           <div className="evasion-room-title-pictures">
                <h6> Bohemian Rhapsody</h6>
               <img className="evasion-room-pictures" src="/images/Bohemian-rhapsody.jpg" alt="bohemian-evasion"/> 
           </div>
           <div className="evasion-room-title-pictures">
                <h6> Inner Peace Seekers</h6>
               <img className="evasion-room-pictures" src="/images/Jungle-evasion.jpg" alt="evasion-evasion"/>
           </div>
           <div className="evasion-room-title-pictures">
                <h6> Time travel</h6>
               <img className="evasion-room-pictures" src="/images/Time-travel.jpg" alt="room-evasion"/> 
           </div>
           </section>
            </div> 
            </div>
        )
    }
}

export default EvasionRoom;

