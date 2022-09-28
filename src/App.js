
import {Component} from "react";


class App extends Component{
  render(){
    window.navigator.geolocation.getCurrentPosition(
      position=>
        console.log(position),
      err=>
        console.log(err) 
    )
    return(
      <>
        <h1>hello!</h1>
      </>
    )
  }
}

export default App;
