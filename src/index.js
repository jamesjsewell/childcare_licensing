import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios'
import '../node_modules/semantic-ui/dist/semantic.min.css'
import './style.scss';
import {Container, Grid, Segment, Divider, Label, Item, Image} from 'semantic-ui-react'
import chart from './assets/images/chart.png'
import heat_map from './assets/images/heat_map.png'


class Test extends Component {

  constructor(props) {

      super(props);
      this.state={fetch_success: false, posts: null}

      axios
			.get('https://general-purpose-api.herokuapp.com/items', {
		
			})
			.then(response => {
				if (response.data) {
          this.setState({posts: response.data, fetch_success: true})
         
				}
			})
			.catch(error => { console.log(error)});

  }

  generate_posts(){

    var posts = this.state.posts
    var renderedPosts = []

    for(var i = 0; i < posts.length; i++){
      var post = posts[i]
      renderedPosts.push(<Post key={`post ${i}`} title={post.title} subtitle={post.subtitle} description={post.description}  />)
    }

    return renderedPosts

  }

  render() {

    const { fetch_success, posts} = this.state
  
    return (
      <Container>

        <Segment basic>
          <h1>Childcare Licensing Violations Navigator</h1>
          <h3>Ensuring all families have equal access to child care that meets basic standards</h3>
          <strong>Harris County, Texas</strong>
          <p>concept developed by David McClendon</p>
        </Segment>

        <p>images courtesy of David McClendon</p>	
        <Segment.Group horizontal>
          <Segment>
          <Image src={chart} size="big" />
          </Segment>
          <Segment>
            <Image src={heat_map} size="big" />
          </Segment>
        </Segment.Group>

        <h2>apps</h2>
        <Segment.Group compact horizontal>

          <Segment className="compact" color="blue">

            <Segment>
              <h3>See the data on childcare centers in Harris County</h3>
              <a href="https://wysesean.github.io/child-care-licensing--3/child-care-licensing">live map</a>
            </Segment>

            <h5>source code on github</h5>
            <p> this app is currently in development </p>
            <a href="https://github.com/wysesean/child-care-licensing--3"> source code </a>
            <h5>developed by</h5>
            <a href="https://github.com/wysesean">sean</a>
          </Segment>
          
          <Segment className="compact" color="blue">
            <h5>ios app source code</h5>
            <p> this app is currently in development </p>
            <a href="https://github.com/sreeku44/Child-Care-Licensing"> source code </a>
            <h5>developed by</h5>
            <a href="https://github.com/sreeku44">sreeku</a>
          </Segment>

        </Segment.Group>

        <Segment basic>
          <h2>news</h2>
          <Grid container columns={4} stackable  as={Segment} loading={fetch_success? false : true} basic>

            {posts? this.generate_posts() : null}
        
          </Grid>
        </Segment>

      </Container>
    );
     
  }
}

class Post extends Component{
  constructor(props){
    super(props)
  }

  render(){

    const {title, subtitle, description} = this.props
    return(
      <Grid.Column>
        
        <Segment padded raised>
          <h3>{title}</h3>
          <Label>{subtitle}</Label>
          <Divider section />
          <Container text fluid>
            {description}
          </Container>
        </Segment>
        
      </Grid.Column>
    )
  }
}

ReactDOM.render(<Test />, document.getElementById("index"));

