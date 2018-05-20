import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../node_modules/semantic-ui/dist/semantic.min.css'
import './style.scss';
import {Container, Grid, Segment, Divider, Label} from 'semantic-ui-react'


class Test extends Component {
  constructor(props) {
      super(props);

  }

  render() {
  
    return (
      <Container>
        <Grid container columns={2} stackable  as={Segment} loading={false}>
          <Grid.Column>
            <Post title="a title" description="a description adsfsd dsfd afsdfd" subtitle="a subti"/>
          </Grid.Column>
          <Grid.Column>
            <Post title="a title" description="a description adsfad f df aasf dasfaddsfasd fdsfsdfa sdfdfadsf afafdsfa f sadfasf as fsadfasdf sda" subtitle="a subtitle"/>
          </Grid.Column>
          <Grid.Column>
          <Post title="a title" description="a description" subtitle="a subtitle"/> 
          </Grid.Column>
          <Grid.Column>
            <Post title="a title" description="a description adfa fsdf af dd" subtitle="a sfd subtitle"/>
          </Grid.Column>
          <Grid.Column>
            <Post title="a title" description="a descriptionadf dsf ad dfs fad fasfsdf adads  dfsaf ads f fdfsafd fadsfaa s a" subtitle="a subtitle"/> 
          </Grid.Column>
          <Grid.Column>
            <Post title="a title" description="a descriptiona dfd fasf as fasdfsda fsadfasd" subtitle="a subtitle dfasd "/>
          </Grid.Column>
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
      <Grid.Column as={Segment} raised>
        

        <h3>{title}</h3>
        <Label>{subtitle}</Label>
        <Divider section />
        <Container text fluid>
          {description}
        </Container>
        

      </Grid.Column>
    )
  }
}

ReactDOM.render(<Test />, document.getElementById("index"));

