import React from 'react'; 
import axios from 'axios'; 
import Card from './Components/Card'; 
import './App.css';

class App extends React.Component{
state = {
  cardData: []
}

componentDidMount(){
  axios.get('https://api.github.com/users/credleo95')
  .then((res => {
console.log(res.data)
this.setState({cardData: res.data});
  }))
  .catch((err => {
    console.log('something went wrong: ', err); 

  }))
}

  render(){
    return (
      <div className="App">
        <h1>The Card component is below</h1>
        <Card data={this.state.cardData}/>
        
      </div>
    );
  }
}

export default App;
