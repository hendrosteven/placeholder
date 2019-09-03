import React, { Component } from 'react';
import { Container, Content, Header, Body, Text, Left, List, ListItem, Thumbnail, View } from 'native-base';
import {Placeholder, PlaceholderLine, PlaceholderMedia, Fade} from 'rn-placeholder';

export default class App extends Component{

  constructor(){
    super();
    this.state = {
      onProcess: false,
      results: []
    } 
  }

  componentDidMount(){
    this.setState({onProcess: true});
    fetch('https://reqres.in/api/users?delay=3',{
      method: 'GET'
    }).then((response) => response.json()).then((responseData)=>{
      this.setState({
        results: responseData['data'],
        onProcess: false
      });
    });
  }

  render(){
    let view = <View></View>;
    if(this.state.onProcess){
      view = (
        <View>
        <Placeholder style={{paddingBottom:10}}
          Animation={Fade}
          Left={PlaceholderMedia}>
          <PlaceholderLine width={100} />
          <PlaceholderLine width={30} />
        </Placeholder>
        <Placeholder style={{paddingBottom:10}}
          Animation={Fade}
          Left={PlaceholderMedia}>
          <PlaceholderLine width={100} />
          <PlaceholderLine width={30} />
        </Placeholder>
        <Placeholder style={{paddingBottom:10}}
          Animation={Fade}
          Left={PlaceholderMedia}> 
          <PlaceholderLine width={100} />
          <PlaceholderLine width={30} />
        </Placeholder>
        <Placeholder style={{paddingBottom:10}}
          Animation={Fade}
          Left={PlaceholderMedia}>
          <PlaceholderLine width={100} />
          <PlaceholderLine width={30} />
        </Placeholder>
        <Placeholder style={{paddingBottom:10}}
          Animation={Fade}
          Left={PlaceholderMedia}>
          <PlaceholderLine width={100} />
          <PlaceholderLine width={30} />
        </Placeholder>
        <Placeholder style={{paddingBottom:10}}
          Animation={Fade}
          Left={PlaceholderMedia}>
          <PlaceholderLine width={100} />
          <PlaceholderLine width={30} />
        </Placeholder>
        </View> 
      );
    }else{
      if(this.state.results){
        view = this.state.results.map(item=>{
          return( 
            <ListItem thumbnail key={item.id}>
              <Left>
                <Thumbnail source={{uri: item.avatar}}/>
              </Left>
              <Body>
                <Text>{item.first_name} {item.last_name}</Text>
                <Text note>{item.email}</Text>
              </Body>
            </ListItem>
          );
        });
      }
    }

    return(
      <Container> 
        <Header>
          <Body><Text style={{fontWeight:'bold'}}>Placeholder</Text></Body>
        </Header>
        <Content padder>
          <List>
            {view}
          </List>
        </Content>
      </Container>
    );
  }

}