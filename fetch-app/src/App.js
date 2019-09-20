import React ,{Component}from 'react';
import Form from './Components/Form';
import Weather  from './Components/Weather';
const Api_Key = "190f5e508a8f7ff3f07e7cff497f7f76";
class App extends Component{
  state = {
    tempreture : "",
    city : "",
    country: "" ,
    humidity: "" ,
    description: "",
    error: "",
  }
getWeather = async (e) => {
  e.preventDefault() 
const city = e.target.elements.city.value;
const country = e.target.elements.country.value;
const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
const data = await api.json();
console.log(data)
if (city && country) {
  this.setState({
    tempreture: data.main.temp,
    city: data.name,
    country: data.sys.country,
    humidity: data.main.humidity,
    description: data.weather[0].description,
    error: "",
  })
}else {
  this.setState({
     tempreture: "",
       city: "",
       country: "",
       humidity: "",
       description: "",
       error: "Please Enter Data",
  })
}
}

  render() {
    return(
      <div className="wrapper">
      <div className="form_container">
      <Form getWeather={this.getWeather}   />
      < Weather 
       tempreture = {this.state.tempreture}
         city= {this.state.city}
           country={this.state.country}
           humidity={this.state.humidity}
           description={this.state.description}
           error={this.state.error}
      />
      
      </div>
    </div>
    )
  }
}

export default App;
