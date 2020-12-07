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
           <section className="row wrap evasion-rooms">
           <div className="evasion-room-title-pictures">
                <h6> Pachamama Celebration</h6>
               <img className="evasion-room-pictures" src="images/Pachamama-celebration.jpg" alt="jugnle-evasion"> </img>
           </div>
           <div className="evasion-room-title-pictures">
                <h6> Bohemian Rhapsody</h6>
               <img className="evasion-room-pictures" src="images/Bohemian-rhapsodyjpg" alt="jugnle-evasion"> </img>
           </div>
           <div className="evasion-room-title-pictures">
                <h6> Inner Peace Seekers</h6>
               <img className="evasion-room-pictures" src="images/Jungle-evasion.jpg" alt="jugnle-evasion"> </img>
           </div>
           <div className="evasion-room-title-pictures">
                <h6> Time travel</h6>
               <img className="evasion-room-pictures" src="images/Time-travel.jpg" alt="jugnle-evasion"> </img>
           </div>
           </section>
            </div> 
        )
    }
}

export default EvasionRoom;

