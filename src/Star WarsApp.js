import React, { Component } from 'react';
import './App.css';

class StarWarsService extends Component{
  constructor(){
    super();
    this.state = {
      starwarsData : null,
    }
  }

  componentDidMount(){
    const apiURL = "https://swapi.co/api/planets/";
    fetch(apiURL)
    .then(res => res.json() )
    .then(json => { this.setState({starwarsData : json}) })
  }
  
  render(){
    const starwarsData = this.state.starwarsData;
    if(!starwarsData) return (<div>Please wait...</div>);
    console.log(starwarsData);
    const planets = starwarsData.results;
    return(
      planets.map((planets,index)=>(
      <div>
       
       <th>Planet name : {planets.name}</th>
       <p>Rotation period : {planets.rotation_period}</p>
       <p>Orbital period : {planets.orbital_period}</p>
       <p>Diameter : {planets.diameter}</p>
       <p>Climate : {planets.climate}</p>
       <p>Gravity : {planets.gravity}</p>
       <p>Surface water : {planets.surface_water}</p>
       <p></p>
       </div>
    ))) 
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      activePlace : 0,
    }
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
       {
         PLACES.map((place,index)=>(
           <button key={index}
           className={"button " + (index%2===0?"is-danger":"is-primary")}
             onClick={()=>{
               this.setState({activePlace : index})
               }}>
             {place.name}
             </button>
         ))}
        <StarWarsService zip={PLACES[activePlace].zip} key={activePlace}/>
      </div>
    );
  }
}
const PLACES = [
  {name:"1",zip:"1"},
  {name:"2",zip:"2"},
  {name:"3",zip:"3"},
  {name:"4",zip:"4"},
  {name:"5",zip:"5"},
  {name:"6",zip:"6"},
  {name:"7",zip:"7"},
];
export default App;