import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';


export default class PostCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View /*style={styles.authorContainer}*/>
            <View style={styles.authorImageContainer}>
              <Image
                source={require('../assets/profile_img.png')}
                style={styles.profileImage}>
              </Image>
            </View>
            <View style={{paddingTop:10,paddingBottom:10}}>
              <Text style={styles.authorTitleText}>{this.props.post.author}</Text>
            </View>
            <Image style={styles.storyImage} source={require('../assets/post.jpeg')}></Image>
            <View style={{padding:20}}>
              <Text style={styles.captionText}>{this.props.post.caption}</Text>
            </View>
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={'heart'} size={RFValue(30)} color={'white'} />
                <Text style={styles.likeText}>13K</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    margin: RFValue(15),
    backgroundColor: '#181818',
    borderRadius: RFValue(20),
  },
  storyImage: {
    resizeMode: 'contain',
    width: '95%',
    alignSelf: 'center',
    height: RFValue(250),
  },
  authorTitleText: {
    fontSize: RFValue(20),
    alignSelf: 'center',
    color: 'white',
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    borderRadius: RFValue(30),
  },
  likeText: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
  authorImageContainer: {
    paddingTop:10,
  },
  profileImage: {
    resizeMode: 'contain',
    width: '20%',
    alignSelf: 'center',
    height: RFValue(20),
  },
  captionText: {
    fontSize: RFValue(18),
    alignSelf: 'left',
    color: 'white',
  },
  
});
