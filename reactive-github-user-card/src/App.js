import React from 'react'; 
import ReactDom from 'react-dom'; 
import axios from 'axios'; 
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'; 
import GitHubIcon from '@material-ui/icons/GitHub';
import './styles.css';


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
      // console.log(response[0].data)
      console.log(response[1].data)
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
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <GitHubIcon style={{marginRight:'1rem'}}/>
          <Typography variant='h6'>
            Github User Cards 
          </Typography>
        </Toolbar>
      </AppBar>
      {/* render cards */}
      <div>
        <Container maxWidth='sm'>
          <Typography variant="h2" align='center' color='textPrimary' gutterBottom>Github User Cards </Typography>
          <Typography variant='h5' align='center' color='textSecondary' paragraph>
            This is a project which uses the Github API to display a page which will display my profile information and my followers. I am also using Material UI for styling. 
          </Typography>
          <div>
            <Card className='cardGrid' container spacing={4} justify='center' maxWidth='md'>
              <Grid item >
                <Card className='card'>
                  <CardMedia 
                  image={`${this.state.userData.avatar_url}`}
                  title="Omarius profile picture"
                  className='cardMedia'
                  />
                  <CardContent className='cardContent'>
                      <Typography variant="h4">{this.state.userData.name}</Typography>
                        <Typography variant="h5">{this.state.userData.login}</Typography>
                        <Typography variant="h6">Followers: {this.state.userData.followers}</Typography>
                        <Typography variant="p">Bio: {this.state.userData.bio}</Typography>
                  </CardContent>
                    
                </Card>
                
              </Grid>
            </Card>
            
          </div>
        </Container>
      </div>
      <div>
        <Typography variant='h3'> Followers: </Typography>
          <section className='followers'>
            {this.state.followers.map(follower => {
              return(
              <div>
                <div className='follower-container'>
                  <img src={`${follower.avatar_url}`}  alt="Follower Headshot" style={{width:'25%'}}/>
                  <Typography variant="h4">{follower.name}</Typography>
                  <Typography variant="h5">{follower.login}</Typography>
                </div>
             </div>
              )
                      
            })
            }
          </section>
          <br/>
      </div>
    </div>
  );
}
}

export default App
