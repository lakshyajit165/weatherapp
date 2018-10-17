import React from "react";

import Titles from "./components/Titles";

import Form from "./components/Form";

import Weather from "./components/Weather";

const API_KEY = "d388cc9c41e5c0d4bf75a2ab328a574f";


class App extends React.Component {

      state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
      }

      getWeather = async (e) =>{

        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${city},${country}&appid=${API_KEY}&units=metric`);
        
        const data = await api_call.json();
      
      
      if(city && country){
            
            if(data.list.length === 0){
                  this.setState({

                  temperature: undefined,
                  city: undefined,
                  country: undefined,
                  humidity: undefined,
                  description: undefined,
                  error: "Unable to find location!"

                  });

            }else{

                console.log(data);

                this.setState({

                temperature: data.list[0].main.temp,
                city: data.list[0].name,
                country: data.list[0].sys.country,
                humidity: data.list[0].main.humidity,
                description: data.list[0].weather[0].description,
                error: ""
              
              });

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
    render(){
      return(
        <div className="wrapper">
          <div className="jumbotron col-lg-8 mx-auto text-center">
            <Titles />
            <Form getWeather={this.getWeather}/>
            <Weather 
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error }
            />
          </div>
        </div>  
      );
    }
};

export default App;