import React from 'react'; 
import axios from 'axios'; 
import Card from './Components/Card'; 
import FollowerCard from './Components/FollowerCard'; 
import './App.css';

class App extends React.Component{
state = {
  cardData: [],
  followerData: []
}

componentDidMount(){
  Promise.all([
    axios.get('https://api.github.com/users/credleo95'),
    axios.get('https://api.github.com/users/credleo95/followers')
  ])
  .then((res => {
console.log(res[0].data)
this.setState({cardData: res[0].data})
console.log(res[1].data)
this.setState({followerData: res[1].data})
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
        {this.state.followerData.map(follower => {
          return <FollowerCard followerData={follower}/>
        })}
        
        
      </div>
    );
  }
}

export default App;
