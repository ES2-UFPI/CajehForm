import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';
import {material} from 'react-native-typography'

export default class GeneralExample extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#121212'}}>
        <Header transparent>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Material')}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title
              style={
                (material.headline,
                {color: 'white', fontFamily: 'Permanent Marker', fontSize: 30})
              }>
              Lobby
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text style={{color:'white'}}>This is Content Section</Text>
        </Content>
      </Container>
    );
  }
}
