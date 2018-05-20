import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios'
import '../node_modules/semantic-ui/dist/semantic.min.css'
import './style.scss';
import {Container, Grid, Segment, Divider, Label} from 'semantic-ui-react'


class Test extends Component {
  constructor(props) {
      super(props);
      this.state={fetch_success: false, posts: null}
      // $.ajax({
      //   url: 'https://general-purpose-api.herokuapp.com/items',
      //   success: (response)=>{
      //     console.log('yeah')
      //     console.log(response)
      //     //this.setState({fetch_success: true })
        
      //   }
      // }).done((response)=>{console.log('done')})

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
        <Grid container columns={4} stackable  as={Segment} loading={fetch_success? false : true} padded>
        
          {posts? this.generate_posts() : null}
      
        </Grid>
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

