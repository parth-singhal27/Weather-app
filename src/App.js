import React, {Component,setState} from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>hello world!</h1>
//       <p>hello</p>
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    temp: null,
    location: null,
    windspeed: null,
    description: null,
    humidity: null,
    time: null,
    country: null,
    place: null,
    // background: null
  };

  componentDidMount() {
    this.getPosition()
    .then((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      this.getWeather(position.coords.latitude, position.coords.longitude);
    });
  };

  getWeather = async (latitude, longitude) => {
    const weather = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=42c2441e2e3f2d79babe35324ac5f0e9`
    );
  
  

    const data = await weather.json();
    this.setState(
      {
        temp:Math.round(data.main.temp),
        location: data.name,
        windspeed: data.wind.speed,
        description: data.weather.description,
        humidity: data.main.humidity,
        place: data.name,
        country: data.sys.country
      }
    );
    // this.getBackground(this.state.description);
  };

  // getBackground = async (desc) => {
  //   if (desc === "clear sky") {
  //     this.setState({background: "./clearsky.jpg"});
  //   } 
  //   else if (desc === "few clouds") {
  //     this.setState({background: "./clearsky.jpg"});
  //   }
  //   else if (desc === "few clouds") {
  //     this.setState({background: "./clearsky.jpg"});
  //   }
  //   else if (desc === "few clouds") {
  //     this.setState({background: "./clearsky.jpg"});
  //   }
  //   else if (desc === "few clouds") {
  //     this.setState({background: "./clearsky.jpg"});
  //   }
  //   else if (desc === "few clouds") {
  //     this.setState({background: "./clearsky.jpg"});
  //   }
  //   else if (desc === "few clouds") {
  //     this.setState({background: "./clearsky.jpg"});
  //   }
  //   else if (desc === "few clouds") {
  //     this.setState({background: "./clearsky.jpg"});
  //   }
  //   else if (desc === "few clouds") {
  //     this.setState({background: "./clearsky.jpg"});
  //   } else {
  //     this.setState({background: "./clearsky.jpg"});
  //   }
  //   console.log(this.state.background);
  // }

  // getTime = async () => {
  //   const time = await fetch(
  //       'http://worldtimeapi.org/api/ip'
  //     );
      
  //   const data = await time.json();
  //   this.setState({
  //     time: data.datetime.slice(11,16)
  //   })
  // }
  ///////      "http://worldtimeapi.org/api/ip"
  getPosition = () => {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="col-8 d-flex justify-content-center">
          <div className="col-6 app-bg d-flex flex-wrap">
            <div className="col-12">
              <h1 className="ptxt text-white">{this.state.place}</h1>
              <p className="ctxt text-white">{this.state.country}</p>
            </div>
            <div className="col-12 mt-auto">
              <h1 className="text-white">{this.state.place}</h1>
              <p className="text-white">{this.state.country}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
    //  `${this.state.time} ${this.state.temp}`; 
  }
}

export default App;
