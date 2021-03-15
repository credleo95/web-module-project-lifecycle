import React from 'react'; 
import ReactDom from 'react-dom'; 
import axios from 'axios'; 

// Each Card contains Header: Name; subheading: Username ; Profile Image Content: Location, Profile URL, Followers, Following, Bio
// name = data.name ; username = data.login; profile pic = data.avatar_url; location: data.location url = data.url followers = data.followers bio = data.bio

class App extends React.Component {

  state = {
    userData: {},
    followers: []
  }
  
  componentDidMount(){
    Promise.all([
      axios.get('https://api.github.com/users/credleo95'),
      axios.get('https://api.github.com/users/credleo95/followers')
    ])
    .then(( response => {
      console.log(response[0].data)
      this.setState({
        ...this.state, 
        userData: response[0].data,
        followers: response[1].data
      })
      console.log("response working")
    }))
    .catch((error => {
      console.log("something went wrong", error)
    }))
  }
  render(){
  return (
    <div>
      <h1>Github User Cards are here!</h1>
      {/* render cards */}
      <div>
        <h1>{this.state.userData.name}</h1>
        <h2>{this.state.userData.login}</h2>
        <img src={`${this.state.userData.avatar_url}`} alt="Omarius Headshot"/>
      </div>
      <div>
        <h1> Followers: </h1>
          <section>
            {this.state.followers.map(follower => {
              return(
              <div>
                 <h1>{follower.name}</h1>
                 <h2>{follower.login}</h2>
                 <img src={`${follower.avatar_url}`} alt="Follower Headshot"/>
              </div>
              )
                      
            })
            }
          </section>
      </div>
    
    </div>
  );
}
}

export default App;
