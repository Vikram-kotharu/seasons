
import {Component} from "react";
import SeasonDisplay from "./SeasonDisplay";
import './ses.css'
import { Dna } from  'react-loader-spinner'

class App extends Component{
  state = {lat:'',err:""}
  
  componentDidMount(){
    this.latitude()
    console.log("this component is called!")
  }
  latitude = () =>{
    window.navigator.geolocation.getCurrentPosition(
      position=>
        
        this.setState({lat:position.coords.latitude}),
      err=>
        this.setState({err:err.message}),
        
    )

  }
  componentDidUpdate(){
    console.log("this update is callled!")
  }
  render(){
    if(!this.state.err && this.state.lat){
      return <SeasonDisplay lats={this.state.lat} />
    }

    
    return(
      <>
      <div className="container">
        <div className="main">
            <div>
                <h1>Know Your Season</h1>
                <br />
                <br />
                <div>
                    <img className="img1" src="https://img.freepik.com/free-vector/cartoon-hello-summer-illustration_23-2148941121.jpg?w=740&t=st=1664521852~exp=1664522452~hmac=d1a14e38771a18aafa0b39222f37569b80e454b0ae114aee1c642f1cf6e4a1a2" alt="" />
                    <img className="img2" src="https://img.freepik.com/free-vector/winter-landscape-with-ropeway-station-ski-cable-cars_1262-16849.jpg?w=1380&t=st=1664522091~exp=1664522691~hmac=1f6c49a100beb29f10572adf43b683fff8efcffe345cf95af0585b6da554766d" alt="" />
                </div>
                <Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperclassName="dna-wrapper"
/>
            </div>
        </div>
    </div>
        
        
      </>
    )
  }
}

export default App;
