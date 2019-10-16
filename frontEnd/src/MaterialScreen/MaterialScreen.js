/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Left, Right, Body, Text, Card, CardItem, Thumbnail} from 'native-base';
import {material} from 'react-native-typography';

export default class Publish extends Component {
  render() {
    return (
      <Card
        style={{
          backgroundColor: 'rgba(0,0,0,0.0)',
          paddingTop: 5,
          paddingHorizontal: 0,
          paddingBottom: 15,
          borderRadius: 0,
        }}>
        <CardItem header style={{height: 50, backgroundColor: 'white'}}>
          <Left>
            <Thumbnail
              source={require('../Acessibilidade.png')}
              style={{height: 30, width: 30}}
            />
            <Body>
              <Text style={{color: 'black'}}>Cajeh</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem
          cardBody
          style={{
            backgroundColor: 'rgba(0,0,0,1)',
            borderTopColor: 'white',
            borderColor: 'rgba(0,0,0,0.0)',
            height: 400,
            elevation: 3,
            width: null,
            flex: 1,
            opacity: 0.9,
            zIndex: 0,
          }}>
          <Left>
            <Thumbnail source={require('../Acessibilidade.png')} />
            <Body>
              <Text
                style={{
                  color: 'green',
                  fontFamily: 'Permanent Marker',
                }}>
                Cajeh
              </Text>
            </Body>
          </Left>
          {/* Mudar a Cor Base da Publicação, variar de 0.5 até 1 */}
          <Text
            style={{
              color: 'orange',
              fontSize: 40,
              fontFamily: 'Permanent Marker',
              opacity: 1,
              zIndex: 3,
            }}>
            a
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 40,
              fontFamily: 'Permanent Marker',
              opacity: 1,
              zIndex: 3,
            }}>
            b
          </Text>
        </CardItem>
        <CardItem
          style={{
            backgroundColor: 'rgba(255,255,255,0.6)',
            elevation: 3,
            height: 70,
            marginTop: 0,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
          }}>
          <Left>
            <Thumbnail source={require('../Acessibilidade.png')} />
            <Body>
              <Text
                style={{
                  color: 'rgba(0,0,25,0.9)',
                  fontFamily: 'Permanent Marker',
                }}>
                Cajeh
              </Text>
            </Body>
          </Left>
          <Right>
            <Text
              style={{
                color: 'rgba(255,100,0,1)',
                fontFamily: 'Permanent Marker',
              }}>
              11h ago
            </Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
