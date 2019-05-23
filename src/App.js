import React, { Component } from 'react';

import Titles from './components/Titles';

import Form from "./components/Form";

import Weather from "./components/Weather";

import Chart from './components/Chart';

import Error from './components/Error';

import './App.css';

const API_KEY = "d388cc9c41e5c0d4bf75a2ab328a574f";



class App extends Component {
  
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    loading: false,
    description: undefined,
    error: undefined,
    labels: [],
    temp_max: [],
    hum: [],
    wind_speed: [],
    forecast: false
  } 
  
    getWeather = async (e) =>{

    e.preventDefault();

    
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=d388cc9c41e5c0d4bf75a2ab328a574f&units=metric`)
                      .then(this.setState({
                        loading: true
                      }))     
                      .then((data) => {
                        this.setState({
                          loading: false
                        })
                        return data.json();
                      });
    
    //const data = await api_call.json();
  
  
    if(city && country){
        
        if(!data.list){
              this.setState({

              temperature: undefined,
              city: undefined,
              country: undefined,
              humidity: undefined,
              description: undefined,
              error: "Unable to get weather info!... Please check the values entered..."

              });

        }else{
            
            console.log(data);
            let labels = [];
            let temp_max = [];
            let hum = [];
            let wind_speed = [];
            let dt; 
            for(let i = 0; i<data.list.length; i++){
                dt = data.list[i];
                let date_ = dt.dt_txt.split(' ')[0];
               
                  if(!labels.includes(date_) && dt.dt_txt.split(' ')[1] === '12:00:00'){
                    // console.log(dt.dt_txt.split(' ')[1]);
                    labels.push(date_);
                    temp_max.push(dt.main['temp_max']);
                    hum.push(dt.main['humidity']);
                    wind_speed.push(dt.wind['speed']);
                  }
            } 
           
            if(labels.length !== temp_max.length){
              labels.shift();
            }
            // console.log(labels);
            // console.log(temp_max);
            // console.log(hum);
            // console.log(wind_speed);

              this.setState({

                  temperature: data.list[0].main.temp,
                  city: data.city['name'],
                  country: data.city['country'],
                  humidity: data.list[0].main.humidity,
                  description: data.list[0].weather[0].description,
                  error: "",
                  labels: labels,
                  temp_max: temp_max,
                  hum: hum,
                  wind_speed: wind_speed
              
              });

              console.log(data.city.name);

          }
        
  }else{

      this.setState({

      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter some values!"

    });
  
}
}
  getForecast = () => {
    this.setState({
      forecast: true
    });
  }

  getPresent = () => {
    this.setState({
      forecast: false
    });
  }


  render(){
  return (
    <div className="wrapper">
      <Titles />
      <div className="col-md-10 pt-1 mx-auto">
        <div className="jumbotron pt-4 ">
          
          <Form getWeather={this.getWeather}/>
          {this.state.loading ? 
          <div className="container text-center pt-5 pb-5 mt-5 mb-5">
            
            <div className="spinner-border text-dark" role="status">
              <span className="sr-only">Loading...
              </span>
            </div>
          </div> 
            : this.state.error ? 
              <Error error={this.state.error}/>
              :
              this.state.forecast ? <Chart 
                  labels={this.state.labels}
                  temp_max={this.state.temp_max}
                  hum={this.state.hum}
                  wind_speed={this.state.wind_speed}
                  getPresent={this.getPresent}
              /> : <Weather 
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                  getForecast={this.getForecast}
            />}
        </div>
      </div>
    </div>
  );
  }
};

export default App;
