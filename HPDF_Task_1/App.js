import React, { Component }  from 'react';
import { View, Text, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Content, Footer, Container, Thumbnail,Drawer, List, ListItem, Input, Card, CardItem, Title, Header, Left, Body, Right, Button, Icon, Item} from 'native-base';

import { DrawerNavigator } from 'react-navigation';
const HomeScreen = () => (
  <Container>
         <Content>
        <Card>
            <CardItem>
              <Left>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("./images/rakesh.png")}
                />
              </Left>
              <Right>
                <Text style={{ width: 280, fontSize: 16 }}>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    {" "}
                    Smarter Dav{" "}
                  </Text>
                  <Text>
                    <Icon name="checkmark-circle" style={{ color: "blue" }} />
                  </Text>
                  <Text> @smart..  30m        </Text>
                  <Text>
                    <Icon name="arrow-dropdown" style={{ color: "grey" }} />
                  </Text>
                </Text>
                <Text style={{ width: 280, fontSize: 16 }}>
                  <Text>
                    Who I am is what I have been and who I'll be is what I do
                    now.{" "}
                  </Text>
                  <Text style={{ color: "blue" }}>#RightToPrivacy </Text>
                </Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left />
              <Right>
                <View
                  style={{ width: 280, height: 150, backgroundColor: "grey" }}
                />
              </Right>
            </CardItem>
            <CardItem>
              <Left />
              <Right>
                <View>
                  <Text style={{ width: 280 }}>
                    <Icon
                      name="thumbs-down"
                      style={{ color: "blue", fontSize: 20 }}
                    />
                    <Text style={{ color: "blue", fontSize: 20 }}> 29     </Text>
                    <Icon
                      name="repeat"
                      style={{ color: "blue", fontSize: 20 }}
                    />
                    <Text style={{ color: "blue", fontSize: 20 }}> 551    </Text>
                    <Icon
                      name="heart"
                      style={{ color: "blue", fontSize: 20 }}
                    />
                    <Text style={{ color: "blue", fontSize: 20 }}> 1151     </Text>
                    <Icon name="mail" style={{ color: "blue", fontSize: 20 }} />
                  </Text>
                </View>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("./images/rakesh.png")}
                />
              </Left>
              <Right>
                <Text style={{ width: 280, fontSize: 16 }}>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    {" "}
                    Smarter Dav{" "}
                  </Text>
                  <Text>
                    <Icon name="checkmark-circle" style={{ color: "blue" }} />
                  </Text>
                  <Text> @smart..  35m        </Text>
                  <Text>
                    <Icon name="arrow-dropdown" style={{ color: "grey" }} />
                  </Text>
                </Text>
                <Text style={{ width: 280, fontSize: 16 }}>
                  <Text>
                    Who I am is what I have been and who I'll be is what I do
                    now.{" "}
                  </Text>
                  <Text style={{ color: "blue" }}>#RightToPrivacy </Text>
                </Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left />
              <Right>
                <View
                  style={{ width: 280, height: 150, backgroundColor: "grey" }}
                />
              </Right>
            </CardItem>
            <CardItem>
              <Left />
              <Right>
                <View>
                  <Text style={{ width: 280 }}>
                    <Icon
                      name="thumbs-down"
                      style={{ color: "blue", fontSize: 20 }}
                    />
                    <Text style={{ color: "blue", fontSize: 20 }}> 29     </Text>
                    <Icon
                      name="repeat"
                      style={{ color: "blue", fontSize: 20 }}
                    />
                    <Text style={{ color: "blue", fontSize: 20 }}> 551    </Text>
                    <Icon
                      name="heart"
                      style={{ color: "blue", fontSize: 20 }}
                    />
                    <Text style={{ color: "blue", fontSize: 20 }}> 1151     </Text>
                    <Icon name="mail" style={{ color: "blue", fontSize: 20 }} />
                  </Text>
                </View>
              </Right>
            </CardItem>
          </Card>
          
          <Footer style={{ backgroundColor: '#ffffff'}}>
          <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 2, left: 0, right: 0, justifyContent: 'space-between', padding: 5 }}>
         
          <Icon name='moon' style={{ color: 'blue'}} />
           
          
         
          <Icon name='settings' style={{ color: 'blue'}} />
            
          
        </View>
                
                </Footer>
        </Content>
      </Container>
    );


const SearchScreen = () => (
  
      <Container>
        <Header searchBar rounded style={{ backgroundColor: 'grey'}}>
          
          <Input placeholder="Search Twitter" />
          
          <Right>
            <Icon name="person" style={{fontSize: 30}} />
            </Right>
          
        </Header>
      </Container>
    );
 
const ProfileScreen = () => (
  <Container style={{ backgroundColor: '#ffffff', padding:10}}>
<Content style={{ backgroundColor: '#ffffff', padding:10}}>
<Card>
<CardItem cardBody>
<Image
style={{width: 75, height: 75, margin: 10}}
          source={require('./images/rakesh.png')}
        />
        </CardItem>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>
        Rakesh Rathi <Text>
                    <Icon name="arrow-dropdown" style={{ color: "blue" }} />
                    </Text>
        </Text>
        <Text style={{fontSize: 15,padding: 5}}>@rakku1997 </Text>
        
  

        <Text style={{fontSize: 15, padding: 5}}> <Text style={{fontWeight: 'bold'}}>312</Text> Following <Text style={{fontWeight: 'bold'}}>  192</Text> Followers </Text>
        
  </Card>
  <View style={{borderBottomWidth: 1.5, borderBottomColor: 'black',width: 400,}}/>
<Card>
           <Item style={{ padding: 5}}>
           <Icon name='person' />
           <Text style={{fontSize: 20}}> Profile</Text>
          </Item>
             <Item style={{ padding: 5}}>
             <Icon name='list' />
             <Text style={{fontSize: 20}}> Lists</Text>
          </Item>
          <Item style={{ padding: 5}}>
            <Icon  name='ionitron' />
            <Text style={{fontSize: 20}}> Moments</Text>
          </Item>
          <Item style={{ padding: 5}}>
            <Icon  name='document' />
            <Text style={{fontSize: 20}}> Highlights</Text>
          </Item>
          <Text></Text>
         </Card>
         <View style={{borderBottomWidth: 1.5, borderBottomColor: 'black',width: 400,}}/>
<Card>
  <Text style={{fontSize: 20, padding: 10}}> Setting and Privecy </Text>
  <Text style={{fontSize: 20, padding: 7}}> Help Center </Text>
 
  </Card>
  
  <View style={{borderBottomWidth: 1.5, borderBottomColor: 'black',width: 400,}}/>
  
</Content>
<Footer style={{ backgroundColor: '#ffffff'}}>
  <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 2, left: 0, right: 0, justifyContent: 'space-between', padding: 5 }}>
 
  <Icon name='moon' style={{ color: 'blue'}} />
   
  
 
  <Icon name='barcode' style={{ color: 'blue'}} />
    
  
</View>
        
        </Footer>
        </Container>
);
const MessageScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Message Screen</Text>
  </View>
);

const RootTabs = TabNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    }, 
    
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarLabel: 'Message',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name='menu'/>
        ),
      },
    },
  
  
});
export default RootTabs;




                                           
