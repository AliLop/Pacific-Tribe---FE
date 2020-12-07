import { message } from 'antd';
import React from 'react';
import { Radar } from 'react-chartjs-2';
import MoodService from '../../utils/mapi';

class WeeklyChart extends React.Component {
    state = {
        mood: this.props.mood,
        moodHistory: [],
        positive: '',
        data:  {
                    labels: ['Overwhelmed', 'Anxious', 'Calm', 'Positive', 'Enthusiastic'],
                    datasets: [{
                        label: 'How have you been feeling lately...',
                        data: [0, 0, 0, 0, 0],
                        backgroundColor: [      
                            'rgba(197,148,136,0.8)'
                        ],
                        borderColor: [
                            'rgba(197,148,136,0.8)',
                            // 'rgba(54, 162, 235, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
        options: {
            scales: {
                yAxes: [{
                    display: false,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }

    componentDidMount () {
         //Function to retrieve the mood of the day (the last one from the array)
         const moodService = new MoodService();
         const userId = localStorage.getItem('loggedInUser'); 
        moodService.getMoodHistory(userId)
         .then((mood) => {
           console.log('Here is the mood HISTORY of one user:', mood)
              this.setState ({
                  moodHistory: mood.data,
              })
            if(this.state.moodHistory) {
                this.chartData()
            } else {
                message ('calculating CHART')
            }

         }).catch((err) => console.log("An error occured while trying to retrieve the mood of the day", err))
    
    } 

    chartData = () => {      
            let calm = 0;
            let overwhelmed = 0;
            let anxious = 0;
            let positive = 0;
            let enthusiastic = 0;
            for (var i = 0; i < this.state.moodHistory.length; i++) {
                if (this.state.moodHistory[i] === 'calm') {
                    calm++;
                } else if (this.state.moodHistory[i] === 'overwhelmed') {
                    overwhelmed++;
                } else if (this.state.moodHistory[i] === 'anxious') {
                    anxious++;
                } else if (this.state.moodHistory[i] === 'positive') {
                    positive++;
                } else if (this.state.moodHistory[i] === 'enthusiastic') {
                    enthusiastic++;
                }
            }
    
            this.setState ({
                data:  {
                    labels: ['Overwhelmed', 'Anxious', 'Calm', 'Positive', 'Enthusiastic'],
                    datasets: [{
                        label: 'How have you been feeling lately...',
                        data: [overwhelmed, anxious, calm, positive, enthusiastic],
                        backgroundColor: [      
                            'rgba(197,148,136,0.6)'
                        ],
                        borderColor: [
                            'rgba(197,148,136, 0.5)',
                            // 'rgba(54, 162, 235, 1)',
                        ],
                        borderWidth: 1
                    }]
                }
            })
    }
    
    
    render() {
        console.log(this.state.moodHistory)
        return(
               <div style={{width: "650px", height: "750px"}}> 
                <Radar data={this.state.data} options={this.state.options} />
                
               </div> 
            )
    }
}

export default WeeklyChart;
