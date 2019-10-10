/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Fab,
} from 'native-base';
import Publish from '../Components/Publish.js';
import {material} from 'react-native-typography';

export default class Lobby extends Component {
  render() {
    return (
      <Container>
        <Header transparent style={{backgroundColor: 'rgba(0,0,20,1)'}}>
          <Left />
          <Body>
            <Title
              style={
                (material.headline,
                {color: 'white', fontFamily: 'Roboto', fontSize: 26})
              }>
              Lobby
            </Title>
          </Body>
          <Right />
        </Header>
        <Content
          style={{
            backgroundColor: 'rgba(0,0,20,0.12)',
            borderWidth: 0,
            flex: 1,
          }}>
          {/* Mudar a Cor do Lobby da Rede, variar e vender para o usuário escolher */}
        </Content>
        <Fab
          direction="up"
          containerStyle={{}}
          style={{backgroundColor: 'rgba(200,100,0,0.8)', height:70, width: 70}}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate("Lobby")}>
          <Icon name="sync" style={{color: 'rgba(255,255,255,1)', fontSize: 30, height: 25}} />
        </Fab>
        <Fab
          direction="up"
          containerStyle={{}}
          style={{backgroundColor: 'rgba(0,100,50,0.8)', height:70, width: 70, bottom: 85}}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate("Publish")}>
          <Icon name="bookmark" style={{color: 'rgba(255,255,255,1)', fontSize: 30, height: 25}} />
        </Fab>
        <Fab
          direction="up"
          containerStyle={{}}
          style={{backgroundColor: 'rgba(105,0,0,0.8)', height:70, width: 70}}
          position="bottomLeft"
          onPress={() => this.props.navigation.navigate("Material")}>
          <Icon name="hammer" style={{color: 'rgba(255,255,255,1)', fontSize: 30, height: 25}} />
        </Fab>
      </Container>
    );
  }
}